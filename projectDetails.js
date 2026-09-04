import { store } from './store.js';
import { showToast } from './toast.js';

export function renderProjectDetailsView(container, projectId) {
  const project = store.getProjectById(projectId);

  if (!project) {
    container.innerHTML = `
      <div class="max-w-4xl mx-auto px-4 py-24 text-center">
        <div class="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center text-3xl mb-4">
          ⚠️
        </div>
        <h2 class="text-2xl font-bold font-heading text-white">Project Not Found</h2>
        <p class="text-slate-400 text-sm mt-2 mb-6">The project you are looking for does not exist or has been removed.</p>
        <a href="#explore" class="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
          <span>← Back to Explore</span>
        </a>
      </div>
    `;
    return;
  }

  // Increment views in state
  store.incrementViews(project.id);

  const isLiked = store.isLiked(project.id);
  const isSaved = store.isSaved(project.id);
  const comments = store.getComments(project.id);

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Top Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs text-slate-400 mb-6">
        <a href="#home" class="hover:text-white transition-colors">Home</a>
        <span>/</span>
        <a href="#explore" class="hover:text-white transition-colors">Explore</a>
        <span>/</span>
        <span class="text-cyan-400 font-medium truncate max-w-xs">${project.name}</span>
      </nav>

      <!-- Main Header Card -->
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mb-8 relative overflow-hidden">
        <!-- Ambient background glow -->
        <div class="absolute -top-24 -right-24 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          
          <div class="space-y-3 max-w-3xl">
            <div class="flex flex-wrap items-center gap-3">
              <span class="badge-category text-xs">${project.category}</span>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded ${
                project.difficulty === 'Beginner' ? 'badge-beginner' :
                project.difficulty === 'Advanced' ? 'badge-advanced' : 'badge-intermediate'
              }">
                ${project.difficulty} Level
              </span>
              <span class="text-xs text-slate-400">Published on ${new Date(project.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              ${project.name}
            </h1>

            <p class="text-base text-slate-300 font-normal">
              ${project.tagline || project.description}
            </p>

            <!-- Student Byline -->
            <div class="flex items-center gap-3 pt-2">
              <img src="${project.student.avatar}" alt="${project.student.name}" class="w-9 h-9 rounded-full object-cover border border-purple-400/50" />
              <div>
                <a href="#profile" class="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                  ${project.student.name}
                </a>
                <p class="text-xs text-slate-400">${project.student.college}</p>
              </div>
            </div>
          </div>

          <!-- Top Action Buttons -->
          <div class="flex flex-wrap lg:flex-col gap-3 shrink-0 self-start lg:self-center">
            
            <div class="flex items-center gap-2">
              <!-- Like Button -->
              <button id="detail-like-btn" class="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border transition-all text-sm ${
                isLiked ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 font-semibold' : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }">
                <svg class="w-4 h-4 ${isLiked ? 'fill-current' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                <span>Like</span>
                <span id="detail-like-count" class="px-1.5 py-0.2 rounded bg-black/40 text-xs">${project.likes}</span>
              </button>

              <!-- Save Button -->
              <button id="detail-save-btn" class="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border transition-all text-sm ${
                isSaved ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold' : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }">
                <svg class="w-4 h-4 ${isSaved ? 'fill-current' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                <span>${isSaved ? 'Saved' : 'Save'}</span>
              </button>

              <!-- Share Button -->
              <button id="detail-share-btn" class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all" title="Share Project">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              </button>
            </div>

            <!-- External Links (GitHub & Demo) -->
            <div class="flex items-center gap-2">
              ${project.liveDemoUrl ? `
                <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn-glow-blue flex-1 px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
                  <span>🌐 Live Demo</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              ` : ''}
              ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary flex-1 px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  <span>GitHub</span>
                </a>
              ` : ''}
            </div>

          </div>

        </div>
      </div>

      <!-- Main Layout Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left 8 Columns: Gallery, Overview, Features, Comments -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Screenshot Gallery with Lightbox Feature -->
          <div class="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h2 class="text-lg font-heading font-bold text-white flex items-center gap-2">
              <span>📸 Project Screenshots</span>
              <span class="text-xs font-normal text-slate-400">(Click to zoom)</span>
            </h2>

            <!-- Main Big Screenshot -->
            <div class="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group cursor-pointer" id="main-screenshot-viewer">
              <img 
                id="active-screenshot" 
                src="${project.screenshots[0]}" 
                alt="${project.name}" 
                class="w-full h-80 sm:h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span class="px-4 py-2 rounded-xl bg-black/70 text-white text-xs font-medium backdrop-blur-md flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
                  Open Fullscreen Lightbox
                </span>
              </div>
            </div>

            <!-- Thumbnails strip -->
            ${project.screenshots.length > 1 ? `
              <div class="flex items-center gap-3 overflow-x-auto pb-2" id="gallery-thumbnails">
                ${project.screenshots.map((imgUrl, idx) => `
                  <button class="gallery-thumb-btn w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${idx === 0 ? 'border-purple-500 ring-2 ring-purple-500/30' : 'border-white/10 opacity-70 hover:opacity-100'}" data-img="${imgUrl}">
                    <img src="${imgUrl}" class="w-full h-full object-cover" alt="Thumbnail ${idx + 1}" />
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Project Overview & Motivation -->
          <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 class="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span>📖 Project Overview</span>
            </h2>

            <div class="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>${project.description}</p>
              
              ${project.overview ? `
                <div class="mt-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 whitespace-pre-line leading-relaxed text-slate-300">
                  ${project.overview.replace(/###/g, '▫️')}
                </div>
              ` : ''}
            </div>

            <!-- Key Features List -->
            ${project.features && project.features.length > 0 ? `
              <div class="pt-4 border-t border-white/10 space-y-3">
                <h3 class="text-sm font-bold uppercase tracking-wider text-cyan-400">Key Features & Architecture</h3>
                <ul class="space-y-2">
                  ${project.features.map(feat => `
                    <li class="flex items-start gap-2 text-sm text-slate-300">
                      <span class="text-emerald-400 mt-1">✓</span>
                      <span>${feat}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}
          </div>

          <!-- Community Feedback & Comments Section -->
          <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6" id="comments-section">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 class="text-xl font-heading font-bold text-white flex items-center gap-2">
                <span>💬 Community Feedback</span>
                <span class="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono" id="comments-badge">${comments.length}</span>
              </h2>
              <span class="text-xs text-slate-400">Join the discussion</span>
            </div>

            <!-- Add Comment Form -->
            <form id="add-comment-form" class="space-y-3">
              <div class="relative">
                <textarea 
                  id="comment-text-input" 
                  rows="3" 
                  required 
                  placeholder="Leave constructive feedback or ask a technical question... (e.g. 'Really clean dashboard design!', 'Try adding mobile responsive styles.')"
                  class="vault-input text-sm resize-none bg-[#090E1A]"
                ></textarea>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-[11px] text-slate-500">Posting as <span class="text-purple-300 font-medium">${store.getCurrentUser().name}</span></p>
                <button type="submit" class="btn-primary px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                  <span>Send Feedback</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </button>
              </div>
            </form>

            <!-- Comments List -->
            <div class="space-y-4 pt-2" id="comments-list">
              ${renderCommentsList(comments, project.id)}
            </div>
          </div>

        </div>

        <!-- Right 4 Columns: Tech Stack, Project Stats, Developer Card -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Tech Stack Card -->
          <div class="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h3 class="text-base font-heading font-bold text-white flex items-center gap-2">
              <span>🛠 Tech Stack</span>
            </h3>
            <div class="flex flex-wrap gap-2">
              ${project.technologies.map(tech => `
                <div class="px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs font-medium flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>${tech}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Project Stats Metrics -->
          <div class="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h3 class="text-base font-heading font-bold text-white flex items-center gap-2">
              <span>📊 Project Metrics</span>
            </h3>
            <div class="grid grid-cols-3 gap-3 text-center">
              <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p class="text-xs text-slate-400">Views</p>
                <p class="text-lg font-bold text-cyan-400 mt-1">${project.views}</p>
              </div>
              <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p class="text-xs text-slate-400">Likes</p>
                <p class="text-lg font-bold text-rose-400 mt-1" id="stat-likes-count">${project.likes}</p>
              </div>
              <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p class="text-xs text-slate-400">Saves</p>
                <p class="text-lg font-bold text-amber-400 mt-1" id="stat-saves-count">${project.saves}</p>
              </div>
            </div>
          </div>

          <!-- Developer Card -->
          <div class="glass-panel p-6 rounded-3xl border border-white/10 space-y-5">
            <div class="flex items-center gap-3">
              <img src="${project.student.avatar}" alt="${project.student.name}" class="w-14 h-14 rounded-2xl object-cover border-2 border-purple-400/50 shadow-lg" />
              <div>
                <h4 class="font-heading font-bold text-base text-white">${project.student.name}</h4>
                <p class="text-xs text-cyan-400">${project.student.role || 'Student Developer'}</p>
                <p class="text-[11px] text-slate-400">${project.student.college}</p>
              </div>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed">
              "${project.student.bio || 'Building projects, learning technology and exploring data.'}"
            </p>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between">
              <span class="text-xs text-slate-400">Verified Creator</span>
              <a href="#profile" class="btn-secondary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:border-purple-400/50">
                <span>View Profile</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <!-- Resume Converter Promo Card -->
          <div class="glass-panel p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-purple-950/20 space-y-3">
            <div class="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <span>📄 ATS Resume Ready</span>
            </div>
            <p class="text-xs text-slate-300">
              Students can export formatted resume bullet points for this project directly from the Dashboard.
            </p>
            <a href="#dashboard" class="text-xs font-semibold text-cyan-300 hover:text-white flex items-center gap-1">
              <span>Go to Student Dashboard →</span>
            </a>
          </div>

        </div>

      </div>

    </div>

    <!-- Lightbox Modal Container -->
    <div id="lightbox-modal" class="fixed inset-0 z-50 hidden modal-backdrop items-center justify-center p-4">
      <div class="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
        <button id="close-lightbox-btn" class="absolute -top-12 right-0 text-white hover:text-cyan-400 p-2 text-sm font-semibold flex items-center gap-1">
          <span>Close</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <img id="lightbox-image" src="" alt="Zoomed screenshot" class="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/20 object-contain" />
      </div>
    </div>
  `;

  // Attach Event Handlers
  setupDetailInteractions(container, project);
}

function renderCommentsList(comments, projectId) {
  if (!comments || comments.length === 0) {
    return `
      <div class="py-8 text-center text-slate-500 text-xs">
        No comments yet. Be the first to share your thoughts or ask a question!
      </div>
    `;
  }

  return comments.map(c => `
    <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <img src="${c.avatar}" alt="${c.author}" class="w-7 h-7 rounded-full object-cover border border-white/20" />
          <div>
            <span class="text-xs font-semibold text-white">${c.author}</span>
            <span class="text-[10px] text-cyan-400 ml-1.5 px-1.5 py-0.2 rounded bg-cyan-950/60 border border-cyan-500/20">${c.role}</span>
          </div>
        </div>
        <span class="text-[11px] text-slate-500">${c.timestamp}</span>
      </div>

      <p class="text-xs text-slate-300 pl-9 leading-relaxed">
        ${c.content}
      </p>

      <div class="pl-9 pt-1 flex items-center gap-4">
        <button class="comment-like-btn text-[11px] text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors" data-comment-id="${c.id}" data-project-id="${projectId}">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          <span class="c-like-count">${c.likes || 0}</span>
        </button>
      </div>
    </div>
  `).join('');
}

function setupDetailInteractions(container, project) {
  // Like button
  const likeBtn = container.querySelector('#detail-like-btn');
  if (likeBtn) {
    likeBtn.onclick = () => {
      const res = store.toggleLike(project.id);
      const countEl = container.querySelector('#detail-like-count');
      const statCountEl = container.querySelector('#stat-likes-count');
      if (countEl) countEl.textContent = res.count;
      if (statCountEl) statCountEl.textContent = res.count;

      const svg = likeBtn.querySelector('svg');
      if (res.liked) {
        likeBtn.classList.add('bg-rose-500/20', 'border-rose-500/40', 'text-rose-300', 'font-semibold');
        likeBtn.classList.remove('bg-white/5', 'border-white/10', 'text-slate-300');
        if (svg) svg.classList.add('fill-current');
        showToast('Liked project! ❤️', 'purple');
      } else {
        likeBtn.classList.remove('bg-rose-500/20', 'border-rose-500/40', 'text-rose-300', 'font-semibold');
        likeBtn.classList.add('bg-white/5', 'border-white/10', 'text-slate-300');
        if (svg) svg.classList.remove('fill-current');
      }
    };
  }

  // Save button
  const saveBtn = container.querySelector('#detail-save-btn');
  if (saveBtn) {
    saveBtn.onclick = () => {
      const res = store.toggleSave(project.id);
      const svg = saveBtn.querySelector('svg');
      const span = saveBtn.querySelector('span');
      const statSavesEl = container.querySelector('#stat-saves-count');
      if (statSavesEl) statSavesEl.textContent = res.count;

      if (res.saved) {
        saveBtn.classList.add('bg-amber-500/20', 'border-amber-500/40', 'text-amber-300', 'font-semibold');
        saveBtn.classList.remove('bg-white/5', 'border-white/10', 'text-slate-300');
        if (svg) svg.classList.add('fill-current');
        if (span) span.textContent = 'Saved';
        showToast('Project saved to your bookmarks! ⭐', 'success');
      } else {
        saveBtn.classList.remove('bg-amber-500/20', 'border-amber-500/40', 'text-amber-300', 'font-semibold');
        saveBtn.classList.add('bg-white/5', 'border-white/10', 'text-slate-300');
        if (svg) svg.classList.remove('fill-current');
        if (span) span.textContent = 'Save';
        showToast('Project removed from bookmarks.', 'info');
      }
    };
  }

  // Share button
  const shareBtn = container.querySelector('#detail-share-btn');
  if (shareBtn) {
    shareBtn.onclick = () => {
      navigator.clipboard.writeText(window.location.href);
      showToast('Project link copied to clipboard! 📋', 'success');
    };
  }

  // Gallery Thumbnail Clicks
  const thumbs = container.querySelectorAll('.gallery-thumb-btn');
  const activeScreenshot = container.querySelector('#active-screenshot');
  thumbs.forEach(thumb => {
    thumb.onclick = () => {
      const newSrc = thumb.dataset.img;
      if (activeScreenshot) activeScreenshot.src = newSrc;
      thumbs.forEach(t => {
        t.classList.remove('border-purple-500', 'ring-2', 'ring-purple-500/30');
        t.classList.add('border-white/10', 'opacity-70');
      });
      thumb.classList.add('border-purple-500', 'ring-2', 'ring-purple-500/30');
      thumb.classList.remove('border-white/10', 'opacity-70');
    };
  });

  // Lightbox
  const viewer = container.querySelector('#main-screenshot-viewer');
  const lightboxModal = container.querySelector('#lightbox-modal');
  const lightboxImg = container.querySelector('#lightbox-image');
  const closeLightboxBtn = container.querySelector('#close-lightbox-btn');

  if (viewer && lightboxModal && lightboxImg) {
    viewer.onclick = () => {
      lightboxImg.src = activeScreenshot.src;
      lightboxModal.classList.remove('hidden');
      lightboxModal.classList.add('flex');
    };

    closeLightboxBtn.onclick = () => {
      lightboxModal.classList.add('hidden');
      lightboxModal.classList.remove('flex');
    };

    lightboxModal.onclick = (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.add('hidden');
        lightboxModal.classList.remove('flex');
      }
    };
  }

  // Add comment form
  const commentForm = container.querySelector('#add-comment-form');
  const commentInput = container.querySelector('#comment-text-input');
  if (commentForm && commentInput) {
    commentForm.onsubmit = (e) => {
      e.preventDefault();
      const text = commentInput.value.trim();
      if (!text) return;

      store.addComment(project.id, text);
      commentInput.value = '';

      // Re-render comments list
      const updatedComments = store.getComments(project.id);
      const commentsListEl = container.querySelector('#comments-list');
      const commentsBadge = container.querySelector('#comments-badge');
      if (commentsListEl) commentsListEl.innerHTML = renderCommentsList(updatedComments, project.id);
      if (commentsBadge) commentsBadge.textContent = updatedComments.length;

      // Reattach comment like handlers
      attachCommentLikeEvents(container);

      showToast('Comment posted! 💬', 'success');
    };
  }

  attachCommentLikeEvents(container);
}

function attachCommentLikeEvents(container) {
  container.querySelectorAll('.comment-like-btn').forEach(btn => {
    btn.onclick = () => {
      const pId = btn.dataset.projectId;
      const cId = btn.dataset.commentId;
      const newCount = store.likeComment(pId, cId);
      const countSpan = btn.querySelector('.c-like-count');
      if (countSpan) countSpan.textContent = newCount;
      btn.classList.add('text-rose-400');
    };
  });
}
