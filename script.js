const WORKS = [
  {
    "id": "p6",
    "title": "Bioluminescence (Βιοφωταύγεια)",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/06-bioluminescence-βιοφωταύγεια.jpg",
    "thumb": "assets/thumbs/06-bioluminescence-βιοφωταύγεια.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p7",
    "title": "Bioluminescence II (Βιοφωταύγεια II)",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/07-bioluminescence-ii-βιοφωταύγεια-ii.jpg",
    "thumb": "assets/thumbs/07-bioluminescence-ii-βιοφωταύγεια-ii.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p10",
    "title": "Make them happy with a happy Meal",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/10-make-them-happy-with-a-happy-meal.jpg",
    "thumb": "assets/thumbs/10-make-them-happy-with-a-happy-meal.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p11",
    "title": "Untitled (Άτιτλο)",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/11-untitled-άτιτλο.jpg",
    "thumb": "assets/thumbs/11-untitled-άτιτλο.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p13",
    "title": "Black hole in the kitchen (Μαύρη τρύπα στην κουζίνα)",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/13-black-hole-in-the-kitchen-μαύρη-τρύπα-στην-κουζίνα.jpg",
    "thumb": "assets/thumbs/13-black-hole-in-the-kitchen-μαύρη-τρύπα-στην-κουζίνα.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p14",
    "title": "Heart 2 Heart",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/14-heart-2-heart.jpg",
    "thumb": "assets/thumbs/14-heart-2-heart.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p15",
    "title": "Things forbidden in your house (Πράγματα που απαγορεύονται στο σπίτι σου)",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/15-things-forbidden-in-your-house-πράγματα-που-απαγορεύονται-στ.jpg",
    "thumb": "assets/thumbs/15-things-forbidden-in-your-house-πράγματα-που-απαγορεύονται-στ.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p19",
    "title": "Love/Paranoia",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/19-loveparanoia.jpg",
    "thumb": "assets/thumbs/19-loveparanoia.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p27",
    "title": "I feel safe in my country",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/27-i-feel-safe-in-my-country.jpg",
    "thumb": "assets/thumbs/27-i-feel-safe-in-my-country.jpg",
    "notes": "From Master's thesis exhibition series."
  },
  {
    "id": "p29",
    "title": "Η σωτηρία του κόσμου ήταν έναν οργασμό μακριά (series title)",
    "year": 2023,
    "medium": "Colored pencil on paper",
    "image": "assets/works/29-η-σωτηρία-του-κόσμου-ήταν-έναν-οργασμό-μακριά-series-title.jpg",
    "thumb": "assets/thumbs/29-η-σωτηρία-του-κόσμου-ήταν-έναν-οργασμό-μακριά-series-title.jpg",
    "notes": "From Master's thesis exhibition series."
  }
];

const grid = document.getElementById('workGrid');
const modal = document.getElementById('workModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalNotes = document.getElementById('modalNotes');
const yearEl = document.getElementById('year');
const workCount = document.getElementById('workCount');

const q = document.getElementById('workSearch');
const clearBtn = document.getElementById('clearSearch');

const modalPrev = document.querySelector('.modal__nav--prev');
const modalNext = document.querySelector('.modal__nav--next');

let gridItems = WORKS.slice();
let modalItems = WORKS.slice();
let modalIndex = -1;
let modalToken = 0;

function updateCount(items){
  if(!workCount) return;
  const total = WORKS.length;
  const n = items.length;
  workCount.textContent = (n === total) ? `${n} works` : `${n} / ${total} works`;
}

function render(items){
  gridItems = items.slice();
  updateCount(gridItems);
  grid.innerHTML = '';
  if(!items.length){
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = '<p class="muted">No works match your search.</p>';
    grid.appendChild(div);
    return;
  }
  items.forEach((w, idx) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = (idx === 0) ? 'cardWork cardWork--featured' : 'cardWork';
    card.style.setProperty('--i', idx);
    card.setAttribute('aria-label', `Open artwork: ${w.title}`);
    card.innerHTML = `
      <img src="${w.thumb}" alt="${w.title}" loading="lazy" decoding="async" />
      <div class="cardWork__body">
        <div class="title">${w.title}</div>
        <div class="sub">${w.year} · ${w.medium}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(w, gridItems));
    grid.appendChild(card);
  });
}

function openModal(w, itemsForNav = gridItems){
  if(!w) return;

  modalItems = (itemsForNav && itemsForNav.length) ? itemsForNav.slice() : WORKS.slice();
  modalIndex = modalItems.findIndex(x => x.id === w.id);
  if(modalIndex < 0){
    modalItems = WORKS.slice();
    modalIndex = modalItems.findIndex(x => x.id === w.id);
  }

  modalToken += 1;
  const token = modalToken;

  modalImg.src = w.thumb || w.image;
  modalImg.alt = w.title;
  modalTitle.textContent = w.title;
  modalMeta.textContent = `${w.year} · ${w.medium}`;
  if(modalNotes) modalNotes.textContent = w.notes || '';
  if(!modal.open && typeof modal.showModal === 'function') modal.showModal();

  // Swap to full-size image once loaded (keeps the modal snappy on slower connections).
  const hi = new Image();
  hi.decoding = 'async';
  hi.src = w.image;
  hi.onload = () => {
    if(token !== modalToken) return;
    modalImg.src = w.image;
  };
}

function closeModal(){
  if(modal.open) modal.close();
}

document.querySelector('.modal__close').addEventListener('click', closeModal);

function openAdjacent(dir){
  if(!modal.open) return;
  if(!modalItems.length) return;
  const n = modalItems.length;
  const nextIdx = (modalIndex + dir + n) % n;
  openModal(modalItems[nextIdx], modalItems);
}

if(modalPrev) modalPrev.addEventListener('click', () => openAdjacent(-1));
if(modalNext) modalNext.addEventListener('click', () => openAdjacent(1));

modal.addEventListener('click', (e) => {
  const rect = modal.getBoundingClientRect();
  const clickedBackdrop = (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom);
  if(clickedBackdrop) closeModal();
});
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
  if(!modal.open) return;
  if(e.key === 'ArrowLeft'){ e.preventDefault(); openAdjacent(-1); }
  if(e.key === 'ArrowRight'){ e.preventDefault(); openAdjacent(1); }
});

function applySearch(){
  const term = (q.value || '').trim().toLowerCase();
  if(!term) return render(WORKS);
  const filtered = WORKS.filter(w => w.title.toLowerCase().includes(term));
  render(filtered);
}

q.addEventListener('input', applySearch);
clearBtn.addEventListener('click', () => {
  q.value = '';
  applySearch();
  q.focus();
});

yearEl.textContent = new Date().getFullYear();

const navToggle = document.querySelector('.navToggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('isOpen');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if(!a) return;
  nav.classList.remove('isOpen');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
});

document.querySelectorAll('[data-open-work]').forEach((el) => {
  const id = el.getAttribute('data-open-work');
  const w = WORKS.find(x => x.id === id);
  if(!w) return;
  el.addEventListener('click', () => openModal(w, WORKS));
});
render(WORKS);
