import { store } from '../store.js';
import { showToast } from './toast.js';

export function renderHomeView(container) {
  const projects = store.getProjects();
  const trendingProjects = projects.slice(0, 6);

  container.innerHTML = `
    <!-- HERO SECTION -->
    <section class="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden grid-bg">
      <!-- Ambient Glow Blobs -->
      <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style="animation-delay: 2s;"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column (Copy & CTAs) -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Animated Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-medium backdrop-blur-md shadow-lg shadow-purple-900/20">
              <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>✨ Built for Student Developers</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.15] text-white">
              Where Student Projects Become <span class="text-gradient-purple-blue">Opportunities.</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover, showcase, and share innovative projects created by the next generation of developers. Turn your academic work into recruiter-ready engineering portfolios.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#explore" class="btn-primary px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 text-sm shadow-xl">
                <span>🚀 Explore Projects</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="#upload" class="btn-secondary px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 text-sm">
                <span>📤 Upload Your Project</span>
              </a>
            </div>

            <!-- Trust / Tech Marquee preview -->
            <div class="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div class="flex items-center gap-2">
                <span class="text-emerald-400">●</span> 100% Free & Open Showcase
              </div>
              <div class="flex items-center gap-2">
                <span class="text-cyan-400">●</span> GitHub & Live Demo Verified
              </div>
              <div class="flex items-center gap-2">
                <span class="text-purple-400">●</span> Recruiter-Ready ATS Resume Exporter
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Floating Project Dashboard Preview -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <!-- Background Glow behind the card -->
              <div class="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <!-- Floating Hero Card -->
              <div class="relative glass-panel border border-white/15 p-6 rounded-2xl shadow-2xl animate-float">
                
                <!-- Card Header -->
                <div class="flex items-center justify-between pb-4 border-b border-white/10">
                  <div class="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" class="w-10 h-10 rounded-full border border-purple-400/60 object-cover" alt="Student" />
                    <div>
                      <h4 class="font-bold text-sm text-white">Srinitha V.</h4>
                      <p class="text-xs text-cyan-400">Stanford / PES University • Class of 2026</p>
                    </div>
                  </div>
                  <span class="badge-category">AI / ML</span>
                </div>

                <!-- Card Body -->
                <div class="py-4 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-heading font-bold text-lg text-white">AI Health Assistant</h3>
                    <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">🟢 Verified Demo</span>
                  </div>

                  <p class="text-xs text-slate-300 line-clamp-2">
                    Predictive symptom checker & clinical triage support using machine learning, Random Forest classifiers, and natural language processing.
                  </p>

                  <!-- Simulated Terminal / Code Snippet -->
                  <div class="code-box p-3 text-[11px] leading-relaxed text-slate-300">
                    <div class="flex items-center justify-between pb-1 mb-1 border-b border-white/5 text-[10px] text-slate-500">
                      <span>model_triage.py</span>
                      <span class="text-emerald-400">ROC-AUC: 89.4%</span>
                    </div>
                    <p><span class="text-purple-400">def</span> <span class="text-cyan-300">predict_urgency</span>(symptoms):</p>
                    <p class="pl-3 text-slate-400">clusters = tfidf.transform([symptoms])</p>
                    <p class="pl-3 text-emerald-400">return classifier.predict(clusters)</p>
                  </div>

                  <!-- Tech Tags -->
                  <div class="flex flex-wrap gap-1.5 pt-1">
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Flask</span>
                    <span class="tech-tag">Scikit-Learn</span>
                    <span class="tech-tag">Pandas</span>
                  </div>
                </div>

                <!-- Card Footer Metrics -->
                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div class="flex items-center gap-4">
                    <span class="flex items-center gap-1 text-rose-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      482
                    </span>
                    <span class="flex items-center gap-1 text-cyan-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      3.8K
                    </span>
                  </div>
                  <a href="#project/ai-health-assistant" class="text-purple-300 hover:text-white font-medium flex items-center gap-1 transition-colors">
                    View Project →
                  </a>
                </div>

              </div>

              <!-- Decorative floating satellite card -->
              <div class="absolute -bottom-6 -left-6 glass-panel border border-cyan-500/30 p-3 rounded-xl shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-xl">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-bold text-xs">
                  📄
                </div>
                <div>
                  <p class="text-[11px] font-bold text-white">ATS Resume Bullets</p>
                  <p class="text-[10px] text-emerald-400">Generated & Export Ready</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- STATISTICS SECTION (Animated Counters) -->
    <section id="stats-section" class="py-14 border-y border-white/10 bg-[#0B0F19]/60 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div class="stat-card space-y-1">
            <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight flex items-center justify-center">
              <span class="counter" data-target="10000">0</span><span class="text-purple-400">+</span>
            </div>
            <p class="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">Projects</p>
          </div>

          <div class="stat-card space-y-1">
            <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight flex items-center justify-center">
              <span class="counter" data-target="5000">0</span><span class="text-cyan-400">+</span>
            </div>
            <p class="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">Students</p>
          </div>

          <div class="stat-card space-y-1">
            <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight flex items-center justify-center">
              <span class="counter" data-target="50">0</span><span class="text-purple-400">+</span>
            </div>
            <p class="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">Technologies</p>
          </div>

          <div class="stat-card space-y-1">
            <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight flex items-center justify-center">
              <span class="counter" data-target="100">0</span><span class="text-emerald-400">+</span>
            </div>
            <p class="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">Colleges</p>
          </div>

        </div>
      </div>
    </section>

    <!-- TRENDING PROJECTS SECTION -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
            <span>🔥 Trending Projects</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Discover what students are building.
          </h2>
          <p class="text-slate-400 text-sm mt-1">
            Hand-picked student innovations with live codebases and real impact.
          </p>
        </div>
        <a href="#explore" class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group">
          <span>Browse all ${projects.length} projects</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="trending-grid">
        ${renderProjectCards(trendingProjects)}
      </div>

      <div class="text-center mt-12">
        <a href="#explore" class="btn-secondary px-8 py-3.5 rounded-xl font-medium inline-flex items-center gap-2 text-sm">
          <span>View All Projects in Explore</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </section>

    <!-- HOW IT WORKS / PILLARS -->
    <section class="py-20 border-t border-white/10 bg-[#090D17]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-cyan-400">Engineered For Student Success</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Turn Homework Into Career Momentum
          </h2>
          <p class="text-slate-400 text-sm">
            Everything you need to transform college assignments, hackathon prototypes, and side projects into credible portfolio assets.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Pillar 1 -->
          <div class="glass-panel p-8 rounded-2xl border border-white/10 card-hover-effect space-y-4">
            <div class="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-2xl">
              📂
            </div>
            <h3 class="text-xl font-heading font-bold text-white">1. Showcase Professionally</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Upload screenshots, demo links, tech stacks, and architecture breakdowns in minutes. No web hosting headaches.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div class="glass-panel p-8 rounded-2xl border border-white/10 card-hover-effect space-y-4">
            <div class="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-2xl">
              🔍
            </div>
            <h3 class="text-xl font-heading font-bold text-white">2. Peer Discovery & Feedback</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Get constructive code reviews from peer developers, faculty, and recruiters looking for talent from 100+ universities.
            </p>
          </div>

          <!-- Pillar 3 -->
          <div class="glass-panel p-8 rounded-2xl border border-white/10 card-hover-effect space-y-4">
            <div class="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-2xl">
              📄
            </div>
            <h3 class="text-xl font-heading font-bold text-white">3. Resume Ready Exports</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Generate ATS-optimized resume bullet points tailored to your tech stack and impact metrics with one click.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- CALL TO ACTION BANNER -->
    <section class="py-20 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-purple-950/60 via-[#111622] to-cyan-950/60 border border-purple-500/30 shadow-2xl backdrop-blur-xl text-center space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
            🚀 Join thousands of student builders
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-2xl mx-auto">
            Ready to show the world what you're building?
          </h2>
          <p class="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Upload your project today and get discovered by recruiters, peers, and mentors.
          </p>
          <div class="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#upload" class="btn-primary px-8 py-3.5 rounded-xl font-semibold text-sm">
              📤 Upload Your Project Now
            </a>
            <a href="#leaderboard" class="btn-secondary px-8 py-3.5 rounded-xl font-semibold text-sm">
              🏆 View Leaderboard
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach card interaction listeners (like, save)
  setupCardEvents(container);

  // Initialize animated counters on scroll
  initCounters();
}

export function renderProjectCards(projects) {
  if (!projects || projects.length === 0) {
    return `
      <div class="col-span-full py-12 text-center text-slate-400 glass-panel border border-white/10 rounded-2xl">
        <p class="text-lg font-medium text-white mb-1">No projects found</p>
        <p class="text-sm">Try adjusting your filters or search keywords.</p>
      </div>
    `;
  }

  return projects.map(project => {
    const isLiked = store.isLiked(project.id);
    const isSaved = store.isSaved(project.id);

    return `
      <div class="glass-panel border border-white/10 rounded-2xl overflow-hidden card-hover-effect flex flex-col justify-between group" data-project-id="${project.id}">
        
        <div>
          <!-- Thumbnail & Quick Tags -->
          <div class="relative h-48 w-full overflow-hidden bg-slate-900">
            <img 
              src="${project.thumbnail}" 
              alt="${project.name}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-90"></div>

            <!-- Top Overlays: Category & Save -->
            <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span class="badge-category backdrop-blur-md bg-black/40 border border-cyan-400/30 text-cyan-300">
                ${project.category}
              </span>
              <button 
                class="save-btn p-2 rounded-xl backdrop-blur-md transition-all ${isSaved ? 'bg-amber-500/30 text-amber-300 border border-amber-400/50' : 'bg-black/50 text-slate-300 hover:text-white border border-white/10 hover:bg-black/80'}"
                data-id="${project.id}"
                title="${isSaved ? 'Remove from Saved' : 'Save Project'}"
              >
                <svg class="w-4 h-4 ${isSaved ? 'fill-current' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
              </button>
            </div>

            <!-- Difficulty badge bottom-right -->
            <div class="absolute bottom-2 right-3">
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded ${
                project.difficulty === 'Beginner' ? 'badge-beginner' :
                project.difficulty === 'Advanced' ? 'badge-advanced' : 'badge-intermediate'
              }">
                ${project.difficulty}
              </span>
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-5 space-y-3">
            
            <!-- Student Profile / College -->
            <div class="flex items-center gap-2.5">
              <img src="${project.student.avatar}" alt="${project.student.name}" class="w-6 h-6 rounded-full object-cover border border-white/20" />
              <div class="text-xs truncate">
                <span class="font-medium text-slate-200">${project.student.name}</span>
                <span class="text-slate-500 mx-1">•</span>
                <span class="text-slate-400">${project.student.college.split('/')[0]}</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
              <a href="#project/${project.id}" class="hover:underline focus:outline-none">
                ${project.name}
              </a>
            </h3>

            <!-- Short Description -->
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">
              ${project.description}
            </p>

            <!-- Technology Tags -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${project.technologies.slice(0, 3).map(tech => `
                <span class="tech-tag text-[11px]">${tech}</span>
              `).join('')}
              ${project.technologies.length > 3 ? `
                <span class="tech-tag text-[11px] text-purple-300">+${project.technologies.length - 3}</span>
              ` : ''}
            </div>

          </div>
        </div>

        <!-- Card Footer -->
        <div class="px-5 py-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 bg-white/[0.01]">
          <div class="flex items-center gap-3">
            <!-- Like Button -->
            <button 
              class="like-btn flex items-center gap-1 transition-colors ${isLiked ? 'text-rose-400 font-semibold' : 'hover:text-rose-400'}"
              data-id="${project.id}"
            >
              <svg class="w-4 h-4 ${isLiked ? 'fill-current' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              <span class="like-count">${project.likes}</span>
            </button>

            <!-- Views -->
            <span class="flex items-center gap-1 text-slate-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>${project.views}</span>
            </span>
          </div>

          <!-- View Project Link -->
          <a href="#project/${project.id}" class="font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
            <span>View Project</span>
            <span>→</span>
          </a>
        </div>

      </div>
    `;
  }).join('');
}

export function setupCardEvents(container) {
  // Like buttons
  container.querySelectorAll('.like-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.id;
      const res = store.toggleLike(id);
      
      const countEl = btn.querySelector('.like-count');
      if (countEl) countEl.textContent = res.count;

      const svg = btn.querySelector('svg');
      if (res.liked) {
        btn.classList.add('text-rose-400', 'font-semibold');
        if (svg) svg.classList.add('fill-current');
        showToast('Project added to your liked collection! ❤️', 'purple');
      } else {
        btn.classList.remove('text-rose-400', 'font-semibold');
        if (svg) svg.classList.remove('fill-current');
      }
    };
  });

  // Save buttons
  container.querySelectorAll('.save-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.id;
      const res = store.toggleSave(id);

      const svg = btn.querySelector('svg');
      if (res.saved) {
        btn.classList.remove('bg-black/50', 'text-slate-300');
        btn.classList.add('bg-amber-500/30', 'text-amber-300', 'border-amber-400/50');
        if (svg) svg.classList.add('fill-current');
        showToast('Saved to your bookmarked projects! ⭐', 'success');
      } else {
        btn.classList.remove('bg-amber-500/30', 'text-amber-300', 'border-amber-400/50');
        btn.classList.add('bg-black/50', 'text-slate-300');
        if (svg) svg.classList.remove('fill-current');
        showToast('Project removed from saved collection.', 'info');
      }
    };
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1600; // ms
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / totalSteps;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(target * easeOutProgress);

            if (target >= 1000) {
              counter.innerText = (currentVal / 1000).toFixed(currentVal % 1000 === 0 ? 0 : 1) + 'K';
            } else {
              counter.innerText = currentVal;
            }

            if (currentStep >= totalSteps) {
              clearInterval(timer);
              if (target >= 1000) {
                counter.innerText = (target / 1000) + 'K';
              } else {
                counter.innerText = target;
              }
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const section = document.getElementById('stats-section');
  if (section) observer.observe(section);
}
