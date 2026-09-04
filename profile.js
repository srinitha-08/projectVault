import { store } from '../store.js';
import { renderProjectCards, setupCardEvents } from './hero.js';
import { showToast } from './toast.js';

export function renderProfileView(container) {
  const user = store.getCurrentUser();
  const userProjects = store.getUserProjects();

  let isFollowing = false;
  let followerCount = user.followers || 1240;

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Profile Header Banner -->
      <div class="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden mb-10">
        <!-- Ambient decorative blobs -->
        <div class="absolute -top-12 -right-12 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-12 -left-12 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          
          <!-- Avatar + Bio Details -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div class="relative group">
              <img 
                src="${user.avatar}" 
                alt="${user.name}" 
                class="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-2 border-purple-400/60 shadow-xl shadow-purple-950/50" 
              />
              <span class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#0B0F19] flex items-center justify-center text-[10px] text-white" title="Active student builder">
                ✓
              </span>
            </div>

            <div class="space-y-2">
              <div class="flex flex-wrap items-center gap-3">
                <h1 class="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  ${user.fullName || user.name}
                </h1>
                <span class="px-3 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                  Top 2% Creator
                </span>
              </div>

              <p class="text-sm font-medium text-cyan-400">
                ${user.title || 'Computer Science Student'} • <span class="text-slate-300">${user.college}</span>
              </p>

              <p class="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                "${user.bio}"
              </p>

              <!-- Social Links -->
              <div class="flex items-center gap-4 pt-1 text-xs text-slate-400">
                <a href="${user.socials?.github || 'https://github.com'}" target="_blank" class="hover:text-white flex items-center gap-1.5 transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  <span>GitHub</span>
                </a>
                <a href="${user.socials?.linkedin || 'https://linkedin.com'}" target="_blank" class="hover:text-white flex items-center gap-1.5 transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Profile Action Buttons -->
          <div class="flex items-center gap-3 shrink-0">
            <button id="follow-student-btn" class="btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5">
              <span>+ Follow</span>
            </button>
            <button id="edit-profile-btn" class="btn-secondary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5">
              <span>✏️ Edit Profile</span>
            </button>
          </div>

        </div>

        <!-- Metric Counters Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 text-center">
          <div class="p-3 rounded-2xl bg-white/[0.02]">
            <p class="text-xs text-slate-400">Published Projects</p>
            <p class="text-2xl font-bold font-heading text-white mt-1">${userProjects.length}</p>
          </div>
          <div class="p-3 rounded-2xl bg-white/[0.02]">
            <p class="text-xs text-slate-400">Followers</p>
            <p class="text-2xl font-bold font-heading text-cyan-400 mt-1" id="profile-follower-count">${followerCount}</p>
          </div>
          <div class="p-3 rounded-2xl bg-white/[0.02]">
            <p class="text-xs text-slate-400">Total Likes</p>
            <p class="text-2xl font-bold font-heading text-rose-400 mt-1">${user.totalLikes || 4890}</p>
          </div>
          <div class="p-3 rounded-2xl bg-white/[0.02]">
            <p class="text-xs text-slate-400">Portfolio Views</p>
            <p class="text-2xl font-bold font-heading text-purple-400 mt-1">${user.views || 45200}</p>
          </div>
        </div>

      </div>

      <!-- Skills & Achievements Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        <!-- Skills Stack (7 cols) -->
        <div class="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-heading font-bold text-white flex items-center gap-2">
              <span>⚡ Technical Skills</span>
            </h3>
            <span class="text-xs text-slate-400">${user.skills?.length || 8} verified skills</span>
          </div>

          <div class="flex flex-wrap gap-2.5">
            ${(user.skills || ["Python", "SQL", "Power BI", "Java", "HTML", "CSS", "JavaScript"]).map(skill => `
              <div class="px-3.5 py-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs font-semibold flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>${skill}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Student Achievements (5 cols) -->
        <div class="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
          <h3 class="text-lg font-heading font-bold text-white flex items-center gap-2">
            <span>🎖️ Student Badges & Achievements</span>
          </h3>

          <div class="space-y-2.5">
            ${(user.achievements || [
              { icon: "🏆", title: "Project Creator", desc: "Published 10+ open-source student projects" },
              { icon: "📊", title: "Data Analytics", desc: "Ranked in top 5% of campus data science league" },
              { icon: "💻", title: "10+ Projects", desc: "Maintained active development portfolio" },
              { icon: "🚀", title: "Hackathon Participant", desc: "Winner at HackCampus 2025" }
            ]).map(ach => `
              <div class="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <span class="text-2xl">${ach.icon}</span>
                <div>
                  <h4 class="text-xs font-bold text-white">${ach.title}</h4>
                  <p class="text-[11px] text-slate-400">${ach.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Featured Projects Section -->
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-heading font-bold text-white">Featured Projects</h2>
            <p class="text-slate-400 text-xs">Projects maintained by ${user.name}</p>
          </div>
          <a href="#upload" class="btn-secondary px-4 py-2 rounded-xl text-xs font-medium inline-flex items-center gap-1.5">
            <span>+ Add New Project</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="profile-projects-grid">
          ${renderProjectCards(userProjects)}
        </div>
      </div>

    </div>

    <!-- Edit Profile Modal -->
    <div id="edit-profile-modal" class="fixed inset-0 z-50 hidden modal-backdrop items-center justify-center p-4">
      <div class="relative max-w-lg w-full glass-panel border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-5">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <h3 class="text-lg font-bold font-heading text-white">Edit Student Profile</h3>
          <button id="close-profile-modal" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <form id="edit-profile-form" class="space-y-4">
          <div>
            <label class="block text-xs text-slate-300 font-semibold uppercase mb-1">Full Name</label>
            <input type="text" id="edit-name" value="${user.fullName || user.name}" class="vault-input text-xs" required />
          </div>

          <div>
            <label class="block text-xs text-slate-300 font-semibold uppercase mb-1">Headline / Role</label>
            <input type="text" id="edit-title" value="${user.title || 'Computer Science Student'}" class="vault-input text-xs" required />
          </div>

          <div>
            <label class="block text-xs text-slate-300 font-semibold uppercase mb-1">College / University</label>
            <input type="text" id="edit-college" value="${user.college}" class="vault-input text-xs" required />
          </div>

          <div>
            <label class="block text-xs text-slate-300 font-semibold uppercase mb-1">Bio</label>
            <textarea id="edit-bio" rows="3" class="vault-input text-xs resize-none">${user.bio}</textarea>
          </div>

          <div>
            <label class="block text-xs text-slate-300 font-semibold uppercase mb-1">Skills (Comma separated)</label>
            <input type="text" id="edit-skills" value="${(user.skills || []).join(', ')}" class="vault-input text-xs" />
          </div>

          <div class="pt-2 flex justify-end gap-3">
            <button type="button" id="cancel-profile-modal" class="btn-secondary px-4 py-2 rounded-xl text-xs">Cancel</button>
            <button type="submit" class="btn-primary px-5 py-2 rounded-xl text-xs font-semibold">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  `;

  // Attach card events
  const grid = container.querySelector('#profile-projects-grid');
  if (grid) setupCardEvents(grid);

  // Follow button
  const followBtn = container.querySelector('#follow-student-btn');
  const countEl = container.querySelector('#profile-follower-count');
  if (followBtn) {
    followBtn.onclick = () => {
      isFollowing = !isFollowing;
      followerCount += isFollowing ? 1 : -1;
      if (countEl) countEl.textContent = followerCount;

      if (isFollowing) {
        followBtn.innerHTML = '<span>✓ Following</span>';
        followBtn.classList.remove('btn-primary');
        followBtn.classList.add('bg-emerald-600/30', 'text-emerald-300', 'border', 'border-emerald-500/40');
        showToast(`Now following ${user.name}! 🚀`, 'success');
      } else {
        followBtn.innerHTML = '<span>+ Follow</span>';
        followBtn.classList.remove('bg-emerald-600/30', 'text-emerald-300', 'border', 'border-emerald-500/40');
        followBtn.classList.add('btn-primary');
        showToast(`Unfollowed ${user.name}.`, 'info');
      }
    };
  }

  // Edit Profile Modal
  const editBtn = container.querySelector('#edit-profile-btn');
  const modal = container.querySelector('#edit-profile-modal');
  const closeBtn = container.querySelector('#close-profile-modal');
  const cancelBtn = container.querySelector('#cancel-profile-modal');
  const form = container.querySelector('#edit-profile-form');

  if (editBtn && modal) {
    editBtn.onclick = () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    };
    if (closeBtn) closeBtn.onclick = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    };
    if (cancelBtn) cancelBtn.onclick = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    };

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const updated = store.updateProfile({
          name: document.getElementById('edit-name').value.trim(),
          fullName: document.getElementById('edit-name').value.trim(),
          title: document.getElementById('edit-title').value.trim(),
          college: document.getElementById('edit-college').value.trim(),
          bio: document.getElementById('edit-bio').value.trim(),
          skills: document.getElementById('edit-skills').value.split(',').map(s => s.trim()).filter(Boolean)
        });

        modal.classList.add('hidden');
        modal.classList.remove('flex');
        showToast('Profile updated successfully! ✨', 'success');
        renderProfileView(container);
      };
    }
  }
}
