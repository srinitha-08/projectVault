import { store } from '../store.js';
import { showToast } from './toast.js';

export function renderUploadView(container) {
  const user = store.getCurrentUser();

  const SAMPLE_THUMBNAILS = [
    { label: "AI / ML Deep Learning", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" },
    { label: "Web Dashboard & Analytics", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
    { label: "Mobile / IoT Hardware", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" },
    { label: "Cybersecurity & Cloud", url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" },
    { label: "Fintech & Finance", url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" }
  ];

  let currentTechnologies = ["Python", "Flask", "Tailwind CSS"];
  let selectedThumbnail = SAMPLE_THUMBNAILS[0].url;
  let uploadedScreenshots = []; // Holds user-uploaded screenshot data URLs (max 6)

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Top Title -->
      <div class="mb-10 text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
          ✨ Turn Projects Into Opportunities
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          Showcase Your Project 🚀
        </h1>
        <p class="text-slate-400 text-sm sm:text-base mt-2">
          Share your college capstone, hackathon demo, or weekend coding project with fellow students and recruiters.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left 7 Columns: Form -->
        <div class="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <form id="project-upload-form" class="space-y-6">
            
            <!-- Project Name -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Project Name <span class="text-rose-400">*</span>
              </label>
              <input 
                type="text" 
                id="input-project-name" 
                required 
                placeholder="e.g. AI Health Assistant" 
                class="vault-input text-sm"
              />
            </div>

            <!-- Short Tagline / Summary -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Short Tagline
              </label>
              <input 
                type="text" 
                id="input-project-tagline" 
                placeholder="e.g. Predictive symptom checker & clinical triage support using machine learning" 
                class="vault-input text-sm"
              />
            </div>

            <!-- Full Description -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Detailed Description <span class="text-rose-400">*</span>
              </label>
              <textarea 
                id="input-project-desc" 
                required 
                rows="4" 
                placeholder="Explain the problem statement, why you built this, how it works, and key results..." 
                class="vault-input text-sm resize-none"
              ></textarea>
            </div>

            <!-- Category & Difficulty Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Category <span class="text-rose-400">*</span>
                </label>
                <select id="input-project-category" class="vault-input text-sm">
                  <option value="AI / ML">AI / ML</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="App Development">App Development</option>
                  <option value="IoT">IoT</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Game Development">Game Development</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Difficulty Level <span class="text-rose-400">*</span>
                </label>
                <select id="input-project-difficulty" class="vault-input text-sm">
                  <option value="Intermediate">Intermediate</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <!-- Technologies Input (Interactive Tags) -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Technologies Used <span class="text-rose-400">*</span>
              </label>
              <div class="flex items-center gap-2 mb-2">
                <input 
                  type="text" 
                  id="tech-input-box" 
                  placeholder="Type a tech and press Enter (e.g. React, PyTorch, MongoDB)" 
                  class="vault-input text-xs"
                />
                <button type="button" id="add-tech-btn" class="btn-secondary px-4 py-2.5 rounded-xl text-xs shrink-0 font-medium">
                  + Add
                </button>
              </div>

              <!-- Active Tech Tags List -->
              <div class="flex flex-wrap gap-2 pt-1" id="active-tags-container">
                <!-- tags rendered dynamically -->
              </div>
              
              <!-- Quick suggestions -->
              <div class="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
                <span>Quick add:</span>
                <button type="button" class="quick-tag hover:text-cyan-300">Docker</button>
                <button type="button" class="quick-tag hover:text-cyan-300">FastAPI</button>
                <button type="button" class="quick-tag hover:text-cyan-300">PostgreSQL</button>
                <button type="button" class="quick-tag hover:text-cyan-300">Firebase</button>
              </div>
            </div>

            <!-- External Links (GitHub & Live Demo) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  GitHub Repository URL
                </label>
                <input 
                  type="url" 
                  id="input-github-url" 
                  placeholder="https://github.com/username/project" 
                  class="vault-input text-sm"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Live Demo URL
                </label>
                <input 
                  type="url" 
                  id="input-demo-url" 
                  placeholder="https://my-demo-app.vercel.app" 
                  class="vault-input text-sm"
                />
              </div>
            </div>

            <!-- Project Screenshots & Thumbnail Section -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Project Screenshots & Thumbnail
                </label>
                <span class="text-[11px] text-slate-400" id="screenshot-upload-limit-text">Max 6 images • Up to 5 MB each</span>
              </div>
              
              <!-- Hidden File Input supporting multi-image selection -->
              <input 
                type="file" 
                id="screenshot-file-input" 
                multiple 
                accept=".png,.jpg,.jpeg,.webp,image/png,image/jpeg,image/webp" 
                class="hidden" 
              />

              <!-- Drag and drop upload zone -->
              <div 
                class="border-2 border-dashed border-white/20 hover:border-purple-500 rounded-2xl p-6 text-center transition-all cursor-pointer bg-white/[0.01] hover:bg-purple-950/20 group" 
                id="drop-zone"
                role="button"
                tabindex="0"
                aria-label="Upload screenshots"
              >
                <div class="mx-auto w-12 h-12 rounded-xl bg-purple-600/20 group-hover:bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 text-xl mb-2 transition-transform group-hover:scale-110">
                  📸
                </div>
                <p class="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                  Click to select screenshots or drag & drop files here
                </p>
                <p class="text-[11px] text-slate-400 mt-1">
                  Supports PNG, JPG, JPEG, or WEBP (Max 5 MB each, up to 6 screenshots)
                </p>
              </div>

              <!-- Uploaded Screenshots Live Preview Grid -->
              <div id="screenshots-preview-container" class="mt-4 hidden space-y-2">
                <div class="flex items-center justify-between text-xs text-slate-300">
                  <span id="screenshots-count-label" class="font-semibold text-purple-300">Uploaded Screenshots (0/6)</span>
                  <span class="text-[11px] text-slate-400">Hover an image to remove • First image is project cover</span>
                </div>
                <div id="screenshots-preview-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                  <!-- Injected dynamically -->
                </div>
              </div>

              <!-- Preset Thumbnails Picker (Alternative/Fallback) -->
              <div class="mt-4 pt-3 border-t border-white/10">
                <p class="text-[11px] text-slate-400 mb-2">Or select from curated starter screenshots:</p>
                <div class="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  ${SAMPLE_THUMBNAILS.map((thumb, idx) => `
                    <button 
                      type="button" 
                      class="thumb-preset-btn relative h-16 rounded-xl overflow-hidden border-2 transition-all ${idx === 0 ? 'border-purple-500 ring-2 ring-purple-500/30' : 'border-white/10 opacity-70 hover:opacity-100'}" 
                      data-url="${thumb.url}"
                    >
                      <img src="${thumb.url}" class="w-full h-full object-cover" alt="${thumb.label}" />
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Custom Thumbnail URL fallback -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Or Custom Image URL
              </label>
              <input 
                type="url" 
                id="input-thumbnail-url" 
                placeholder="https://images.unsplash.com/..." 
                class="vault-input text-xs"
              />
            </div>

            <!-- Submit Button -->
            <div class="pt-4 border-t border-white/10">
              <button 
                type="submit" 
                class="btn-primary w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30"
              >
                <span>🚀 Publish Project</span>
              </button>
            </div>

          </form>
        </div>

        <!-- Right 5 Columns: Real-Time Live Preview Card -->
        <div class="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">Live Preview</span>
            <span class="text-[11px] text-slate-400">Updates in real time</span>
          </div>

          <!-- Preview Card -->
          <div class="glass-panel border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div>
              <!-- Thumbnail -->
              <div class="relative h-48 w-full bg-slate-900 overflow-hidden">
                <img id="preview-thumb" src="${selectedThumbnail}" alt="Thumbnail preview" class="w-full h-full object-cover transition-all duration-300" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent"></div>
                <div class="absolute top-3 left-3">
                  <span id="preview-category" class="badge-category backdrop-blur-md bg-black/40 border border-cyan-400/30 text-cyan-300">
                    AI / ML
                  </span>
                </div>
                <div class="absolute bottom-2 right-3">
                  <span id="preview-difficulty" class="badge-intermediate text-[10px] font-semibold px-2 py-0.5 rounded">
                    Intermediate
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5 space-y-3">
                <div class="flex items-center gap-2.5">
                  <img src="${user.avatar}" alt="${user.name}" class="w-6 h-6 rounded-full object-cover border border-white/20" />
                  <div class="text-xs">
                    <span class="font-medium text-slate-200">${user.name}</span>
                    <span class="text-slate-500 mx-1">•</span>
                    <span class="text-slate-400">${user.college.split('/')[0]}</span>
                  </div>
                </div>

                <h3 id="preview-name" class="font-heading font-bold text-lg text-white">
                  My Amazing Project
                </h3>

                <p id="preview-desc" class="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  Enter your project description in the form to see it appear right here in your live preview.
                </p>

                <div class="flex flex-wrap gap-1.5 pt-1" id="preview-tags">
                  ${currentTechnologies.map(t => `<span class="tech-tag text-[11px]">${t}</span>`).join('')}
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="px-5 py-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 bg-white/[0.01]">
              <div class="flex items-center gap-3">
                <span class="flex items-center gap-1 text-rose-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  1
                </span>
                <span class="flex items-center gap-1 text-cyan-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  12
                </span>
              </div>
              <span class="text-cyan-400 font-medium">View Project →</span>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-1">
            <p class="font-semibold text-slate-300">💡 Showcase Tip</p>
            <p>Projects with working Live Demos and detailed README instructions receive 4x more recruiter interactions.</p>
          </div>
        </div>

      </div>

    </div>

    <!-- Success Modal -->
    <div id="publish-success-modal" class="fixed inset-0 z-50 hidden modal-backdrop items-center justify-center p-4">
      <div class="relative max-w-md w-full glass-panel border border-purple-500/40 p-8 rounded-3xl text-center space-y-5 shadow-2xl animate-float">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 p-[2px] mx-auto">
          <div class="w-full h-full bg-[#0B0F19] rounded-2xl flex items-center justify-center text-3xl">
            🎉
          </div>
        </div>

        <h3 class="text-2xl font-bold font-heading text-white">
          Your project has been added to ProjectVault!
        </h3>

        <p class="text-xs text-slate-300 leading-relaxed">
          It is now live in the global showcase directory and available for students, faculty, and recruiters to explore.
        </p>

        <div class="pt-2 flex flex-col sm:flex-row gap-3">
          <a id="modal-view-project-btn" href="#explore" class="btn-primary flex-1 py-3 rounded-xl text-xs font-semibold text-center">
            View Project Page
          </a>
          <a href="#dashboard" class="btn-secondary flex-1 py-3 rounded-xl text-xs font-semibold text-center">
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  `;

  // Internal tags management
  function renderTags() {
    const containerEl = document.getElementById('active-tags-container');
    const previewTagsEl = document.getElementById('preview-tags');
    if (!containerEl) return;

    containerEl.innerHTML = currentTechnologies.map(tech => `
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-200 text-xs font-medium">
        <span>${tech}</span>
        <button type="button" class="remove-tag text-purple-400 hover:text-white" data-tag="${tech}">×</button>
      </span>
    `).join('');

    if (previewTagsEl) {
      previewTagsEl.innerHTML = currentTechnologies.map(t => `<span class="tech-tag text-[11px]">${t}</span>`).join('');
    }

    containerEl.querySelectorAll('.remove-tag').forEach(b => {
      b.onclick = () => {
        const t = b.dataset.tag;
        currentTechnologies = currentTechnologies.filter(item => item !== t);
        renderTags();
      };
    });
  }

  renderTags();

  // Tech Add button & enter key
  const techInputBox = document.getElementById('tech-input-box');
  const addTechBtn = document.getElementById('add-tech-btn');
  function addTech() {
    if (!techInputBox) return;
    const val = techInputBox.value.trim();
    if (val && !currentTechnologies.includes(val)) {
      currentTechnologies.push(val);
      techInputBox.value = '';
      renderTags();
    }
  }
  if (addTechBtn) addTechBtn.onclick = addTech;
  if (techInputBox) {
    techInputBox.onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addTech();
      }
    };
  }

  // Quick add tags
  container.querySelectorAll('.quick-tag').forEach(qt => {
    qt.onclick = () => {
      const val = qt.textContent.trim();
      if (!currentTechnologies.includes(val)) {
        currentTechnologies.push(val);
        renderTags();
      }
    };
  });

  // Real-time updates to Preview Card
  const inputName = document.getElementById('input-project-name');
  const inputDesc = document.getElementById('input-project-desc');
  const inputCat = document.getElementById('input-project-category');
  const inputDiff = document.getElementById('input-project-difficulty');
  const previewName = document.getElementById('preview-name');
  const previewDesc = document.getElementById('preview-desc');
  const previewCat = document.getElementById('preview-category');
  const previewDiff = document.getElementById('preview-difficulty');
  const previewThumb = document.getElementById('preview-thumb');

  if (inputName && previewName) {
    inputName.addEventListener('input', (e) => {
      previewName.textContent = e.target.value || 'My Amazing Project';
    });
  }

  if (inputDesc && previewDesc) {
    inputDesc.addEventListener('input', (e) => {
      previewDesc.textContent = e.target.value || 'Enter your project description in the form to see it appear right here.';
    });
  }

  if (inputCat && previewCat) {
    inputCat.addEventListener('change', (e) => {
      previewCat.textContent = e.target.value;
    });
  }

  if (inputDiff && previewDiff) {
    inputDiff.addEventListener('change', (e) => {
      previewDiff.textContent = e.target.value;
      previewDiff.className = `${
        e.target.value === 'Beginner' ? 'badge-beginner' :
        e.target.value === 'Advanced' ? 'badge-advanced' : 'badge-intermediate'
      } text-[10px] font-semibold px-2 py-0.5 rounded`;
    });
  }

  // --------------------------------------------------------------------------
  // SCREENSHOT UPLOAD FUNCTIONALITY
  // --------------------------------------------------------------------------
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('screenshot-file-input');
  const previewContainer = document.getElementById('screenshots-preview-container');
  const previewGrid = document.getElementById('screenshots-preview-grid');
  const countLabel = document.getElementById('screenshots-count-label');

  const MAX_SCREENSHOTS = 6;
  const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
  const ALLOWED_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp'];
  const ALLOWED_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

  // Helper to update the Live Preview card's thumbnail
  function updateLivePreviewThumbnail() {
    if (previewThumb) {
      if (uploadedScreenshots.length > 0) {
        previewThumb.src = uploadedScreenshots[0];
      } else {
        previewThumb.src = selectedThumbnail;
      }
    }
  }

  // Helper to re-render the uploaded screenshots gallery preview
  function renderScreenshotsPreview() {
    if (!previewContainer || !previewGrid || !countLabel) return;

    if (uploadedScreenshots.length === 0) {
      previewContainer.classList.add('hidden');
      previewGrid.innerHTML = '';
      countLabel.textContent = `Uploaded Screenshots (0/${MAX_SCREENSHOTS})`;
      updateLivePreviewThumbnail();
      return;
    }

    previewContainer.classList.remove('hidden');
    countLabel.textContent = `Uploaded Screenshots (${uploadedScreenshots.length}/${MAX_SCREENSHOTS})`;

    previewGrid.innerHTML = uploadedScreenshots.map((dataUrl, idx) => `
      <div class="relative group rounded-xl overflow-hidden border ${idx === 0 ? 'border-purple-500 ring-2 ring-purple-500/40' : 'border-white/15'} aspect-video bg-slate-900 shadow-md">
        <img src="${dataUrl}" class="w-full h-full object-cover" alt="Screenshot ${idx + 1}" />
        
        <!-- Cover badge for 1st image -->
        ${idx === 0 ? `
          <span class="absolute top-1 left-1 bg-purple-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
            Cover
          </span>
        ` : ''}

        <!-- Remove button -->
        <button 
          type="button" 
          class="remove-screenshot-btn absolute top-1 right-1 bg-black/80 hover:bg-rose-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 shadow-lg"
          data-index="${idx}" 
          title="Remove screenshot"
          aria-label="Remove screenshot ${idx + 1}"
        >
          ✕
        </button>
      </div>
    `).join('');

    // Attach remove listeners
    previewGrid.querySelectorAll('.remove-screenshot-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const removeIdx = parseInt(btn.dataset.index, 10);
        if (!isNaN(removeIdx) && removeIdx >= 0 && removeIdx < uploadedScreenshots.length) {
          uploadedScreenshots.splice(removeIdx, 1);
          renderScreenshotsPreview();
          updateLivePreviewThumbnail();
          showToast('Screenshot removed.', 'info');
        }
      };
    });

    updateLivePreviewThumbnail();
  }

  // Process and optimize an individual file via canvas
  function processImageFile(file) {
    return new Promise((resolve, reject) => {
      // Validate file extension
      const extension = (file.name.split('.').pop() || '').toLowerCase();
      const isValidExtension = ALLOWED_EXTENSIONS.includes(extension);
      const isValidMime = ALLOWED_MIME_TYPES.includes(file.type);

      if (!isValidExtension && !isValidMime) {
        return reject(new Error(`"${file.name}" is an invalid file type. Please select PNG, JPG, JPEG, or WEBP images.`));
      }

      // Validate file size (5 MB limit)
      if (file.size > MAX_FILE_SIZE_BYTES) {
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
        return reject(new Error(`"${file.name}" exceeds the 5 MB size limit (${sizeMb} MB).`));
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          // Normalize resolution up to 1600px width/height while maintaining aspect ratio
          const maxWidth = 1600;
          const maxHeight = 1200;
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            if (width / height > maxWidth / maxHeight) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Output clean dataURL (WebP or JPEG for efficient storage)
          const outputMime = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
          const dataUrl = canvas.toDataURL(outputMime, 0.88);
          resolve(dataUrl);
        };
        img.onerror = () => reject(new Error(`Failed to load image "${file.name}".`));
        img.src = e.target.result;
      };
      reader.onerror = () => reject(new Error(`Failed to read file "${file.name}".`));
      reader.readAsDataURL(file);
    });
  }

  // Handle a list of files (from file picker or drop event)
  async function handleFiles(files) {
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    let addedCount = 0;

    for (const file of fileList) {
      if (uploadedScreenshots.length >= MAX_SCREENSHOTS) {
        showToast(`Maximum limit of ${MAX_SCREENSHOTS} screenshots reached.`, 'error');
        break;
      }

      try {
        const dataUrl = await processImageFile(file);
        if (uploadedScreenshots.length < MAX_SCREENSHOTS) {
          uploadedScreenshots.push(dataUrl);
          addedCount++;
        }
      } catch (err) {
        showToast(err.message, 'error', 4500);
      }
    }

    if (addedCount > 0) {
      renderScreenshotsPreview();
      showToast(`${addedCount} screenshot${addedCount > 1 ? 's' : ''} added successfully! 📸`, 'success');
    }
  }

  // Click drop zone to open file selection dialog
  if (dropZone && fileInput) {
    dropZone.onclick = (e) => {
      e.preventDefault();
      fileInput.click();
    };

    dropZone.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        fileInput.click();
      }
    };

    // File input change handler (allows selecting multiple images at once)
    fileInput.onchange = (e) => {
      handleFiles(e.target.files);
      fileInput.value = ''; // Reset input to allow selecting the same file again if needed
    };

    // Drag and drop event listeners
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('border-purple-400', 'bg-purple-950/40', 'scale-[1.01]');
      });
    });

    ['dragleave', 'dragend'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('border-purple-400', 'bg-purple-950/40', 'scale-[1.01]');
      });
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('border-purple-400', 'bg-purple-950/40', 'scale-[1.01]');
      if (e.dataTransfer && e.dataTransfer.files) {
        handleFiles(e.dataTransfer.files);
      }
    });
  }

  // Thumbnail presets click
  const thumbBtns = container.querySelectorAll('.thumb-preset-btn');
  thumbBtns.forEach(btn => {
    btn.onclick = () => {
      selectedThumbnail = btn.dataset.url;
      // If user hasn't uploaded custom screenshots, update preview thumb
      if (uploadedScreenshots.length === 0 && previewThumb) {
        previewThumb.src = selectedThumbnail;
      }
      thumbBtns.forEach(b => {
        b.classList.remove('border-purple-500', 'ring-2', 'ring-purple-500/30');
        b.classList.add('border-white/10', 'opacity-70');
      });
      btn.classList.add('border-purple-500', 'ring-2', 'ring-purple-500/30');
      btn.classList.remove('border-white/10', 'opacity-70');
    };
  });

  // Custom thumbnail URL input
  const customThumbInput = document.getElementById('input-thumbnail-url');
  if (customThumbInput) {
    customThumbInput.addEventListener('input', (e) => {
      if (e.target.value.startsWith('http')) {
        selectedThumbnail = e.target.value;
        if (uploadedScreenshots.length === 0 && previewThumb) {
          previewThumb.src = selectedThumbnail;
        }
      }
    });
  }

  // Form submission
  const form = document.getElementById('project-upload-form');
  const successModal = document.getElementById('publish-success-modal');
  const viewProjectBtn = document.getElementById('modal-view-project-btn');

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();

      const name = inputName.value.trim();
      const tagline = document.getElementById('input-project-tagline').value.trim();
      const description = inputDesc.value.trim();
      const category = inputCat.value;
      const difficulty = inputDiff.value;
      const githubUrl = document.getElementById('input-github-url').value.trim();
      const liveDemoUrl = document.getElementById('input-demo-url').value.trim();

      // If user uploaded screenshots, use them as screenshots array and 1st as thumbnail
      const finalScreenshots = uploadedScreenshots.length > 0 
        ? uploadedScreenshots 
        : [selectedThumbnail];

      const finalThumbnail = uploadedScreenshots.length > 0 
        ? uploadedScreenshots[0] 
        : selectedThumbnail;

      const newProject = store.addProject({
        name,
        tagline,
        description,
        category,
        difficulty,
        technologies: currentTechnologies,
        githubUrl,
        liveDemoUrl,
        thumbnail: finalThumbnail,
        screenshots: finalScreenshots
      });

      if (viewProjectBtn) {
        viewProjectBtn.href = `#project/${newProject.id}`;
      }

      if (successModal) {
        successModal.classList.remove('hidden');
        successModal.classList.add('flex');
      }

      showToast('Project published successfully! 🚀', 'success');
    };
  }
}
