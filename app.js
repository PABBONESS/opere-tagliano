// STATE MANAGEMENT
let deck = [];
let currentIndex = 0;
let isFlipped = false;
let isShuffled = false;
let studyFilter = 'all'; // 'all', 'known', 'unknown', 'starred'

// User sets (stored by item ID)
let knownSet = new Set();
let unknownSet = new Set();
let starredSet = new Set();

// DOM ELEMENTS
const btnStudyMode = document.getElementById('btn-study-mode');
const btnLibraryMode = document.getElementById('btn-library-mode');
const viewStudy = document.getElementById('view-study');
const viewLibrary = document.getElementById('view-library');
const btnThemeToggle = document.getElementById('btn-theme-toggle');

// Flashcard elements
const flashcard = document.getElementById('flashcard');
const cardImage = document.getElementById('card-image');
const cardBackImage = document.getElementById('card-back-image');
const cardNumber = document.getElementById('card-number');
const cardAuthor = document.getElementById('card-author');
const cardTitle = document.getElementById('card-title');
const cardTechnique = document.getElementById('card-technique');
const cardPeriod = document.getElementById('card-period');
const btnStarCard = document.getElementById('btn-star-card');

// Progress & Stats
const progressCount = document.getElementById('progress-count');
const progressPercent = document.getElementById('progress-percent');
const progressBarFill = document.getElementById('progress-bar-fill');
const statKnownCount = document.getElementById('stat-known-count');
const statUnknownCount = document.getElementById('stat-unknown-count');
const statStarredCount = document.getElementById('stat-starred-count');
const filterStarredCount = document.getElementById('filter-starred-count');

// Controls
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnCorrect = document.getElementById('btn-correct');
const btnIncorrect = document.getElementById('btn-incorrect');
const btnShuffle = document.getElementById('btn-shuffle');
const btnResetStats = document.getElementById('btn-reset-stats');
const btnFilterStarred = document.getElementById('btn-filter-starred');

// Library & Filters
const librarySearch = document.getElementById('library-search');
const filterAuthor = document.getElementById('filter-author');
const filterPeriod = document.getElementById('filter-period');
const filterTechnique = document.getElementById('filter-technique');
const btnClearFilters = document.getElementById('btn-clear-filters');
const libraryGrid = document.getElementById('library-grid');
const libraryResultsCount = document.getElementById('library-results-count');

// Modal Elements
const detailModal = document.getElementById('detail-modal');
const modalImage = document.getElementById('modal-image');
const modalAuthor = document.getElementById('modal-author');
const modalTitle = document.getElementById('modal-title');
const modalTechnique = document.getElementById('modal-technique');
const modalPeriod = document.getElementById('modal-period');
const modalIndex = document.getElementById('modal-index');
const modalClose = document.getElementById('modal-close');
const modalCloseBackdrop = document.getElementById('modal-close-backdrop');

// ==========================================================================
// INITIALIZATION
// ==========================================================================
function init() {
  loadState();
  loadTheme();
  buildFilters();
  initDeck();
  renderCard();
  renderLibraryGrid();
  updateStats();
  setupEventListeners();
}

// Load sets from localStorage
function loadState() {
  try {
    const known = localStorage.getItem('gagliano_known');
    const unknown = localStorage.getItem('gagliano_unknown');
    const starred = localStorage.getItem('gagliano_starred');
    
    if (known) knownSet = new Set(JSON.parse(known));
    if (unknown) unknownSet = new Set(JSON.parse(unknown));
    if (starred) starredSet = new Set(JSON.parse(starred));
  } catch (e) {
    console.error("Errore nel caricamento del progresso:", e);
  }
}

// Save sets to localStorage
function saveState() {
  try {
    localStorage.setItem('gagliano_known', JSON.stringify([...knownSet]));
    localStorage.setItem('gagliano_unknown', JSON.stringify([...unknownSet]));
    localStorage.setItem('gagliano_starred', JSON.stringify([...starredSet]));
  } catch (e) {
    console.error("Errore nel salvataggio del progresso:", e);
  }
}

// Load theme preference
function loadTheme() {
  if (!btnThemeToggle) return;
  
  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('gagliano_theme') || 'dark';
  } catch (e) {
    console.warn("Storage non accessibile, uso tema notte come default:", e);
  }
  
  const sunIcon = btnThemeToggle.querySelector('.sun-icon');
  const moonIcon = btnThemeToggle.querySelector('.moon-icon');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  } else {
    document.body.classList.remove('light-theme');
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
  }
}

