import { store } from '../store.js';
import { renderProjectCards, setupCardEvents } from './hero.js';
import { showToast } from './toast.js';

export function renderDashboardView(container) {
  const user = store.getCurrentUser();
  const myProjects = store.getUserProjects();
  const savedProjects = store.getSavedProjects();

  let currentTab = 'my-projects'; // 'my-projects' or 'saved'

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Top Welcome Banner -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
            🚀 Creator Workspace
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Welcome back, ${user.name} 👋
          </h1>
          <p class="text-slate-400 text-sm mt-1">
            Track your showcase metrics, manage project submissions, and export ATS resume bullet points.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <a href="#upload" class="btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-purple-600/25">
            <span>+ Upload New Project</span>
          </a>
        </div>
      </div>

      <!-- Quick Metrics 4 Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        
        <!-- Metric 1 -->
        <div class="glass-panel p-5 rounded-2xl border border-white/10 card-hover-effect">
          <div class="flex items-center justify-between text-slate-400 mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider">Total Projects</span>
            <span class="p-2 rounded-xl bg-purple-500/10 text-purple-400 text-sm">📂</span>
          </div>
          <div class="text-2xl sm:text-3xl font-bold font-heading text-white">${myProjects.length}</div>
          <p class="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <span>↑ Active portfolio</span>
          </p>
        </div>

        <!-- Metric 2 -->
        <div class="glass-panel p-5 rounded-2xl border border-white/10 card-hover-effect">
          <div class="flex items-center justify-between text-slate-400 mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider">Total Views</span>
            <span class="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 text-sm">👁</span>
          </div>
          <div class="text-2xl sm:text-3xl font-bold font-heading text-cyan-400">
            ${myProjects.reduce((acc, p) => acc + (p.views || 0), 0) + (user.views || 0)}
          </div>
          <p class="text-[11px] text-slate-400 mt-1">+14% vs last week</p>
        </div>

        <!-- Metric 3 -->
        <div class="glass-panel p-5 rounded-2xl border border-white/10 card-hover-effect">
          <div class="flex items-center justify-between text-slate-400 mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider">Total Likes</span>
            <span class="p-2 rounded-xl bg-rose-500/10 text-rose-400 text-sm">❤️</span>
          </div>
          <div class="text-2xl sm:text-3xl font-bold font-heading text-rose-400">
            ${myProjects.reduce((acc, p) => acc + (p.likes || 0), 0) + (user.totalLikes || 0)}
          </div>
          <p class="text-[11px] text-emerald-400 mt-1">98% positive sentiment</p>
        </div>

        <!-- Metric 4 -->
        <div class="glass-panel p-5 rounded-2xl border border-white/10 card-hover-effect">
          <div class="flex items-center justify-between text-slate-400 mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider">Saved By Others</span>
            <span class="p-2 rounded-xl bg-amber-500/10 text-amber-400 text-sm">⭐</span>
          </div>
          <div class="text-2xl sm:text-3xl font-bold font-heading text-amber-400">
            ${myProjects.reduce((acc, p) => acc + (p.saves || 0), 0) + 140}
          </div>
          <p class="text-[11px] text-slate-400 mt-1">Recruiters & peers</p>
        </div>

      </div>

      <!-- Tab Buttons Bar -->
      <div class="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
        <button id="tab-my-projects" class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40">
          My Projects (${myProjects.length})
        </button>
        <button id="tab-saved" class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white hover:bg-white/5 border border-transparent">
          ⭐ Saved Projects (${savedProjects.length})
        </button>
      </div>

      <!-- Tab Content Area -->
      <div id="dashboard-tab-content">
        <!-- Rendered dynamically -->
      </div>

    </div>

    <!-- PROJECT TO RESUME MODAL (SPECIAL FEATURE) -->
    <div id="resume-modal" class="fixed inset-0 z-50 hidden modal-backdrop items-center justify-center p-4">
      <div class="relative max-w-2xl w-full glass-panel border border-cyan-500/40 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-5 animate-float">
        
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl">
              📄
            </div>
            <div>
              <h3 class="text-lg font-bold font-heading text-white">ATS Resume Description Generator</h3>
              <p class="text-xs text-slate-400">Optimized action verbs & technical metrics for your CV</p>
            </div>
          </div>
          <button id="close-resume-modal" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <!-- Target Project Details Header -->
        <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <div>
            <h4 id="resume-project-name" class="text-sm font-bold text-white">Project Name</h4>
            <p id="resume-project-tech" class="text-xs text-cyan-400 font-mono mt-0.5">Python • Flask • Machine Learning</p>
          </div>
          <span class="text-[11px] px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            ATS Score: 96/100
          </span>
        </div>

        <!-- Format Options -->
        <div class="flex items-center justify-between text-xs">
          <span class="text-slate-300 font-medium">Generated Resume Entry:</span>
          <div class="flex gap-2">
            <button id="resume-format-bullet" class="px-2.5 py-1 rounded-lg bg-purple-600/40 text-purple-200 border border-purple-400/40 text-[11px]">
              Bullet Points
            </button>
            <button id="resume-format-para" class="px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 hover:text-white text-[11px]">
              Single Paragraph
            </button>
          </div>
        </div>

        <!-- Textarea / Output container (Editable) -->
        <div class="relative">
          <textarea 
            id="resume-text-output" 
            rows="6" 
            class="vault-input text-xs sm:text-sm font-mono leading-relaxed bg-[#090D17] border-cyan-500/30 text-slate-200 p-4 rounded-xl resize-y"
          ></textarea>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span class="text-[11px] text-slate-400 flex items-center gap-1">
            <span>💡</span> Feel free to edit numbers or details directly above before copying!
          </span>
          <div class="flex items-center gap-2">
            <button id="copy-resume-btn" class="btn-primary px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-purple-600/30">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              <span>📋 Copy to Clipboard</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  const contentArea = container.querySelector('#dashboard-tab-content');
  const tabMyProjects = container.querySelector('#tab-my-projects');
  const tabSaved = container.querySelector('#tab-saved');

  function renderCurrentTab() {
    if (currentTab === 'my-projects') {
      const freshUserProjects = store.getUserProjects();
      if (freshUserProjects.length === 0) {
        contentArea.innerHTML = `
          <div class="glass-panel p-12 rounded-3xl border border-white/10 text-center space-y-4">
            <div class="w-16 h-16 rounded-2xl bg-purple-600/20 text-purple-300 mx-auto flex items-center justify-center text-3xl">
              📤
            </div>
            <h3 class="text-xl font-bold font-heading text-white">No Projects Uploaded Yet</h3>
            <p class="text-slate-400 text-sm max-w-md mx-auto">
              Showcase your semester assignments, capstone work, or personal projects to build your developer reputation.
            </p>
            <a href="#upload" class="btn-primary px-6 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2">
              <span>+ Upload Your First Project</span>
            </a>
          </div>
        `;
        return;
      }

      contentArea.innerHTML = `
        <div class="space-y-4">
          ${freshUserProjects.map(p => `
            <div class="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 card-hover-effect">
              
              <!-- Left Details -->
              <div class="flex items-start sm:items-center gap-4">
                <img src="${p.thumbnail}" alt="${p.name}" class="w-20 h-16 sm:w-24 sm:h-18 rounded-xl object-cover shrink-0 border border-white/10" />
                
                <div class="space-y-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-heading font-bold text-base text-white hover:text-cyan-300 transition-colors">
                      <a href="#project/${p.id}">${p.name}</a>
                    </h3>
                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      p.status === 'draft' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      p.status === 'pending' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                      'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }">
                      ${p.status === 'draft' ? '🟡 Draft' : p.status === 'pending' ? '🔴 Under Review' : '🟢 Published'}
                    </span>
                  </div>

                  <p class="text-xs text-slate-400 line-clamp-1">${p.tagline || p.description}</p>
                  
                  <div class="flex items-center gap-4 text-xs text-slate-400 pt-1">
                    <span class="flex items-center gap-1 text-cyan-400">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      ${p.views} views
                    </span>
                    <span class="flex items-center gap-1 text-rose-400">
                      <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      ${p.likes} likes
                    </span>
                    <span class="text-slate-500">•</span>
                    <span class="text-slate-400">${p.category}</span>
                  </div>
                </div>
              </div>

              <!-- Right Action Buttons -->
              <div class="flex flex-wrap items-center gap-2 self-end md:self-center shrink-0">
                
                <!-- Special Feature: Add Project to Resume Button -->
                <button 
                  class="resume-gen-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60 hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
                  data-id="${p.id}"
                  title="Generate ATS Resume Description"
                >
                  <span>📄 Add to Resume</span>
                </button>

                <!-- View Project Link -->
                <a href="#project/${p.id}" class="btn-secondary px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white">
                  View
                </a>

                <!-- Status toggle button -->
                <button 
                  class="toggle-status-btn p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-amber-300 transition-colors"
                  data-id="${p.id}"
                  data-status="${p.status}"
                  title="Toggle status (Published / Draft)"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </button>

                <!-- Delete button -->
                <button 
                  class="delete-project-btn p-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/20 text-rose-400 hover:text-rose-200 transition-colors"
                  data-id="${p.id}"
                  title="Delete Project"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>

              </div>

            </div>
          `).join('')}
        </div>
      `;

      attachDashboardProjectEvents(container);

    } else if (currentTab === 'saved') {
      const freshSaved = store.getSavedProjects();
      if (freshSaved.length === 0) {
        contentArea.innerHTML = `
          <div class="glass-panel p-12 rounded-3xl border border-white/10 text-center space-y-4">
            <div class="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-300 mx-auto flex items-center justify-center text-3xl">
              ⭐
            </div>
            <h3 class="text-xl font-bold font-heading text-white">No Saved Projects Yet</h3>
            <p class="text-slate-400 text-sm max-w-md mx-auto">
              Explore innovative student projects and bookmark your favorites to review later.
            </p>
            <a href="#explore" class="btn-secondary px-6 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-2">
              <span>Browse Explore</span>
            </a>
          </div>
        `;
        return;
      }

      contentArea.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="saved-projects-grid">
          ${renderProjectCards(freshSaved)}
        </div>
      `;

      const grid = contentArea.querySelector('#saved-projects-grid');
      if (grid) setupCardEvents(grid);
    }
  }

  // Tab switching
  tabMyProjects.onclick = () => {
    currentTab = 'my-projects';
    tabMyProjects.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40';
    tabSaved.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white hover:bg-white/5 border border-transparent';
    renderCurrentTab();
  };

  tabSaved.onclick = () => {
    currentTab = 'saved';
    tabSaved.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40';
    tabMyProjects.className = 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-white hover:bg-white/5 border border-transparent';
    renderCurrentTab();
  };

  renderCurrentTab();
}

function attachDashboardProjectEvents(container) {
  // Resume Generator Modal Trigger
  const resumeModal = container.querySelector('#resume-modal');
  const closeResumeBtn = container.querySelector('#close-resume-modal');
  const copyResumeBtn = container.querySelector('#copy-resume-btn');
  const formatBulletBtn = container.querySelector('#resume-format-bullet');
  const formatParaBtn = container.querySelector('#resume-format-para');
  const resumeTextOutput = container.querySelector('#resume-text-output');
  const resumeProjectName = container.querySelector('#resume-project-name');
  const resumeProjectTech = container.querySelector('#resume-project-tech');

  let activeProjectForResume = null;

  container.querySelectorAll('.resume-gen-btn').forEach(btn => {
    btn.onclick = () => {
      const pId = btn.dataset.id;
      const project = store.getProjectById(pId);
      if (!project || !resumeModal) return;

      activeProjectForResume = project;
      resumeProjectName.textContent = project.name;
      resumeProjectTech.textContent = project.technologies.join(' • ');

      // Generate bullet style by default
      generateResumeText(project, 'bullet', resumeTextOutput);

      resumeModal.classList.remove('hidden');
      resumeModal.classList.add('flex');
    };
  });

  if (closeResumeBtn && resumeModal) {
    closeResumeBtn.onclick = () => {
      resumeModal.classList.add('hidden');
      resumeModal.classList.remove('flex');
    };
  }

  if (formatBulletBtn && formatParaBtn && resumeTextOutput) {
    formatBulletBtn.onclick = () => {
      if (!activeProjectForResume) return;
      formatBulletBtn.className = 'px-2.5 py-1 rounded-lg bg-purple-600/40 text-purple-200 border border-purple-400/40 text-[11px]';
      formatParaBtn.className = 'px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 hover:text-white text-[11px]';
      generateResumeText(activeProjectForResume, 'bullet', resumeTextOutput);
    };

    formatParaBtn.onclick = () => {
      if (!activeProjectForResume) return;
      formatParaBtn.className = 'px-2.5 py-1 rounded-lg bg-purple-600/40 text-purple-200 border border-purple-400/40 text-[11px]';
      formatBulletBtn.className = 'px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 hover:text-white text-[11px]';
      generateResumeText(activeProjectForResume, 'para', resumeTextOutput);
    };
  }

  if (copyResumeBtn && resumeTextOutput) {
    copyResumeBtn.onclick = () => {
      navigator.clipboard.writeText(resumeTextOutput.value);
      showToast('Copied resume description to clipboard! 📋', 'success');
    };
  }

  // Delete project button
  container.querySelectorAll('.delete-project-btn').forEach(btn => {
    btn.onclick = () => {
      const pId = btn.dataset.id;
      if (confirm('Are you sure you want to remove this project from ProjectVault?')) {
        store.deleteProject(pId);
        showToast('Project deleted.', 'info');
        renderDashboardView(container);
      }
    };
  });

  // Toggle status button
  container.querySelectorAll('.toggle-status-btn').forEach(btn => {
    btn.onclick = () => {
      const pId = btn.dataset.id;
      const current = btn.dataset.status;
      const nextStatus = current === 'published' ? 'draft' : 'published';
      store.updateProjectStatus(pId, nextStatus);
      showToast(`Status updated to ${nextStatus}.`, 'purple');
      renderDashboardView(container);
    };
  });
}

function generateResumeText(project, format, outputEl) {
  const techString = project.technologies.slice(0, 4).join(', ');
  
  if (format === 'bullet') {
    const bullets = [
      `• Architected and deployed ${project.name} using ${techString}, optimizing responsiveness and cross-platform usability.`,
      `• Engineered core features including ${(project.features && project.features[0]) || 'scalable data pipelines and RESTful backend architectures'}.`,
      `• Attracted ${project.views}+ views and ${project.likes}+ peer developer endorsements on the ProjectVault showcase.`
    ];
    outputEl.value = `${project.name} | ${techString}\n` + bullets.join('\n');
  } else {
    outputEl.value = `${project.name} (${techString})\n${project.resumeDescription || `Developed ${project.name} utilizing ${techString}. Designed responsive architecture and core features, delivering a modern student showcase application with ${project.views}+ community impressions.`}`;
  }
}
