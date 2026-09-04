import { store } from './store.js';
import { renderProjectCards, setupCardEvents } from './hero.js';

export function renderExploreView(container) {
  const allProjects = store.getProjects();

  const CATEGORIES = [
    "All",
    "AI / ML",
    "Web Development",
    "Data Analytics",
    "App Development",
    "IoT",
    "Cybersecurity",
    "Game Development"
  ];

  const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];
  const SORT_OPTIONS = [
    { value: "trending", label: "Trending" },
    { value: "likes", label: "Most Liked" },
    { value: "views", label: "Most Viewed" },
    { value: "recent", label: "Recently Added" }
  ];

  // State inside Explore
  let selectedCategory = "All";
  let selectedDifficulty = "All";
  let selectedSort = "trending";
  let searchQuery = "";
  let visibleCount = 9;

  // Check URL query parameters if available
  const hash = window.location.hash;
  if (hash.includes('?')) {
    const params = new URLSearchParams(hash.split('?')[1]);
    if (params.get('search')) searchQuery = params.get('search');
    if (params.get('category')) selectedCategory = params.get('category');
  }

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Page Header -->
      <div class="mb-10 text-center sm:text-left">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
          🔍 Discover Student Work
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
          Explore Student Projects
        </h1>
        <p class="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Search open-source prototypes, ML models, and full-stack software built by passionate college learners worldwide.
        </p>
      </div>

      <!-- Search & Filters Toolbar -->
      <div class="glass-panel p-6 rounded-2xl border border-white/10 mb-8 space-y-6">
        
        <!-- Search Bar Input -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <input 
            type="text" 
            id="explore-search-input" 
            placeholder="Search projects, technologies, or students..." 
            value="${searchQuery}"
            class="vault-input pl-11 pr-10 py-3.5 text-sm sm:text-base bg-[#090E1A] border-white/15 focus:border-cyan-400"
          />
          ${searchQuery ? `
            <button id="clear-search-btn" class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          ` : ''}
        </div>

        <!-- Category Filter Pills -->
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Category</label>
          <div class="flex flex-wrap gap-2" id="category-pills">
            ${CATEGORIES.map(cat => `
              <button 
                class="cat-pill px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50' 
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }"
                data-category="${cat}"
              >
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Secondary Filters Row: Difficulty & Sort -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-white/10">
          
          <!-- Difficulty Filter -->
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Difficulty Level</label>
            <select id="difficulty-select" class="vault-input py-2 text-xs bg-[#090E1A]">
              ${DIFFICULTIES.map(diff => `
                <option value="${diff}" ${selectedDifficulty === diff ? 'selected' : ''}>${diff === 'All' ? 'All Difficulties' : diff}</option>
              `).join('')}
            </select>
          </div>

          <!-- Sort Filter -->
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Sort By</label>
            <select id="sort-select" class="vault-input py-2 text-xs bg-[#090E1A]">
              ${SORT_OPTIONS.map(opt => `
                <option value="${opt.value}" ${selectedSort === opt.value ? 'selected' : ''}>${opt.label}</option>
              `).join('')}
            </select>
          </div>

          <!-- Active Filter Stats / Reset -->
          <div class="flex items-end justify-between sm:justify-end gap-3 sm:col-span-2 lg:col-span-1">
            <span id="results-count" class="text-xs text-slate-400 self-center">Showing projects</span>
            <button id="reset-filters-btn" class="text-xs text-cyan-400 hover:underline py-2">
              Reset Filters
            </button>
          </div>

        </div>

      </div>

      <!-- Projects Grid Output -->
      <div id="explore-projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Rendered dynamically -->
      </div>

      <!-- Load More / End Indicator -->
      <div class="text-center mt-12" id="load-more-container">
        <!-- Rendered dynamically -->
      </div>

    </div>
  `;

  // Filter and Sort Engine
  function applyFilters() {
    const projects = store.getProjects();
    const query = searchQuery.trim().toLowerCase();

    let filtered = projects.filter(p => {
      // Category filter
      if (selectedCategory !== "All" && p.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== "All" && p.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query filter
      if (query) {
        const matchName = p.name.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        const matchStudent = p.student.name.toLowerCase().includes(query) || (p.student.college && p.student.college.toLowerCase().includes(query));
        const matchTech = p.technologies.some(t => t.toLowerCase().includes(query));
        const matchCat = p.category.toLowerCase().includes(query);
        return matchName || matchDesc || matchStudent || matchTech || matchCat;
      }
      return true;
    });

    // Sort logic
    if (selectedSort === "trending") {
      // Score = views + likes * 3
      filtered.sort((a, b) => ((b.views || 0) + (b.likes || 0) * 3) - ((a.views || 0) + (a.likes || 0) * 3));
    } else if (selectedSort === "likes") {
      filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (selectedSort === "views") {
      filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (selectedSort === "recent") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    // Update results label
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
      resultsCount.textContent = `Found ${filtered.length} project${filtered.length === 1 ? '' : 's'}`;
    }

    // Slice for visible pagination
    const paginated = filtered.slice(0, visibleCount);

    const grid = document.getElementById('explore-projects-grid');
    if (grid) {
      grid.innerHTML = renderProjectCards(paginated);
      setupCardEvents(grid);
    }

    const loadMoreContainer = document.getElementById('load-more-container');
    if (loadMoreContainer) {
      if (visibleCount < filtered.length) {
        loadMoreContainer.innerHTML = `
          <button id="load-more-btn" class="btn-secondary px-8 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
            <span>Load More Projects (${filtered.length - visibleCount} remaining)</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
        `;
        const loadBtn = document.getElementById('load-more-btn');
        if (loadBtn) {
          loadBtn.onclick = () => {
            visibleCount += 6;
            applyFilters();
          };
        }
      } else if (filtered.length > 0) {
        loadMoreContainer.innerHTML = `
          <p class="text-xs text-slate-500 font-medium">You've reached the end of the showcase catalogue.</p>
        `;
      } else {
        loadMoreContainer.innerHTML = '';
      }
    }
  }

  // Event Listeners
  const searchInput = document.getElementById('explore-search-input');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        visibleCount = 9;
        applyFilters();
      }, 250);
    });
  }

  // Category pills click
  const pillsContainer = document.getElementById('category-pills');
  if (pillsContainer) {
    pillsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      selectedCategory = btn.dataset.category;
      visibleCount = 9;

      pillsContainer.querySelectorAll('.cat-pill').forEach(b => {
        b.classList.remove('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30', 'border-purple-400/50');
        b.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
      });
      btn.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
      btn.classList.add('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30', 'border-purple-400/50');

      applyFilters();
    });
  }

  // Difficulty dropdown
  const diffSelect = document.getElementById('difficulty-select');
  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      selectedDifficulty = e.target.value;
      visibleCount = 9;
      applyFilters();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      selectedSort = e.target.value;
      visibleCount = 9;
      applyFilters();
    });
  }

  // Reset button
  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      selectedCategory = "All";
      selectedDifficulty = "All";
      selectedSort = "trending";
      searchQuery = "";
      visibleCount = 9;

      if (searchInput) searchInput.value = "";
      if (diffSelect) diffSelect.value = "All";
      if (sortSelect) sortSelect.value = "trending";

      pillsContainer.querySelectorAll('.cat-pill').forEach(b => {
        if (b.dataset.category === "All") {
          b.classList.add('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30', 'border-purple-400/50');
          b.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
        } else {
          b.classList.remove('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30', 'border-purple-400/50');
          b.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
        }
      });

      applyFilters();
    });
  }

  // Initial render
  applyFilters();
}