// Toggle between light and dark themes
function toggleTheme() {
  if (!btnThemeToggle) return;
  
  const isLight = document.body.classList.toggle('light-theme');
  const sunIcon = btnThemeToggle.querySelector('.sun-icon');
  const moonIcon = btnThemeToggle.querySelector('.moon-icon');
  
  try {
    localStorage.setItem('gagliano_theme', isLight ? 'light' : 'dark');
  } catch (e) {
    console.warn("Storage non accessibile, preferenza non salvata:", e);
  }
  
  if (isLight) {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  } else {
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
  }
}

// Build dropdown options dynamically from OPERE_DATA
function buildFilters() {
  const authors = new Set();
  const periods = new Set();
  const techniques = new Set();
  
  OPERE_DATA.forEach(item => {
    if (item.autore) authors.add(item.autore);
    if (item.periodo) periods.add(item.periodo);
    if (item.tecnica) techniques.add(item.tecnica);
  });
  
  // Sort alphabetically
  const sortedAuthors = [...authors].sort();
  const sortedPeriods = [...periods].sort();
  const sortedTechniques = [...techniques].sort();
  
  // Populate Authors select
  sortedAuthors.forEach(author => {
    const opt = document.createElement('option');
    opt.value = author;
    opt.textContent = author;
    filterAuthor.appendChild(opt);
  });
  
  // Populate Periods select
  sortedPeriods.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p;
    opt.textContent = p;
    filterPeriod.appendChild(opt);
  });
  
  // Populate Techniques select
  sortedTechniques.forEach(tech => {
    const opt = document.createElement('option');
    opt.value = tech;
    opt.textContent = tech.length > 50 ? tech.substring(0, 50) + "..." : tech;
    opt.title = tech;
    filterTechnique.appendChild(opt);
  });
}

// ==========================================================================
// DECK CONFIGURATION
// ==========================================================================
function initDeck() {
  let tempDeck = [...OPERE_DATA];
  
  // Apply current study filter
  if (studyFilter === 'known') {
    tempDeck = tempDeck.filter(item => knownSet.has(item.id));
    if (tempDeck.length === 0) {
      alert("Non hai ancora segnato nessuna opera come 'Lo So'!");
      studyFilter = 'all';
      tempDeck = [...OPERE_DATA];
    }
  } else if (studyFilter === 'unknown') {
    tempDeck = tempDeck.filter(item => unknownSet.has(item.id));
    if (tempDeck.length === 0) {
      alert("Non ci sono opere da rivedere! Ottimo lavoro!");
      studyFilter = 'all';
      tempDeck = [...OPERE_DATA];
    }
  } else if (studyFilter === 'starred') {
    tempDeck = tempDeck.filter(item => starredSet.has(item.id));
    if (tempDeck.length === 0) {
      alert("Non hai ancora salvato nessuna opera! Clicca sulla stella per salvare quelle più difficili.");
      studyFilter = 'all';
      tempDeck = [...OPERE_DATA];
    }
  }
  
  // Shuffle if active
  if (isShuffled) {
    deck = fisherYatesShuffle(tempDeck);
    btnShuffle.classList.add('active');
  } else {
    deck = tempDeck.sort((a, b) => a.id - b.id);
    btnShuffle.classList.remove('active');
  }
  
  currentIndex = 0;
  syncStudyFilterUI();
}

// Helper to toggle study filters
function toggleStudyFilter(filter) {
  if (studyFilter === filter) {
    studyFilter = 'all';
  } else {
    studyFilter = filter;
  }
  initDeck();
  renderCard();
}

// Sync visual active states for dashboard and banner
function syncStudyFilterUI() {
  const cardKnown = document.querySelector('.stat-card.known');
  const cardUnknown = document.querySelector('.stat-card.unknown');
  const cardStarred = document.querySelector('.stat-card.starred');
  
  cardKnown.classList.remove('active');
  cardUnknown.classList.remove('active');
  cardStarred.classList.remove('active');
  
  const banner = document.getElementById('study-filter-banner');
  const bannerText = document.getElementById('study-filter-text');
  
  banner.className = 'study-filter-banner';
  
  if (studyFilter === 'all') {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'flex';
    if (studyFilter === 'known') {
      cardKnown.classList.add('active');
      bannerText.textContent = "Lo So 👍";
      banner.classList.add('filter-known');
    } else if (studyFilter === 'unknown') {
      cardUnknown.classList.add('active');
      bannerText.textContent = "Da Rivedere 👎";
      banner.classList.add('filter-unknown');
    } else if (studyFilter === 'starred') {
      cardStarred.classList.add('active');
      bannerText.textContent = "Salvati ⭐";
      banner.classList.add('filter-starred');
    }
  }
  
  if (btnFilterStarred) {
    btnFilterStarred.classList.toggle('active', studyFilter === 'starred');
  }
}

