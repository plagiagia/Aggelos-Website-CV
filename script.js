/* ──────────────────────────────────────────────────────────────
   Aggelos Giannoulis — portfolio script
   ────────────────────────────────────────────────────────────── */

const WORKS = [
  { id: "p6",  title: "Bioluminescence (Βιοφωταύγεια)",                      year: 2023, medium: "Colored pencil on paper", image: "assets/works/06-bioluminescence-βιοφωταύγεια.jpg",                              thumb: "assets/thumbs/06-bioluminescence-βιοφωταύγεια.jpg",                              notes: "From the thesis exhibition series." },
  { id: "p7",  title: "Bioluminescence II (Βιοφωταύγεια II)",                year: 2023, medium: "Colored pencil on paper", image: "assets/works/07-bioluminescence-ii-βιοφωταύγεια-ii.jpg",                        thumb: "assets/thumbs/07-bioluminescence-ii-βιοφωταύγεια-ii.jpg",                        notes: "From the thesis exhibition series." },
  { id: "p10", title: "Make them happy with a happy Meal",                   year: 2023, medium: "Colored pencil on paper", image: "assets/works/10-make-them-happy-with-a-happy-meal.jpg",                         thumb: "assets/thumbs/10-make-them-happy-with-a-happy-meal.jpg",                         notes: "From the thesis exhibition series." },
  { id: "p11", title: "Untitled (Άτιτλο)",                                   year: 2023, medium: "Colored pencil on paper", image: "assets/works/11-untitled-άτιτλο.jpg",                                           thumb: "assets/thumbs/11-untitled-άτιτλο.jpg",                                           notes: "From the thesis exhibition series." },
  { id: "p13", title: "Black hole in the kitchen (Μαύρη τρύπα στην κουζίνα)",year: 2023, medium: "Colored pencil on paper", image: "assets/works/13-black-hole-in-the-kitchen-μαύρη-τρύπα-στην-κουζίνα.jpg",          thumb: "assets/thumbs/13-black-hole-in-the-kitchen-μαύρη-τρύπα-στην-κουζίνα.jpg",          notes: "From the thesis exhibition series." },
  { id: "p14", title: "Heart 2 Heart",                                       year: 2023, medium: "Colored pencil on paper", image: "assets/works/14-heart-2-heart.jpg",                                             thumb: "assets/thumbs/14-heart-2-heart.jpg",                                             notes: "From the thesis exhibition series." },
  { id: "p15", title: "Things forbidden in your house (Πράγματα που απαγορεύονται στο σπίτι σου)", year: 2023, medium: "Colored pencil on paper", image: "assets/works/15-things-forbidden-in-your-house-πράγματα-που-απαγορεύονται-στ.jpg", thumb: "assets/thumbs/15-things-forbidden-in-your-house-πράγματα-που-απαγορεύονται-στ.jpg", notes: "From the thesis exhibition series." },
  { id: "p19", title: "Love / Paranoia",                                     year: 2023, medium: "Colored pencil on paper", image: "assets/works/19-loveparanoia.jpg",                                              thumb: "assets/thumbs/19-loveparanoia.jpg",                                              notes: "From the thesis exhibition series." },
  { id: "p27", title: "I feel safe in my country",                           year: 2023, medium: "Colored pencil on paper", image: "assets/works/27-i-feel-safe-in-my-country.jpg",                                 thumb: "assets/thumbs/27-i-feel-safe-in-my-country.jpg",                                 notes: "From the thesis exhibition series." },
  { id: "p29", title: "Η σωτηρία του κόσμου ήταν έναν οργασμό μακριά",       year: 2023, medium: "Colored pencil on paper", image: "assets/works/29-η-σωτηρία-του-κόσμου-ήταν-έναν-οργασμό-μακριά-series-title.jpg", thumb: "assets/thumbs/29-η-σωτηρία-του-κόσμου-ήταν-έναν-οργασμό-μακριά-series-title.jpg", notes: "Series title work." },
];

/* ── Theme ─────────────────────────────────────────────────── */
(function initTheme() {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
})();

document.querySelector(".themeToggle")?.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const next = isDark ? "light" : "dark";
  if (next === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem("theme", next);
});

/* ── Reveal on scroll ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08 }
);
function observeReveal(el) {
  el.classList.add("reveal");
  revealObserver.observe(el);
}

/* ── Active nav link ───────────────────────────────────────── */
const navLinks = document.querySelectorAll('.nav > a[href^="#"]');
const sections = Array.from(navLinks)
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      const link = document.querySelector(`.nav > a[href="#${e.target.id}"]`);
      if (!link) return;
      if (e.isIntersecting) link.classList.add("active");
      else link.classList.remove("active");
    });
  },
  { rootMargin: "-30% 0px -60% 0px" }
);
sections.forEach((s) => sectionObserver.observe(s));

