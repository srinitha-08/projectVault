import { store } from '../store.js';

export function initSearchModal() {
  let modal = document.getElementById('global-search-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'global-search-modal';
    modal.className = 'fixed inset-0 z-50 hidden modal-backdrop items-start justify-center pt-16 sm:pt-24 p-4';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="relative max-w-2xl w-full glass-panel border border-white/20 p-6 rounded-3xl shadow-2xl space-y-4 animate-float" style="animation-duration: 10s;">
      
      <!-- Top Search Input -->
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <input 
          type="text" 
          id="modal-search-input" 
          placeholder="Search projects by name, technology (e.g. Python), student, or category..." 
          class="vault-input pl-12 pr-10 py-3.5 text-base bg-[#0A0E18] border-purple-500/40 focus:border-cyan-400"
          autofocus
        />
        <button id="modal-search-close" class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white text-xs">
          ESC
        </button>
      </div>

      <!-- Quick Tech Filter Chips -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-slate-400">
        <span class="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Popular:</span>
        <button class="quick-filter-chip px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/10" data-term="Python">Python</button>
        <button class="quick-filter-chip px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/10" data-term="React">React</button>
        <button class="quick-filter-chip px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/10" data-term="AI / ML">AI / ML</button>
        <button class="quick-filter-chip px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/10" data-term="Pandas">Pandas</button>
        <button class="quick-filter-chip px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/10" data-term="Node.js">Node.js</button>
      </div>

      <!-- Results Container -->
      <div id="modal-search-results" class="max-h-80 overflow-y-auto space-y-2 pr-1">
        <!-- Results will be injected here -->
      </div>

      <!-- Footer Info -->
      <div class="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
        <span>Press <kbd class="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">ESC</kbd> to exit</span>
        <a href="#explore" id="modal-view-all-link" class="text-cyan-400 hover:underline">View in full Explore page →</a>
      </div>

    </div>
  `;

  const input = modal.querySelector('#modal-search-input');
  const resultsContainer = modal.querySelector('#modal-search-results');
  const closeBtn = modal.querySelector('#modal-search-close');
  const viewAllLink = modal.querySelector('#modal-view-all-link');

  function openModal(defaultQuery = '') {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (input) {
      input.value = defaultQuery;
      setTimeout(() => input.focus(), 50);
    }
    performSearch(defaultQuery);
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function performSearch(query) {
    const projects = store.getProjects();
    const q = query.trim().toLowerCase();

    if (!q) {
      // Show top 4 trending projects as recommendations
      const recs = projects.slice(0, 4);
      resultsContainer.innerHTML = `
        <p class="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">Recommended Student Projects</p>
        ${recs.map(p => renderResultItem(p, '')).join('')}
      `;
      attachItemClicks();
      return;
    }

    const matches = projects.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchStudent = p.student.name.toLowerCase().includes(q);
      const matchTech = p.technologies.some(t => t.toLowerCase().includes(q));
      const matchCat = p.category.toLowerCase().includes(q);
      return matchName || matchDesc || matchStudent || matchTech || matchCat;
    });

    if (viewAllLink) {
      viewAllLink.href = `#explore?search=${encodeURIComponent(query)}`;
    }

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="py-8 text-center text-slate-400 text-xs">
          No projects found matching "<span class="text-white font-medium">${query}</span>".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(p => renderResultItem(p, q)).join('');
    attachItemClicks();
  }

  function renderResultItem(p, query) {
    return `
      <a href="#project/${p.id}" class="search-result-row block p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.07] border border-white/5 hover:border-purple-500/30 transition-all flex items-center justify-between gap-4 group">
        <div class="flex items-center gap-3.5 min-w-0">
          <img src="${p.thumbnail}" alt="${p.name}" class="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10" />
          <div class="min-w-0">
            <h4 class="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors truncate">
              ${p.name}
            </h4>
            <p class="text-xs text-slate-400 truncate">
              ${p.student.name} • <span class="text-purple-300 font-medium">${p.category}</span>
            </p>
            <div class="flex flex-wrap gap-1 mt-1">
              ${p.technologies.slice(0, 3).map(tech => `
                <span class="text-[10px] px-1.5 py-0.2 rounded bg-white/5 text-slate-300 ${query && tech.toLowerCase().includes(query) ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : ''}">${tech}</span>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-3 text-xs text-slate-400 shrink-0">
          <span class="hidden sm:inline text-rose-400">❤️ ${p.likes}</span>
          <span class="text-cyan-400">👁 ${p.views}</span>
          <span class="text-slate-500 group-hover:text-white">→</span>
        </div>
      </a>
    `;
  }

  function attachItemClicks() {
    resultsContainer.querySelectorAll('.search-result-row').forEach(row => {
      row.onclick = () => closeModal();
    });
  }

  // Keyboard shortcut listener
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openModal();
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Event listener from other components
  window.addEventListener('open-search-modal', () => openModal());

  // Input typing
  if (input) {
    input.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  // Quick filter chips
  modal.querySelectorAll('.quick-filter-chip').forEach(btn => {
    btn.onclick = () => {
      const term = btn.dataset.term;
      if (input) input.value = term;
      performSearch(term);
    };
  });

  if (closeBtn) closeBtn.onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
}