// Fisher-Yates Shuffle Algorithm
function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ==========================================================================
// RENDER FLASHCARD
// ==========================================================================
function renderCard() {
  if (deck.length === 0) {
    cardNumber.textContent = "Nessuna opera";
    cardAuthor.textContent = "--";
    cardTitle.textContent = "--";
    cardTechnique.textContent = "--";
    cardPeriod.textContent = "--";
    cardImage.src = "";
    cardBackImage.src = "";
    return;
  }
  
  const item = deck[currentIndex];
  
  // Reset card visual state
  isFlipped = false;
  flashcard.classList.remove('flipped');
  
  // Load card metadata
  cardNumber.textContent = `Opera ${item.id} (Scheda ${currentIndex + 1} di ${deck.length})`;
  cardAuthor.textContent = item.autore || "Autore Ignoto";
  cardTitle.textContent = item.titolo || "Senza Titolo";
  cardTechnique.textContent = item.tecnica || "Tecnica non specificata";
  cardPeriod.textContent = item.periodo || "Periodo non specificato";
  
  // Update star button state
  if (starredSet.has(item.id)) {
    btnStarCard.classList.add('active');
  } else {
    btnStarCard.classList.remove('active');
  }
  
  // Smooth image loading with loading spinner
  const imgWrapper = cardImage.parentElement;
  const loader = imgWrapper.querySelector('.image-loader');
  
  if (loader) loader.classList.add('loading');
  
  // Load front image
  cardImage.onload = () => {
    if (loader) loader.classList.remove('loading');
  };
  cardImage.onerror = () => {
    if (loader) loader.classList.remove('loading');
    cardImage.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24'><text x='5' y='12' fill='%2364748b' font-size='3'>Immagine non trovata</text></svg>";
  };
  cardImage.src = item.immagine;
  
  // Set preview image for card back
  cardBackImage.src = item.immagine;
  
  updateProgressBar();
}

// Flip flashcard
function flipCard() {
  isFlipped = !isFlipped;
  flashcard.classList.toggle('flipped', isFlipped);
}

// Go to next card
function nextCard() {
  if (deck.length === 0) return;
  currentIndex = (currentIndex + 1) % deck.length;
  renderCard();
}

// Go to previous card
function prevCard() {
  if (deck.length === 0) return;
  currentIndex = (currentIndex - 1 + deck.length) % deck.length;
  renderCard();
}

// ==========================================================================
// ASSESSMENT & STATISTICS
// ==========================================================================
function assessCard(isCorrect) {
  if (deck.length === 0) return;
  const item = deck[currentIndex];
  
  if (isCorrect) {
    knownSet.add(item.id);
    unknownSet.delete(item.id);
  } else {
    unknownSet.add(item.id);
    knownSet.delete(item.id);
  }
  
  saveState();
  updateStats();
  
  // If card is flipped, flip it back and transition to the next card
  if (isFlipped) {
    flipCard();
    setTimeout(() => {
      nextCard();
    }, 250);
  } else {
    nextCard();
  }
}

// Toggle star (favorite) status
function toggleStar() {
  if (deck.length === 0) return;
  const item = deck[currentIndex];
  
  if (starredSet.has(item.id)) {
    starredSet.delete(item.id);
    btnStarCard.classList.remove('active');
  } else {
    starredSet.add(item.id);
    btnStarCard.classList.add('active');
  }
  
  saveState();
  updateStats();
  
  // If we are studying only starred items and we unstarred the last one,
  // we need to rebuild the deck.
  if (studyFilter === 'starred' && !starredSet.has(item.id)) {
    setTimeout(() => {
      initDeck();
      renderCard();
    }, 300);
  }
}

