const WORKS = [
  {
    id: "p6",
    title: "Bioluminescence (Βιοφωταύγεια)",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/06-bioluminescence-βιοφωταύγεια.jpg",
    thumb: "assets/thumbs/06-bioluminescence-βιοφωταύγεια.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p7",
    title: "Bioluminescence II (Βιοφωταύγεια II)",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/07-bioluminescence-ii-βιοφωταύγεια-ii.jpg",
    thumb: "assets/thumbs/07-bioluminescence-ii-βιοφωταύγεια-ii.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p10",
    title: "Make them happy with a happy Meal",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/10-make-them-happy-with-a-happy-meal.jpg",
    thumb: "assets/thumbs/10-make-them-happy-with-a-happy-meal.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p11",
    title: "Untitled (Άτιτλο)",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/11-untitled-άτιτλο.jpg",
    thumb: "assets/thumbs/11-untitled-άτιτλο.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p13",
    title: "Black hole in the kitchen (Μαύρη τρύπα στην κουζίνα)",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/13-black-hole-in-the-kitchen-μαύρη-τρύπα-στην-κουζίνα.jpg",
    thumb: "assets/thumbs/13-black-hole-in-the-kitchen-μαύρη-τρύπα-στην-κουζίνα.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p14",
    title: "Heart 2 Heart",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/14-heart-2-heart.jpg",
    thumb: "assets/thumbs/14-heart-2-heart.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p15",
    title: "Things forbidden in your house (Πράγματα που απαγορεύονται στο σπίτι σου)",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/15-things-forbidden-in-your-house-πράγματα-που-απαγορεύονται-στ.jpg",
    thumb: "assets/thumbs/15-things-forbidden-in-your-house-πράγματα-που-απαγορεύονται-στ.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p19",
    title: "Love / Paranoia",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/19-loveparanoia.jpg",
    thumb: "assets/thumbs/19-loveparanoia.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p27",
    title: "I feel safe in my country",
    year: 2023,
    medium: "Colored pencil on paper",
    image: "assets/works/27-i-feel-safe-in-my-country.jpg",
    thumb: "assets/thumbs/27-i-feel-safe-in-my-country.jpg",
    notes: "From the thesis exhibition series."
  },
  {
    id: "p29",
    title: "Η σωτηρία του κόσμου ήταν έναν οργασμό μακριά",
    year: 2025,
    medium: "Colored pencil on paper",
    image: "assets/works/29-η-σωτηρία-του-κόσμου-ήταν-έναν-οργασμό-μακριά-series-title.jpg",
    thumb: "assets/thumbs/29-η-σωτηρία-του-κόσμου-ήταν-έναν-οργασμό-μακριά-series-title.jpg",
    notes: "Series title work."
  }
];

const gallery = document.getElementById("workGallery");
const emptyState = document.getElementById("galleryEmpty");
const workSearch = document.getElementById("workSearch");
const clearSearch = document.getElementById("clearSearch");
const workCount = document.getElementById("workCount");
const modal = document.getElementById("workModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalNotes = document.getElementById("modalNotes");
const modalPrev = document.querySelector(".modal__nav--prev");
const modalNext = document.querySelector(".modal__nav--next");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let modalItems = WORKS.slice();
let modalIndex = -1;

initTheme();
initNavigation();
initGallery();
initModal();
initReveal();
initFooter();

function initTheme() {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  document.querySelector(".themeToggle")?.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", next);
  });
}

function initNavigation() {
  const navToggle = document.querySelector(".navToggle");
  const nav = document.querySelector(".nav");
  if (!navToggle || !nav) return;

  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("isOpen");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("isOpen");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("isOpen")) return;
    if (event.target.closest(".nav") || event.target.closest(".navToggle")) return;
    nav.classList.remove("isOpen");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });

  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
        if (!link) return;
        link.classList.toggle("active", entry.isIntersecting);
      });
    },
    { rootMargin: "-34% 0px -58% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function initGallery() {
  if (!gallery || !workSearch || !clearSearch || !workCount) return;
  gallery.setAttribute("aria-busy", "true");

  window.requestAnimationFrame(() => {
    renderWorks(WORKS);
  });

  workSearch.addEventListener("input", () => {
    const query = workSearch.value.trim().toLowerCase();
    const filtered = WORKS.filter((work) => {
      const haystack = `${work.title} ${work.year} ${work.medium} ${work.notes}`.toLowerCase();
      return haystack.includes(query);
    });
    renderWorks(filtered, query);
  });

  clearSearch.addEventListener("click", resetSearch);
  document.querySelector("[data-reset-search]")?.addEventListener("click", resetSearch);
}

