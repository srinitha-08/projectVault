import { store } from './store.js';

export function initNavbar() {
  const navContainer = document.getElementById('main-navbar');
  if (!navContainer) return;

  function renderNav() {
    const user = store.getCurrentUser();
    const isLoggedIn = store.isLoggedIn();
    const currentHash = window.location.hash || '#home';

    navContainer.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo -->
          <a href="#home" class="flex items-center gap-3 group focus:outline-none">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
              <div class="w-full h-full bg-[#080B12] rounded-xl flex items-center justify-center">
                <span class="text-xl group-hover:scale-110 transition-transform">🚀</span>
              </div>
            </div>
            <div>
              <span class="text-xl font-bold font-heading tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Project<span class="text-gradient-purple-blue">Vault</span>
              </span>
              <span class="block text-[10px] uppercase font-semibold tracking-wider text-cyan-400/80 -mt-1">
                Student Showcase
              </span>
            </div>
          </a>

          <!-- Center Navigation Links -->
          <nav class="hidden md:flex items-center gap-1 bg-[#111622]/70 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            <a href="#home" class="nav-link px-4 py-1.5 rounded-full text-sm font-medium transition-all ${currentHash === '#home' || currentHash === '' ? 'bg-purple-600/30 text-white border border-purple-500/30 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}">
              Home
            </a>
            <a href="#explore" class="nav-link px-4 py-1.5 rounded-full text-sm font-medium transition-all ${currentHash.startsWith('#explore') ? 'bg-purple-600/30 text-white border border-purple-500/30 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}">
              Explore
            </a>
            <a href="#leaderboard" class="nav-link px-4 py-1.5 rounded-full text-sm font-medium transition-all ${currentHash === '#leaderboard' ? 'bg-purple-600/30 text-white border border-purple-500/30 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}">
              Leaderboard
            </a>
            <a href="#about" class="nav-link px-4 py-1.5 rounded-full text-sm font-medium transition-all ${currentHash === '#about' ? 'bg-purple-600/30 text-white border border-purple-500/30 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}">
              About
            </a>
          </nav>

          <!-- Right Actions -->
          <div class="hidden lg:flex items-center gap-3">
            <!-- Search Trigger -->
            <button id="nav-search-btn" class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-slate-400 hover:text-white bg-[#111622] hover:bg-white/10 border border-white/10 transition-all text-xs">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search projects...</span>
              <kbd class="px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-white/10">/</kbd>
            </button>

            <!-- User Auth / Dashboard Button -->
            ${isLoggedIn ? `
              <div class="relative group">
                <a href="#dashboard" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#111622] hover:bg-purple-900/30 border border-white/10 hover:border-purple-500/40 transition-all">
                  <img src="${user.avatar}" alt="${user.name}" class="w-7 h-7 rounded-full object-cover border border-purple-400/50" />
                  <span class="text-sm font-medium text-slate-200">${user.name.split(' ')[0]}</span>
                  <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </a>
                <div class="absolute right-0 top-full mt-2 w-48 py-2 bg-[#111622] border border-white/15 rounded-xl shadow-2xl backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <a href="#dashboard" class="flex items-center gap-2 px-4 py-2 text-xs text-slate-300 hover:bg-purple-600/20 hover:text-white">
                    <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                    Student Dashboard
                  </a>
                  <a href="#profile" class="flex items-center gap-2 px-4 py-2 text-xs text-slate-300 hover:bg-purple-600/20 hover:text-white">
                    <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    My Public Profile
                  </a>
                  <hr class="my-1 border-white/10" />
                  <button id="nav-logout-btn" class="w-full text-left flex items-center gap-2 px-4 py-2 text-xs text-rose-400 hover:bg-rose-500/10">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                    Sign Out
                  </button>
                </div>
              </div>
            ` : `
              <button id="nav-login-btn" class="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                Login
              </button>
            `}

            <!-- Upload Project CTA Button -->
            <a href="#upload" class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-600/25 transition-all transform hover:-translate-y-0.5">
              <span>📤</span>
              <span>Upload Project</span>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex items-center gap-2 md:hidden">
            <button id="mobile-search-btn" class="p-2 rounded-xl bg-[#111622] text-slate-300 border border-white/10">
              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>
            <button id="mobile-menu-toggle" class="p-2 rounded-xl bg-[#111622] text-slate-300 border border-white/10 focus:outline-none" aria-label="Toggle menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden px-4 pt-2 pb-6 bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/10 space-y-2">
        <a href="#home" class="block px-4 py-2.5 rounded-xl text-sm font-medium ${currentHash === '#home' ? 'bg-purple-600/30 text-white' : 'text-slate-300 hover:bg-white/5'}">Home</a>
        <a href="#explore" class="block px-4 py-2.5 rounded-xl text-sm font-medium ${currentHash.startsWith('#explore') ? 'bg-purple-600/30 text-white' : 'text-slate-300 hover:bg-white/5'}">Explore</a>
        <a href="#leaderboard" class="block px-4 py-2.5 rounded-xl text-sm font-medium ${currentHash === '#leaderboard' ? 'bg-purple-600/30 text-white' : 'text-slate-300 hover:bg-white/5'}">Leaderboard</a>
        <a href="#about" class="block px-4 py-2.5 rounded-xl text-sm font-medium ${currentHash === '#about' ? 'bg-purple-600/30 text-white' : 'text-slate-300 hover:bg-white/5'}">About</a>
        <a href="#dashboard" class="block px-4 py-2.5 rounded-xl text-sm font-medium ${currentHash === '#dashboard' ? 'bg-purple-600/30 text-white' : 'text-slate-300 hover:bg-white/5'}">Dashboard</a>
        <a href="#profile" class="block px-4 py-2.5 rounded-xl text-sm font-medium ${currentHash === '#profile' ? 'bg-purple-600/30 text-white' : 'text-slate-300 hover:bg-white/5'}">Profile</a>
        <div class="pt-2 border-t border-white/10 flex flex-col gap-2">
          <a href="#upload" class="text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500">
            📤 Upload Project
          </a>
          ${isLoggedIn ? `
            <button id="mobile-logout-btn" class="w-full text-center px-4 py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-xl">Sign Out</button>
          ` : `
            <button id="mobile-login-btn" class="w-full text-center px-4 py-2 text-sm text-slate-300 hover:text-white rounded-xl bg-white/5">Login</button>
          `}
        </div>
      </div>
    `;

    // Attach event listeners
    const searchBtn = document.getElementById('nav-search-btn');
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    if (searchBtn) searchBtn.onclick = () => window.dispatchEvent(new CustomEvent('open-search-modal'));
    if (mobileSearchBtn) mobileSearchBtn.onclick = () => window.dispatchEvent(new CustomEvent('open-search-modal'));

    const loginBtn = document.getElementById('nav-login-btn');
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    if (loginBtn) loginBtn.onclick = () => window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: 'login' }));
    if (mobileLoginBtn) mobileLoginBtn.onclick = () => window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: 'login' }));

    const logoutBtn = document.getElementById('nav-logout-btn');
    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
    if (logoutBtn) logoutBtn.onclick = () => { store.logout(); renderNav(); };
    if (mobileLogoutBtn) mobileLogoutBtn.onclick = () => { store.logout(); renderNav(); };

    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileToggle && mobileMenu) {
      mobileToggle.onclick = () => {
        mobileMenu.classList.toggle('hidden');
      };
    }
  }

  // Handle scroll glass effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navContainer.classList.add('glass-nav', 'shadow-2xl');
    } else {
      navContainer.classList.remove('shadow-2xl');
    }
  });

  // Store subscription
  store.subscribe((event) => {
    if (['AUTH_CHANGED', 'PROFILE_UPDATED'].includes(event)) {
      renderNav();
    }
  });

  window.addEventListener('hashchange', renderNav);
  renderNav();
}