// Reset stats
function resetStats() {
  if (confirm("Sei sicuro di voler resettare tutte le statistiche di studio (Lo So / Da Rivedere)? Le opere salvate rimarranno.")) {
    knownSet.clear();
    unknownSet.clear();
    saveState();
    updateStats();
    initDeck();
    renderCard();
  }
}

// Update UI stats indicators
function updateStats() {
  statKnownCount.textContent = knownSet.size;
  statUnknownCount.textContent = unknownSet.size;
  statStarredCount.textContent = starredSet.size;
  filterStarredCount.textContent = starredSet.size;
}

// Update Progress Bar
function updateProgressBar() {
  if (deck.length === 0) {
    progressCount.textContent = "0 / 0";
    progressPercent.textContent = "0%";
    progressBarFill.style.width = "0%";
    return;
  }
  
  // We count the total items evaluated in this study session relative to total items
  const studiedTotal = knownSet.size + unknownSet.size;
  const totalItems = OPERE_DATA.length;
  
  // Progress in current deck
  const currentNum = currentIndex + 1;
  progressCount.textContent = `${currentNum} / ${deck.length}`;
  
  // Global completion percentage
  const globalPercent = Math.min(Math.round((studiedTotal / totalItems) * 100), 100);
  progressPercent.textContent = `${globalPercent}%`;
  
  // Progress bar based on current card index progress
  const progressBarPercent = Math.round((currentNum / deck.length) * 100);
  progressBarFill.style.width = `${progressBarPercent}%`;
}