function renderWorks(items, query = "") {
  gallery.innerHTML = "";
  gallery.setAttribute("aria-busy", "false");
  emptyState.hidden = items.length > 0;

  if (items.length === WORKS.length) {
    workCount.textContent = `${WORKS.length} works`;
  } else {
    workCount.textContent = `${items.length} of ${WORKS.length} works`;
  }

  if (!items.length) return;

  items.forEach((work, index) => {
    const card = createWorkCard(work, index, items, query);
    gallery.appendChild(card);
  });
}

function createWorkCard(work, index, activeItems, query) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "workCard";
  card.style.setProperty("--i", index);
  card.setAttribute("aria-label", `Open artwork: ${work.title}`);

  const frame = document.createElement("span");
  frame.className = "workCard__frame";

  const image = document.createElement("img");
  image.src = work.thumb;
  image.alt = work.title;
  image.loading = index < 2 && !query ? "eager" : "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    card.classList.add("is-error");
  });

  const fallback = document.createElement("span");
  fallback.className = "workCard__fallback";
  fallback.textContent = "Image unavailable";

  const caption = document.createElement("span");
  caption.className = "workCard__caption";

  const title = document.createElement("span");
  title.className = "workCard__title";
  title.textContent = work.title;

  const meta = document.createElement("span");
  meta.className = "workCard__meta";
  meta.textContent = `${work.year} / ${work.medium}`;

  frame.append(image, fallback);
  caption.append(title, meta);
  card.append(frame, caption);
  card.addEventListener("click", () => openModal(work, activeItems));
  return card;
}

function resetSearch() {
  workSearch.value = "";
  workSearch.focus();
  renderWorks(WORKS);
}

function initModal() {
  if (!modal || !modalImg || !modalTitle || !modalMeta) return;

  document.querySelectorAll("[data-open-work]").forEach((trigger) => {
    const work = WORKS.find((item) => item.id === trigger.getAttribute("data-open-work"));
    if (!work) return;
    trigger.addEventListener("click", () => openModal(work, WORKS));
  });

  document.querySelector(".modal__close")?.addEventListener("click", closeModal);
  modalPrev?.addEventListener("click", () => openAdjacent(-1));
  modalNext?.addEventListener("click", () => openAdjacent(1));

  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (outside) closeModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
    if (!modal.open) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      openAdjacent(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      openAdjacent(1);
    }
  });
}

function openModal(work, itemsForNav) {
  modalItems = itemsForNav && itemsForNav.length ? itemsForNav.slice() : WORKS.slice();
  modalIndex = modalItems.findIndex((item) => item.id === work.id);
  if (modalIndex < 0) {
    modalItems = WORKS.slice();
    modalIndex = modalItems.findIndex((item) => item.id === work.id);
  }

  modalImg.src = work.image;
  modalImg.alt = work.title;
  modalTitle.textContent = work.title;
  modalMeta.textContent = `${work.year} / ${work.medium}`;
  if (modalNotes) modalNotes.textContent = work.notes || "";

  if (!modal.open) {
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }
}

function closeModal() {
  if (!modal) return;
  if (modal.open && typeof modal.close === "function") modal.close();
  else modal.removeAttribute("open");
}

function openAdjacent(direction) {
  if (!modal.open || !modalItems.length) return;
  const count = modalItems.length;
  const nextIndex = (modalIndex + direction + count) % count;
  openModal(modalItems[nextIndex], modalItems);
}

function initReveal() {
  const revealItems = document.querySelectorAll(
    ".statement__grid, .sectionHead, .workControls, .aboutText, .cvRow, .contactList li"
  );

  if (reduceMotion.matches) {
    revealItems.forEach((item) => item.classList.add("revealed"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08 }
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${(index % 5) * 55}ms`;
    revealObserver.observe(item);
  });
}

function initFooter() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}
