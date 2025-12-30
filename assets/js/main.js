(() => {
  const STORAGE_KEY = 'aggelos-site-language';
  const textRegistry = new Map();
  const attrRegistry = new Map();
  const metadataLabels = {
    year: { en: 'Year', de: 'Jahr' },
    medium: { en: 'Medium', de: 'Medium' },
    dimensions: { en: 'Dimensions', de: 'Maße' },
    series: { en: 'Series', de: 'Serie' },
    exhibition: { en: 'Exhibition', de: 'Ausstellung' },
    availability: { en: 'Availability', de: 'Verfügbarkeit' },
    status: { en: 'Status', de: 'Status' },
    notes: { en: 'Notes', de: 'Notizen' },
    usage: { en: 'Usage', de: 'Verwendung' }
  };

  const doc = document.documentElement;
  let activeLang = doc.getAttribute('lang') || 'en';
  let worksPromise;

  const safeLocalStorage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (err) {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (err) {
        /* ignore */
      }
    }
  };

  function normalizeTranslations(value) {
    if (!value) {
      return { en: '' };
    }
    if (typeof value === 'string') {
      return { en: value };
    }
    return value;
  }

  function translate(value, lang = activeLang) {
    const normalized = normalizeTranslations(value);
    return normalized[lang] ?? normalized.en ?? '';
  }

  function setLocalizedText(el, value) {
    if (!el) return;
    const normalized = normalizeTranslations(value);
    textRegistry.set(el, normalized);
    el.textContent = translate(normalized);
  }

  function setLocalizedAttribute(el, attr, value) {
    if (!el) return;
    const normalized = normalizeTranslations(value);
    attrRegistry.set(el, { attr, value: normalized });
    el.setAttribute(attr, translate(normalized));
  }

  function refreshLocalizedContent(lang) {
    textRegistry.forEach((value, el) => {
      el.textContent = translate(value, lang);
    });
    attrRegistry.forEach((payload, el) => {
      el.setAttribute(payload.attr, translate(payload.value, lang));
    });
  }

  function updateDynamicLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      const target = el.getAttribute('data-lang');
      el.hidden = target !== lang;
    });
    refreshLocalizedContent(lang);
    doc.setAttribute('lang', lang);
    activeLang = lang;
  }

  function setLanguage(lang) {
    if (!lang || lang === activeLang) return;
    updateDynamicLanguage(lang);
    highlightLanguageButtons(lang);
    safeLocalStorage.set(STORAGE_KEY, lang);
  }

  function highlightLanguageButtons(lang) {
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      const btnLang = btn.getAttribute('data-set-lang');
      btn.classList.toggle('is-active', btnLang === lang);
    });
  }

  function highlightNavigation() {
    const activeNav = document.body.getAttribute('data-nav');
    if (!activeNav) return;
    document.querySelectorAll('.site-nav__link').forEach(link => {
      const target = link.getAttribute('data-nav');
      link.classList.toggle('is-active', target === activeNav);
    });
  }

  function fetchWorks() {
    if (!worksPromise) {
      worksPromise = fetch('assets/data/works.json', { cache: 'no-store' })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load works data');
          }
          return response.json();
        })
        .catch(error => {
          console.error(error);
          return [];
        });
    }
    return worksPromise;
  }

  function createWorkCard(work) {
    const card = document.createElement('article');
    card.className = 'art-card';

    const imageLink = document.createElement('a');
    imageLink.href = `work.html?id=${encodeURIComponent(work.id)}`;
    imageLink.className = 'art-card__image';

    const image = document.createElement('img');
    image.src = work.thumbnail || (work.images && work.images[0] && work.images[0].src) || 'assets/images/placeholder.svg';
    if (work.images && work.images[0] && work.images[0].alt) {
      setLocalizedAttribute(image, 'alt', work.images[0].alt);
    } else {
      image.alt = translate(work.title);
    }
    imageLink.appendChild(image);
    card.appendChild(imageLink);

    const body = document.createElement('div');
    body.className = 'art-card__body';

    const title = document.createElement('h3');
    title.className = 'art-card__title';
    setLocalizedText(title, work.title);
    body.appendChild(title);

    const metaPieces = [work.year, work.medium, work.dimensions].filter(Boolean);
    if (metaPieces.length > 0) {
      const meta = document.createElement('p');
      meta.className = 'art-card__meta';
      meta.textContent = metaPieces.join(' · ');
      body.appendChild(meta);
    }

    if (work.shortDescription) {
      const teaser = document.createElement('p');
      teaser.className = 'art-card__description';
      setLocalizedText(teaser, work.shortDescription);
      body.appendChild(teaser);
    }

    const detailLinkEn = document.createElement('a');
    detailLinkEn.href = `work.html?id=${encodeURIComponent(work.id)}`;
    detailLinkEn.className = 'link-inline';
    detailLinkEn.setAttribute('data-lang', 'en');
    detailLinkEn.textContent = 'View details';
    body.appendChild(detailLinkEn);

    const detailLinkDe = document.createElement('a');
    detailLinkDe.href = `work.html?id=${encodeURIComponent(work.id)}`;
    detailLinkDe.className = 'link-inline';
    detailLinkDe.setAttribute('data-lang', 'de');
    detailLinkDe.textContent = 'Details ansehen';
    body.appendChild(detailLinkDe);

    card.appendChild(body);
    return card;
  }

  function renderWorksPreview() {
    const container = document.querySelector('[data-works-preview]');
    if (!container) return;
    fetchWorks().then(works => {
      const limit = Number(container.getAttribute('data-preview-count')) || 6;
      const featured = works.slice(0, limit);
      container.innerHTML = '';
      const fragment = document.createDocumentFragment();
      featured.forEach(work => fragment.appendChild(createWorkCard(work)));
      container.appendChild(fragment);
      updateDynamicLanguage(activeLang);
    });
  }

  function renderWorksGrid() {
    const container = document.querySelector('[data-works-grid]');
    if (!container) return;
    fetchWorks().then(works => {
      container.innerHTML = '';
      if (!works.length) {
        const notice = document.createElement('p');
        notice.className = 'alert';
        const en = document.createElement('span');
        en.setAttribute('data-lang', 'en');
        en.textContent = 'Artwork data is coming soon.';
        const de = document.createElement('span');
        de.setAttribute('data-lang', 'de');
        de.textContent = 'Artworks werden in Kürze ergänzt.';
        notice.appendChild(en);
        notice.appendChild(de);
        container.appendChild(notice);
      } else {
        const fragment = document.createDocumentFragment();
        works.forEach(work => fragment.appendChild(createWorkCard(work)));
        container.appendChild(fragment);
      }
      updateDynamicLanguage(activeLang);
    });
  }

  function renderWorkDetail() {
    const wrapper = document.querySelector('[data-work-detail]');
    if (!wrapper) return;
    const params = new URLSearchParams(window.location.search);
    const workId = params.get('id');
    if (!workId) {
      renderWorkNotFound(wrapper);
      return;
    }

    fetchWorks().then(works => {
      const work = works.find(item => item.id === workId);
      if (!work) {
        renderWorkNotFound(wrapper);
        return;
      }
      wrapper.innerHTML = '';
      wrapper.appendChild(buildWorkHero(work));
      wrapper.appendChild(buildWorkBody(work));
      updateDynamicLanguage(activeLang);
    });
  }

  function buildWorkHero(work) {
    const section = document.createElement('section');
    section.className = 'work-hero';

    const media = document.createElement('div');
    media.className = 'work-hero__media';

    const heroImg = document.createElement('img');
    heroImg.src = (work.images && work.images[0] && work.images[0].src) || work.thumbnail || 'assets/images/placeholder.svg';
    if (work.images && work.images[0] && work.images[0].alt) {
      setLocalizedAttribute(heroImg, 'alt', work.images[0].alt);
    } else {
      heroImg.alt = translate(work.title);
    }
    media.appendChild(heroImg);
    section.appendChild(media);

    const info = document.createElement('div');
    info.className = 'work-hero__info';

    const title = document.createElement('h1');
    setLocalizedText(title, work.title);
    info.appendChild(title);

    const metaList = document.createElement('div');
    metaList.className = 'meta-grid';

    const baseMeta = [
      { key: 'year', value: { en: work.year, de: work.year } },
      { key: 'medium', value: { en: work.medium, de: work.medium } }
    ];
    if (work.dimensions) {
      baseMeta.push({ key: 'dimensions', value: { en: work.dimensions, de: work.dimensions } });
    }
    const extendedMeta = Array.isArray(work.metadata) ? work.metadata : [];
    const combinedMeta = [...baseMeta, ...extendedMeta];

    combinedMeta.forEach(item => {
      const label = metadataLabels[item.key];
      const value = normalizeTranslations(item.value);
      if (!label) return;
      const dl = document.createElement('dl');
      const dt = document.createElement('dt');
      setLocalizedText(dt, label);
      const dd = document.createElement('dd');
      setLocalizedText(dd, value);
      dl.appendChild(dt);
      dl.appendChild(dd);
      metaList.appendChild(dl);
    });

    info.appendChild(metaList);

    const backLinkEn = document.createElement('a');
    backLinkEn.href = 'works.html';
    backLinkEn.className = 'link-inline';
    backLinkEn.setAttribute('data-lang', 'en');
    backLinkEn.textContent = 'Back to works';
    info.appendChild(backLinkEn);

    const backLinkDe = document.createElement('a');
    backLinkDe.href = 'works.html';
    backLinkDe.className = 'link-inline';
    backLinkDe.setAttribute('data-lang', 'de');
    backLinkDe.textContent = 'Zurück zu den Werken';
    info.appendChild(backLinkDe);

    section.appendChild(info);
    return section;
  }

  function buildWorkBody(work) {
    const section = document.createElement('section');
    section.className = 'work-body';

    if (work.longDescription) {
      const prose = document.createElement('div');
      prose.className = 'prose';
      const paragraph = document.createElement('p');
      setLocalizedText(paragraph, work.longDescription);
      prose.appendChild(paragraph);
      section.appendChild(prose);
    }

    if (Array.isArray(work.images) && work.images.length > 1) {
      const gallery = document.createElement('div');
      gallery.className = 'work-gallery';
      work.images.slice(1).forEach(imageData => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = imageData.src || 'assets/images/placeholder.svg';
        if (imageData.alt) {
          setLocalizedAttribute(img, 'alt', imageData.alt);
        }
        figure.appendChild(img);
        if (imageData.caption) {
          const caption = document.createElement('figcaption');
          setLocalizedText(caption, imageData.caption);
          figure.appendChild(caption);
        }
        gallery.appendChild(figure);
      });
      section.appendChild(gallery);
    }

    const inquiry = document.createElement('div');
    inquiry.className = 'work-inquiry';
    const contactLinkEn = document.createElement('a');
    contactLinkEn.href = 'contact.html#inquiry';
    contactLinkEn.className = 'button button--ghost';
    contactLinkEn.setAttribute('data-lang', 'en');
    contactLinkEn.textContent = 'Inquire about this work';
    inquiry.appendChild(contactLinkEn);

    const contactLinkDe = document.createElement('a');
    contactLinkDe.href = 'contact.html#inquiry';
    contactLinkDe.className = 'button button--ghost';
    contactLinkDe.setAttribute('data-lang', 'de');
    contactLinkDe.textContent = 'Werk anfragen';
    inquiry.appendChild(contactLinkDe);

    section.appendChild(inquiry);
    return section;
  }

  function renderWorkNotFound(wrapper) {
    wrapper.innerHTML = '';
    const notice = document.createElement('div');
    notice.className = 'alert';
    const en = document.createElement('p');
    en.setAttribute('data-lang', 'en');
    en.textContent = 'We could not find the artwork you were looking for. Please return to the portfolio.';
    const de = document.createElement('p');
    de.setAttribute('data-lang', 'de');
    de.textContent = 'Das gesuchte Werk wurde nicht gefunden. Bitte zurück zur Portfolio-Übersicht gehen.';
    notice.appendChild(en);
    notice.appendChild(de);

    const back = document.createElement('a');
    back.href = 'works.html';
    back.className = 'link-inline';
    back.setAttribute('data-lang', 'en');
    back.textContent = 'Back to works';
    notice.appendChild(back);

    const backDe = document.createElement('a');
    backDe.href = 'works.html';
    backDe.className = 'link-inline';
    backDe.setAttribute('data-lang', 'de');
    backDe.textContent = 'Zurück zu den Werken';
    notice.appendChild(backDe);

    wrapper.appendChild(notice);
    updateDynamicLanguage(activeLang);
  }

  function initLanguageToggle() {
    const storedLang = safeLocalStorage.get(STORAGE_KEY);
    if (storedLang && storedLang !== activeLang) {
      activeLang = storedLang;
    }
    updateDynamicLanguage(activeLang);
    highlightLanguageButtons(activeLang);

    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.addEventListener('click', event => {
        event.preventDefault();
        const lang = btn.getAttribute('data-set-lang');
        setLanguage(lang);
      });
    });
  }

  function init() {
    highlightNavigation();
    initLanguageToggle();

    const page = document.body.getAttribute('data-page');
    switch (page) {
      case 'home':
        renderWorksPreview();
        break;
      case 'works':
        renderWorksGrid();
        break;
      case 'work-detail':
        renderWorkDetail();
        break;
      default:
        break;
    }

    window.aggelosSite = {
      setLanguage,
      getLanguage: () => activeLang,
      translate
    };
  }

  document.addEventListener('DOMContentLoaded', init);
})();