// ==========================================================================
// LIBRARY GRID & FILTERING
// ==========================================================================
function renderLibraryGrid() {
  // Clear grid
  libraryGrid.innerHTML = '';
  
  const searchVal = librarySearch.value.toLowerCase().trim();
  const selectedAuthor = filterAuthor.value;
  const selectedPeriod = filterPeriod.value;
  const selectedTech = filterTechnique.value;
  
  let matches = OPERE_DATA.filter(item => {
    // Search match (checks author, title, technique, period, ID)
    const matchesSearch = !searchVal || 
      (item.autore && item.autore.toLowerCase().includes(searchVal)) ||
      (item.titolo && item.titolo.toLowerCase().includes(searchVal)) ||
      (item.tecnica && item.tecnica.toLowerCase().includes(searchVal)) ||
      (item.periodo && item.periodo.toLowerCase().includes(searchVal)) ||
      String(item.id) === searchVal;
      
    // Dropdown matches
    const matchesAuthor = !selectedAuthor || item.autore === selectedAuthor;
    const matchesPeriod = !selectedPeriod || item.periodo === selectedPeriod;
    const matchesTech = !selectedTech || item.tecnica === selectedTech;
    
    return matchesSearch && matchesAuthor && matchesPeriod && matchesTech;
  });
  
  libraryResultsCount.textContent = matches.length;
  
  if (matches.length === 0) {
    libraryGrid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <svg viewBox="0 0 24 24" width="48" height="48" style="margin-bottom: 12px; opacity: 0.5;"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/></svg>
        <p>Nessuna opera corrisponde ai filtri selezionati.</p>
      </div>
    `;
    return;
  }
  
  matches.forEach(item => {
    const cardEl = document.createElement('div');
    cardEl.className = 'library-card';
    cardEl.innerHTML = `
      <div class="lib-card-image-box">
        <img src="${item.immagine}" alt="${item.titolo}" loading="lazy">
      </div>
      <div class="lib-card-info">
        <span class="lib-card-id">Opera ${item.id}</span>
        <h3 class="lib-card-title">${item.titolo || 'Senza Titolo'}</h3>
        <p class="lib-card-author">${item.autore || 'Autore Ignoto'}</p>
      </div>
    `;
    
    // Open modal on click
    cardEl.addEventListener('click', () => {
      openModal(item);
    });
    
    libraryGrid.appendChild(cardEl);
  });
}

function clearFilters() {
  librarySearch.value = '';
  filterAuthor.value = '';
  filterPeriod.value = '';
  filterTechnique.value = '';
  renderLibraryGrid();
}

// ==========================================================================
// DETAIL MODAL LOGIC
// ==========================================================================
function openModal(item) {
  modalImage.src = item.immagine;
  modalAuthor.textContent = item.autore || "Autore Ignoto";
  modalTitle.textContent = item.titolo || "Senza Titolo";
  modalTechnique.textContent = item.tecnica || "Tecnica non specificata";
  modalPeriod.textContent = item.periodo || "Periodo non specificato";
  modalIndex.textContent = `Opera ${item.id} di 107`;
  
  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
}

function closeModal() {
  detailModal.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// EVENT LISTENERS Setup
// ==========================================================================
function setupEventListeners() {
  // Theme Switcher Click Handler
  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', toggleTheme);
  }

  // Navigation Tabs
  btnStudyMode.addEventListener('click', () => {
    btnStudyMode.classList.add('active');
    btnLibraryMode.classList.remove('active');
    viewStudy.classList.add('active');
    viewLibrary.classList.remove('active');
  });
  
  btnLibraryMode.addEventListener('click', () => {
    btnLibraryMode.classList.add('active');
    btnStudyMode.classList.remove('active');
    viewLibrary.classList.add('active');
    viewStudy.classList.remove('active');
    renderLibraryGrid(); // Refresh grid layout
  });
  
  // Flashcard Actions
  flashcard.addEventListener('click', (e) => {
    // Ignore clicks on star button
    if (e.target.closest('#btn-star-card')) return;
    
    if (isFlipped) {
      // If already flipped, click image to open modal detail at full screen
      if (e.target.closest('.card-back-image-preview')) {
        const item = deck[currentIndex];
        openModal(item);
        return;
      }
    }
    flipCard();
  });
  
  btnStarCard.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleStar();
  });
  
  // Controls
  btnPrev.addEventListener('click', prevCard);
  btnNext.addEventListener('click', nextCard);
  btnCorrect.addEventListener('click', () => assessCard(true));
  btnIncorrect.addEventListener('click', () => assessCard(false));
  
  // Shuffle Toggle
  btnShuffle.addEventListener('click', () => {
    isShuffled = !isShuffled;
    initDeck();
    renderCard();
  });
  
  // Dashboard Stat Cards Filtering Click Handlers
  document.querySelector('.stat-card.known').addEventListener('click', () => toggleStudyFilter('known'));
  document.querySelector('.stat-card.unknown').addEventListener('click', () => toggleStudyFilter('unknown'));
  document.querySelector('.stat-card.starred').addEventListener('click', () => toggleStudyFilter('starred'));
  
  // Active Filter Banner Clear Link
  document.getElementById('btn-clear-study-filter').addEventListener('click', () => toggleStudyFilter('all'));
  
  // Filter Starred Toggle (from secondary controls)
  btnFilterStarred.addEventListener('click', () => {
    toggleStudyFilter('starred');
  });
  
  // Reset Stats
  btnResetStats.addEventListener('click', resetStats);
  
  // Library filtering
  librarySearch.addEventListener('input', renderLibraryGrid);
  filterAuthor.addEventListener('change', renderLibraryGrid);
  filterPeriod.addEventListener('change', renderLibraryGrid);
  filterTechnique.addEventListener('change', renderLibraryGrid);
  btnClearFilters.addEventListener('click', clearFilters);
  
  // Modal close handlers
  modalClose.addEventListener('click', closeModal);
  modalCloseBackdrop.addEventListener('click', closeModal);
  
  // Keyboard Shortcuts Handler
  document.addEventListener('keydown', (e) => {
    // If typing in filter inputs, ignore shortcuts
    const isTyping = document.activeElement.tagName === 'INPUT' || 
                     document.activeElement.tagName === 'SELECT' || 
                     document.activeElement.tagName === 'TEXTAREA';
                     
    if (isTyping) return;
    
    // Modal is open, Escape should close it
    if (detailModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeModal();
      }
      return;
    }
    
    // Only handle study hotkeys if study view is active
    if (viewStudy.classList.contains('active')) {
      switch (e.key) {
        case ' ': // Spacebar
        case 'Enter':
          e.preventDefault();
          flipCard();
          break;
        case 'ArrowLeft':
          prevCard();
          break;
        case 'ArrowRight':
          nextCard();
          break;
        case 'ArrowUp':
        case 'a':
        case 'A':
          assessCard(true);
          break;
        case 'ArrowDown':
        case 'd':
        case 'D':
          assessCard(false);
          break;
        case 's':
        case 'S':
          toggleStar();
          break;
        case 'm':
        case 'M':
          isShuffled = !isShuffled;
          initDeck();
          renderCard();
          break;
        case 'Escape':
          if (isFlipped) flipCard();
          break;
      }
    }
  });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
