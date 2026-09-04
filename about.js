export function renderAboutView(container) {
  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <!-- Top Title -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          💡 Our Mission
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
          Turning Student Projects Into Opportunities.
        </h1>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          ProjectVault is a student-focused platform designed to help learners showcase their academic and personal projects in a professional, discoverable format.
        </p>
      </div>

      <!-- Why ProjectVault Banner -->
      <div class="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 mb-16 relative overflow-hidden">
        <div class="absolute -bottom-16 -right-16 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div class="lg:col-span-8 space-y-4">
            <span class="text-xs font-bold uppercase tracking-widest text-cyan-400">The Student Reality</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Why ProjectVault?
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every semester, college students spend hundreds of hours engineering phenomenal capstone systems, machine learning models, and mobile apps. But when the term ends, those projects are archived into private GitHub repositories or forgotten on flash drives.
            </p>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              Recruiters don't have time to clone repos or decipher undocumented dependencies. ProjectVault bridges that gap: giving every student a permanent, polished platform where their hard work becomes tangible career opportunities.
            </p>
          </div>

          <div class="lg:col-span-4 p-6 rounded-2xl bg-[#0B0F19]/80 border border-purple-500/30 space-y-3">
            <h4 class="text-sm font-bold font-heading text-white">The Student Advantage</h4>
            <div class="space-y-2 text-xs text-slate-300">
              <div class="flex items-center gap-2">
                <span class="text-emerald-400">✓</span>
                <span>Stand out from plain resume PDFs</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                <span>Get direct feedback from industry peers</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-purple-400">✓</span>
                <span>Export bullet points ready for ATS scanners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- The 3 Core Pillars -->
      <div class="mb-16">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold font-heading text-white">Three Core Pillars</h2>
          <p class="text-slate-400 text-sm mt-1">How ProjectVault helps developers thrive throughout their college journey.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Pillar 1: Showcase -->
          <div class="glass-panel p-8 rounded-3xl border border-white/10 card-hover-effect space-y-4">
            <div class="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-3xl">
              📂
            </div>
            <h3 class="text-xl font-heading font-bold text-white">Showcase</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Create gorgeous project presentation cards with interactive screenshots, architecture notes, tech stacks, live demos, and verified code repositories.
            </p>
            <ul class="text-xs text-slate-400 space-y-1.5 pt-2">
              <li>• Automated tag badges and live demo previews</li>
              <li>• Mobile and desktop responsive portfolio</li>
              <li>• Drag-and-drop screenshot galleries with lightbox</li>
            </ul>
          </div>

          <!-- Pillar 2: Discover -->
          <div class="glass-panel p-8 rounded-3xl border border-white/10 card-hover-effect space-y-4">
            <div class="w-14 h-14 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-3xl">
              🔍
            </div>
            <h3 class="text-xl font-heading font-bold text-white">Discover</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Explore thousands of inspiring ideas built with bleeding-edge technologies across AI, web frameworks, cybersecurity, and IoT from 100+ universities.
            </p>
            <ul class="text-xs text-slate-400 space-y-1.5 pt-2">
              <li>• Fast multi-filter search by category and difficulty</li>
              <li>• Real-time community upvotes and trending metrics</li>
              <li>• Find hackathon teammates and open-source contributors</li>
            </ul>
          </div>

          <!-- Pillar 3: Grow -->
          <div class="glass-panel p-8 rounded-3xl border border-white/10 card-hover-effect space-y-4">
            <div class="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-3xl">
              🚀
            </div>
            <h3 class="text-xl font-heading font-bold text-white">Grow</h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              Receive constructive feedback from mentors, track portfolio views, and instantly convert your project details into quantified resume bullet points.
            </p>
            <ul class="text-xs text-slate-400 space-y-1.5 pt-2">
              <li>• One-click ATS resume description exporter</li>
              <li>• Public developer profile highlighting skills and achievements</li>
              <li>• Global leaderboard celebrating student creators</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- FAQ Accordion -->
      <div class="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto space-y-6">
        <h3 class="text-2xl font-bold font-heading text-white text-center">Frequently Asked Questions</h3>

        <div class="space-y-4 text-sm" id="faq-list">
          
          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 class="font-bold text-white">Who can join ProjectVault?</h4>
            <p class="text-slate-300 text-xs leading-relaxed">
              Any student, self-taught programmer, bootcamp learner, or hobbyist developer is welcome to create a profile and publish their work.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 class="font-bold text-white">Do I need to have a live deployed demo?</h4>
            <p class="text-slate-300 text-xs leading-relaxed">
              While live demos (on Vercel, Netlify, Render, or GitHub Pages) get higher visibility, you can also publish GitHub-only repositories or screenshot breakdowns of offline applications.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 class="font-bold text-white">How does the "Project to Resume" feature work?</h4>
            <p class="text-slate-300 text-xs leading-relaxed">
              Our generator evaluates your project's technology stack, difficulty, and feature architecture to formulate ATS-friendly bullet points using strong action verbs (Architected, Engineered, Implemented) ready to paste directly into your resume.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 class="font-bold text-white">Is ProjectVault free?</h4>
            <p class="text-slate-300 text-xs leading-relaxed">
              Yes, 100% free for students and developers worldwide.
            </p>
          </div>

        </div>
      </div>

    </div>
  `;
}
