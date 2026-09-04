import { store } from '../store.js';
import { showToast } from './toast.js';

export function initAuthModal() {
  let modal = document.getElementById('auth-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'auth-modal';
    modal.className = 'fixed inset-0 z-50 hidden modal-backdrop items-center justify-center p-4';
    document.body.appendChild(modal);
  }

  let mode = 'login'; // 'login' or 'signup'

  function renderModal() {
    modal.innerHTML = `
      <div class="relative max-w-md w-full glass-panel border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
        
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🚀</span>
            <span class="font-heading font-bold text-lg text-white">Project<span class="text-gradient-purple-blue">Vault</span></span>
          </div>
          <button id="auth-close-btn" class="text-slate-400 hover:text-white text-sm">✕</button>
        </div>

        <!-- Mode Tabs -->
        <div class="flex rounded-xl bg-white/5 p-1 border border-white/10">
          <button id="auth-tab-login" class="flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${mode === 'login' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
            Sign In
          </button>
          <button id="auth-tab-signup" class="flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${mode === 'signup' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
            Create Account
          </button>
        </div>

        ${mode === 'login' ? `
          <!-- LOGIN FORM -->
          <form id="login-form" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Email Address</label>
              <input type="email" id="login-email" required value="srinitha@student.edu" placeholder="you@university.edu" class="vault-input text-xs" />
            </div>

            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="text-xs font-semibold uppercase tracking-wider text-slate-300">Password</label>
                <a href="javascript:void(0)" id="forgot-password-link" class="text-[11px] text-cyan-400 hover:underline">Forgot password?</a>
              </div>
              <input type="password" id="login-password" required value="••••••••" placeholder="••••••••" class="vault-input text-xs" />
            </div>

            <div class="flex items-center">
              <input type="checkbox" id="remember-me" checked class="rounded border-white/20 bg-slate-900 text-purple-600 focus:ring-purple-500 mr-2" />
              <label for="remember-me" class="text-xs text-slate-400">Remember me on this device</label>
            </div>

            <button type="submit" class="btn-primary w-full py-3 rounded-xl text-xs font-bold shadow-lg shadow-purple-600/30">
              Sign In to ProjectVault
            </button>

            <!-- Quick Demo One-Click Login -->
            <div class="pt-3 border-t border-white/10 text-center">
              <p class="text-[11px] text-slate-400 mb-2">Or test as demo user:</p>
              <button type="button" id="quick-demo-login-btn" class="w-full py-2 px-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 text-xs font-semibold text-purple-200 flex items-center justify-center gap-2">
                <span>⚡ Instant Login as Srinitha (Student)</span>
              </button>
            </div>

            <p class="text-center text-xs text-slate-400 pt-1">
              Don't have an account? <button type="button" id="switch-to-signup" class="text-cyan-400 font-semibold hover:underline">Sign up</button>
            </p>
          </form>
        ` : `
          <!-- SIGN UP FORM -->
          <form id="signup-form" class="space-y-3.5">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Full Name *</label>
              <input type="text" id="signup-name" required placeholder="Alex Rivera" class="vault-input text-xs" />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Email *</label>
                <input type="email" id="signup-email" required placeholder="alex@univ.edu" class="vault-input text-xs" />
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Password *</label>
                <input type="password" id="signup-password" required placeholder="Min. 8 chars" class="vault-input text-xs" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">College *</label>
                <input type="text" id="signup-college" required placeholder="UC Berkeley" class="vault-input text-xs" />
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Course / Major *</label>
                <input type="text" id="signup-course" required placeholder="B.S. Computer Science" class="vault-input text-xs" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Key Skills (Comma separated)</label>
              <input type="text" id="signup-skills" placeholder="Python, React, TypeScript, Docker" class="vault-input text-xs" />
            </div>

            <button type="submit" class="btn-primary w-full py-3 rounded-xl text-xs font-bold shadow-lg shadow-purple-600/30">
              Create Student Account 🚀
            </button>

            <p class="text-center text-xs text-slate-400 pt-1">
              Already have an account? <button type="button" id="switch-to-login" class="text-cyan-400 font-semibold hover:underline">Sign in</button>
            </p>
          </form>
        `}

      </div>
    `;

    // Attach listeners
    const closeBtn = modal.querySelector('#auth-close-btn');
    if (closeBtn) closeBtn.onclick = () => closeModal();

    const tabLogin = modal.querySelector('#auth-tab-login');
    const tabSignup = modal.querySelector('#auth-tab-signup');
    if (tabLogin) tabLogin.onclick = () => { mode = 'login'; renderModal(); };
    if (tabSignup) tabSignup.onclick = () => { mode = 'signup'; renderModal(); };

    const switchSignup = modal.querySelector('#switch-to-signup');
    const switchLogin = modal.querySelector('#switch-to-login');
    if (switchSignup) switchSignup.onclick = () => { mode = 'signup'; renderModal(); };
    if (switchLogin) switchLogin.onclick = () => { mode = 'login'; renderModal(); };

    const quickDemoBtn = modal.querySelector('#quick-demo-login-btn');
    if (quickDemoBtn) {
      quickDemoBtn.onclick = () => {
        store.login('srinitha@student.edu', 'demo');
        showToast('Logged in as Srinitha! 👋', 'success');
        closeModal();
      };
    }

    const forgotLink = modal.querySelector('#forgot-password-link');
    if (forgotLink) {
      forgotLink.onclick = () => {
        showToast('Password reset link sent to your university email!', 'info');
      };
    }

    const loginForm = modal.querySelector('#login-form');
    if (loginForm) {
      loginForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password').value;
        store.login(email, pass);
        showToast('Welcome back to ProjectVault! 🚀', 'success');
        closeModal();
      };
    }

    const signupForm = modal.querySelector('#signup-form');
    if (signupForm) {
      signupForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const college = document.getElementById('signup-college').value;
        const course = document.getElementById('signup-course').value;
        const skills = document.getElementById('signup-skills').value;

        store.signup({ name, email, college, course, skills });
        showToast(`Account created for ${name}! Welcome to ProjectVault 🎉`, 'success');
        closeModal();
      };
    }
  }

  function openModal(initialMode = 'login') {
    mode = initialMode;
    renderModal();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  window.addEventListener('open-auth-modal', (e) => {
    openModal(e.detail || 'login');
  });

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
}