/* ── Modal ─────────────────────────────────────────────────── */
const modal = document.getElementById("workModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalNotes = document.getElementById("modalNotes");
const modalPrev = document.querySelector(".modal__nav--prev");
const modalNext = document.querySelector(".modal__nav--next");

let modalItems = WORKS.slice();
let modalIndex = -1;
let modalToken = 0;

function openModal(w, itemsForNav) {
  if (!w) return;
  modalItems = (itemsForNav && itemsForNav.length) ? itemsForNav.slice() : WORKS.slice();
  modalIndex = modalItems.findIndex((x) => x.id === w.id);
  if (modalIndex < 0) {
    modalItems = WORKS.slice();
    modalIndex = modalItems.findIndex((x) => x.id === w.id);
  }
  modalToken += 1;
  const token = modalToken;

  modalImg.src = w.thumb || w.image;
  modalImg.alt = w.title;
  modalTitle.textContent = w.title;
  modalMeta.textContent = `${w.year} · ${w.medium}`;
  if (modalNotes) modalNotes.textContent = w.notes || "";
  if (!modal.open && typeof modal.showModal === "function") modal.showModal();

  const hi = new Image();
  hi.decoding = "async";
  hi.src = w.image;
  hi.onload = () => {
    if (token !== modalToken) return;
    modalImg.src = w.image;
  };
}

function closeModal() {
  if (modal.open) modal.close();
}

document.querySelector(".modal__close").addEventListener("click", closeModal);

function openAdjacent(dir) {
  if (!modal.open || !modalItems.length) return;
  const n = modalItems.length;
  const nextIdx = (modalIndex + dir + n) % n;
  openModal(modalItems[nextIdx], modalItems);
}
modalPrev?.addEventListener("click", () => openAdjacent(-1));
modalNext?.addEventListener("click", () => openAdjacent(1));

modal.addEventListener("click", (e) => {
  const r = modal.getBoundingClientRect();
  const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  if (outside) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (!modal.open) return;
  if (e.key === "ArrowLeft")  { e.preventDefault(); openAdjacent(-1); }
  if (e.key === "ArrowRight") { e.preventDefault(); openAdjacent(1); }
});

/* ── Render works grouped by year, with editorial sizing ──── */
const groupsRoot = document.getElementById("workGroups");

// span sequence creates a varied editorial rhythm without being random
const SIZE_SEQUENCE = ["lg", "sm", "sm", "md", "md", "sm", "sm", "lg", "md", "md"];

function renderWorks() {
  // group by year, descending
  const byYear = WORKS.reduce((acc, w) => {
    (acc[w.year] = acc[w.year] || []).push(w);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  groupsRoot.innerHTML = "";

  years.forEach((year) => {
    const items = byYear[year];

    const section = document.createElement("div");
    section.className = "workYear";

    const head = document.createElement("div");
    head.className = "workYear__head";
    head.innerHTML = `
      <h3 class="workYear__year">${year}</h3>
      <span class="workYear__count">${items.length} works</span>
    `;
    section.appendChild(head);

    const grid = document.createElement("div");
    grid.className = "workGrid";

    items.forEach((w, idx) => {
      const size = SIZE_SEQUENCE[idx % SIZE_SEQUENCE.length];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `cardWork cardWork--${size}`;
      btn.setAttribute("aria-label", `Open artwork: ${w.title}`);
      btn.innerHTML = `
        <span class="cardWork__frame">
          <img src="${w.thumb}" alt="${w.title}" loading="lazy" decoding="async" />
        </span>
        <span class="cardWork__caption">
          <span class="cardWork__title">${w.title}</span>
          <span class="cardWork__meta">${w.year} · ${w.medium}</span>
        </span>
      `;
      btn.addEventListener("click", () => openModal(w, items));
      btn.style.transitionDelay = `${(idx % 6) * 0.05}s`;
      observeReveal(btn);
      grid.appendChild(btn);
    });

    section.appendChild(grid);
    groupsRoot.appendChild(section);
  });
}
renderWorks();

/* ── Mobile nav toggle ────────────────────────────────────── */
const navToggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("isOpen");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
nav.addEventListener("click", (e) => {
  if (!e.target.closest("a")) return;
  nav.classList.remove("isOpen");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
});

/* ── Featured cover button → opens series title work ──────── */
document.querySelectorAll("[data-open-work]").forEach((el) => {
  const id = el.getAttribute("data-open-work");
  const w = WORKS.find((x) => x.id === id);
  if (!w) return;
  el.addEventListener("click", () => openModal(w, WORKS));
});

/* ── Footer year ──────────────────────────────────────────── */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Reveal static blocks ─────────────────────────────────── */
document
  .querySelectorAll(".section__head, .statement, .cvRow, .about__col, .contact__list li, .cover__caption")
  .forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.06}s`;
    observeReveal(el);
  });
