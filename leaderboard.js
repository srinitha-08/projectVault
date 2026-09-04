import { store } from './store.js';

export function renderLeaderboardView(container) {
  const leaderboard = store.getLeaderboard();
  let activeTab = 'projects'; // 'projects', 'students', 'rising'

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Top Title -->
      <div class="text-center max-w-2xl mx-auto mb-10">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
          🏆 Global Rankings
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
          ProjectVault Leaderboard
        </h1>
        <p class="text-slate-400 text-sm sm:text-base mt-2">
          Recognizing the top student innovators, highest-rated open-source codebases, and fastest-growing creators.
        </p>
      </div>

      <!-- Tab Switcher -->
      <div class="flex justify-center mb-10">
        <div class="inline-flex p-1.5 rounded-2xl glass-panel border border-white/10 gap-2">
          <button id="tab-top-projects" class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-purple-600 text-white shadow-lg shadow-purple-600/30">
            🔥 Top Projects
          </button>
          <button id="tab-top-students" class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white">
            👨‍💻 Top Students
          </button>
          <button id="tab-rising-creators" class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white">
            📈 Rising Creators
          </button>
        </div>
      </div>

      <!-- Tab Dynamic Content Container -->
      <div id="leaderboard-content" class="space-y-12">
        <!-- Rendered dynamically -->
      </div>

    </div>
  `;

  const content = container.querySelector('#leaderboard-content');
  const btnProjects = container.querySelector('#tab-top-projects');
  const btnStudents = container.querySelector('#tab-top-students');
  const btnRising = container.querySelector('#tab-rising-creators');

  function renderTab() {
    if (activeTab === 'projects') {
      const top3 = leaderboard.topProjects.slice(0, 3);
      const rest = leaderboard.topProjects.slice(3);

      content.innerHTML = `
        <!-- Top 3 Podium Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          
          <!-- Rank 2: Silver -->
          <div class="podium-2 p-6 rounded-3xl text-center space-y-4 order-2 md:order-1 card-hover-effect">
            <div class="relative inline-block">
              <div class="w-20 h-20 rounded-2xl overflow-hidden mx-auto border-2 border-slate-300 shadow-lg">
                <img src="${top3[1].avatar}" alt="${top3[1].student}" class="w-full h-full object-cover" />
              </div>
              <span class="absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-slate-300 text-slate-900 font-extrabold text-xs shadow">#2</span>
            </div>
            <div>
              <h3 class="font-heading font-bold text-base text-white hover:text-cyan-300 transition-colors">
                <a href="#project/${top3[1].id}">${top3[1].name}</a>
              </h3>
              <p class="text-xs text-slate-400 mt-0.5">${top3[1].student} • <span class="text-cyan-400">${top3[1].category}</span></p>
            </div>
            <div class="flex items-center justify-center gap-4 text-xs font-semibold pt-2 border-t border-white/10">
              <span class="text-rose-400">❤️ ${top3[1].likes} likes</span>
              <span class="text-cyan-400">👁 ${top3[1].views} views</span>
            </div>
          </div>

          <!-- Rank 1: Gold Crown -->
          <div class="podium-1 p-8 rounded-3xl text-center space-y-5 order-1 md:order-2 transform md:-translate-y-4 card-hover-effect glow-purple">
            <div class="relative inline-block">
              <div class="text-2xl mb-1 animate-bounce">👑</div>
              <div class="w-24 h-24 rounded-2xl overflow-hidden mx-auto border-4 border-amber-400 shadow-2xl">
                <img src="${top3[0].avatar}" alt="${top3[0].student}" class="w-full h-full object-cover" />
              </div>
              <span class="absolute bottom-0 -right-2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black text-xs shadow-lg">#1</span>
            </div>
            <div>
              <span class="text-[10px] uppercase tracking-widest font-bold text-amber-400">Top Showcase Project</span>
              <h3 class="font-heading font-bold text-xl text-white hover:text-amber-300 transition-colors mt-1">
                <a href="#project/${top3[0].id}">${top3[0].name}</a>
              </h3>
              <p class="text-xs text-slate-300 mt-1">${top3[0].student} • <span class="text-cyan-400">${top3[0].category}</span></p>
            </div>
            <div class="flex items-center justify-center gap-6 text-sm font-semibold pt-2 border-t border-white/15">
              <span class="text-rose-400">❤️ ${top3[0].likes} likes</span>
              <span class="text-cyan-400">👁 ${top3[0].views} views</span>
            </div>
          </div>

          <!-- Rank 3: Bronze -->
          <div class="podium-3 p-6 rounded-3xl text-center space-y-4 order-3 card-hover-effect">
            <div class="relative inline-block">
              <div class="w-20 h-20 rounded-2xl overflow-hidden mx-auto border-2 border-amber-600 shadow-lg">
                <img src="${top3[2].avatar}" alt="${top3[2].student}" class="w-full h-full object-cover" />
              </div>
              <span class="absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-amber-600 text-white font-extrabold text-xs shadow">#3</span>
            </div>
            <div>
              <h3 class="font-heading font-bold text-base text-white hover:text-cyan-300 transition-colors">
                <a href="#project/${top3[2].id}">${top3[2].name}</a>
              </h3>
              <p class="text-xs text-slate-400 mt-0.5">${top3[2].student} • <span class="text-cyan-400">${top3[2].category}</span></p>
            </div>
            <div class="flex items-center justify-center gap-4 text-xs font-semibold pt-2 border-t border-white/10">
              <span class="text-rose-400">❤️ ${top3[2].likes} likes</span>
              <span class="text-cyan-400">👁 ${top3[2].views} views</span>
            </div>
          </div>

        </div>

        <!-- Ranks 4 to 10 Table -->
        <div class="glass-panel rounded-3xl border border-white/10 overflow-hidden">
          <div class="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 class="text-base font-bold font-heading text-white">Rankings 4 – 10</h3>
            <span class="text-xs text-slate-400">Updated hourly</span>
          </div>

          <div class="divide-y divide-white/5">
            ${rest.map(p => `
              <div class="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                <div class="flex items-center gap-4">
                  <span class="w-6 text-center font-bold text-slate-400 text-sm">#${p.rank}</span>
                  <img src="${p.avatar}" alt="${p.student}" class="w-10 h-10 rounded-xl object-cover border border-white/10" />
                  <div>
                    <a href="#project/${p.id}" class="font-semibold text-sm text-white hover:text-cyan-300 transition-colors">
                      ${p.name}
                    </a>
                    <p class="text-xs text-slate-400">${p.student} • <span class="text-cyan-400">${p.category}</span></p>
                  </div>
                </div>

                <div class="flex items-center gap-6 text-xs text-slate-400">
                  <span class="hidden sm:inline text-rose-400">❤️ ${p.likes}</span>
                  <span class="text-cyan-400">👁 ${p.views}</span>
                  <a href="#project/${p.id}" class="btn-secondary px-3 py-1.5 rounded-lg text-xs font-medium">View →</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    } else if (activeTab === 'students') {
      const top3 = leaderboard.topStudents.slice(0, 3);
      const rest = leaderboard.topStudents.slice(3);

      content.innerHTML = `
        <!-- Top 3 Students Podium -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          
          <!-- Silver #2 -->
          <div class="podium-2 p-6 rounded-3xl text-center space-y-4 order-2 md:order-1 card-hover-effect">
            <div class="relative inline-block">
              <img src="${top3[1].avatar}" alt="${top3[1].name}" class="w-20 h-20 rounded-2xl object-cover mx-auto border-2 border-slate-300" />
              <span class="absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-slate-300 text-slate-900 font-extrabold text-xs">#2</span>
            </div>
            <div>
              <h3 class="font-heading font-bold text-base text-white">${top3[1].name}</h3>
              <p class="text-xs text-cyan-400">${top3[1].college}</p>
            </div>
            <div class="pt-2 border-t border-white/10 text-xs text-slate-300 flex justify-center gap-4">
              <span>${top3[1].projects} Projects</span>
              <span class="text-rose-400">❤️ ${top3[1].likes}</span>
            </div>
          </div>

          <!-- Gold #1 -->
          <div class="podium-1 p-8 rounded-3xl text-center space-y-5 order-1 md:order-2 transform md:-translate-y-4 card-hover-effect glow-purple">
            <div class="relative inline-block">
              <div class="text-2xl mb-1 animate-bounce">👑</div>
              <img src="${top3[0].avatar}" alt="${top3[0].name}" class="w-24 h-24 rounded-2xl object-cover mx-auto border-4 border-amber-400" />
              <span class="absolute bottom-0 -right-2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black text-xs">#1</span>
            </div>
            <div>
              <span class="text-[10px] uppercase tracking-widest font-bold text-amber-400">Top Student Builder</span>
              <h3 class="font-heading font-bold text-xl text-white mt-1">
                <a href="#profile">${top3[0].name}</a>
              </h3>
              <p class="text-xs text-cyan-400">${top3[0].college}</p>
            </div>
            <div class="pt-2 border-t border-white/15 text-sm text-slate-300 flex justify-center gap-6 font-semibold">
              <span>${top3[0].projects} Projects</span>
              <span class="text-rose-400">❤️ ${top3[0].likes}</span>
            </div>
          </div>

          <!-- Bronze #3 -->
          <div class="podium-3 p-6 rounded-3xl text-center space-y-4 order-3 card-hover-effect">
            <div class="relative inline-block">
              <img src="${top3[2].avatar}" alt="${top3[2].name}" class="w-20 h-20 rounded-2xl object-cover mx-auto border-2 border-amber-600" />
              <span class="absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-amber-600 text-white font-extrabold text-xs">#3</span>
            </div>
            <div>
              <h3 class="font-heading font-bold text-base text-white">${top3[2].name}</h3>
              <p class="text-xs text-cyan-400">${top3[2].college}</p>
            </div>
            <div class="pt-2 border-t border-white/10 text-xs text-slate-300 flex justify-center gap-4">
              <span>${top3[2].projects} Projects</span>
              <span class="text-rose-400">❤️ ${top3[2].likes}</span>
            </div>
          </div>

        </div>

        <!-- Student Rankings Table -->
        <div class="glass-panel rounded-3xl border border-white/10 overflow-hidden">
          <div class="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 class="text-base font-bold font-heading text-white">Student Rankings</h3>
            <span class="text-xs text-slate-400">Calculated by projects, likes, and portfolio views</span>
          </div>

          <div class="divide-y divide-white/5">
            ${rest.map(s => `
              <div class="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                <div class="flex items-center gap-4">
                  <span class="w-6 text-center font-bold text-slate-400 text-sm">#${s.rank}</span>
                  <img src="${s.avatar}" alt="${s.name}" class="w-10 h-10 rounded-full object-cover border border-white/10" />
                  <div>
                    <h4 class="font-semibold text-sm text-white">${s.name}</h4>
                    <p class="text-xs text-slate-400">${s.college}</p>
                  </div>
                </div>

                <div class="flex items-center gap-6 text-xs text-slate-300">
                  <span class="font-medium">${s.projects} Projects</span>
                  <span class="text-rose-400">❤️ ${s.likes}</span>
                  <span class="text-cyan-400 hidden sm:inline">Score: ${s.score}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    } else if (activeTab === 'rising') {
      content.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${leaderboard.risingCreators.map(rc => `
            <div class="glass-panel p-6 rounded-3xl border border-white/10 card-hover-effect space-y-4">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                  ${rc.growth}
                </span>
                <span class="text-xs font-bold text-slate-500">#${rc.rank} Rising</span>
              </div>

              <div class="flex items-center gap-4">
                <img src="${rc.avatar}" alt="${rc.name}" class="w-14 h-14 rounded-2xl object-cover border border-purple-400/40" />
                <div>
                  <h4 class="font-heading font-bold text-base text-white">${rc.name}</h4>
                  <p class="text-xs text-cyan-400">${rc.college}</p>
                </div>
              </div>

              <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>${rc.projects} Projects</span>
                <span class="text-rose-400">❤️ ${rc.likes} likes</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  btnProjects.onclick = () => {
    activeTab = 'projects';
    btnProjects.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-purple-600 text-white shadow-lg shadow-purple-600/30';
    btnStudents.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white';
    btnRising.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white';
    renderTab();
  };

  btnStudents.onclick = () => {
    activeTab = 'students';
    btnStudents.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-purple-600 text-white shadow-lg shadow-purple-600/30';
    btnProjects.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white';
    btnRising.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white';
    renderTab();
  };

  btnRising.onclick = () => {
    activeTab = 'rising';
    btnRising.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-purple-600 text-white shadow-lg shadow-purple-600/30';
    btnProjects.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white';
    btnStudents.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white';
    renderTab();
  };

  renderTab();
}
