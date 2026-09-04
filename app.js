import { initNavbar } from './navbar.js';

import { renderHomeView } from './hero.js';
import { renderExploreView } from './explore.js';

import { renderProjectDetailsView } from './projectDetails.js';
import { renderUploadView } from './upload.js';

import { renderProfileView } from './profile.js';
import { renderDashboardView } from './dashboard.js';

import { renderLeaderboardView } from './leaderboard.js';
import { renderAboutView } from './about.js';
import { initSearchModal } from './searchModal.js';

import { initAuthModal } from './authModal.js';

function route() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const rawHash = window.location.hash || '#home';
  const cleanHash = rawHash.split('?')[0];

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Route matches
  if (cleanHash === '#home' || cleanHash === '') {
    renderHomeView(container);
  } else if (cleanHash === '#explore') {
    renderExploreView(container);
  } else if (cleanHash.startsWith('#project/')) {
    const projectId = cleanHash.replace('#project/', '').trim();
    renderProjectDetailsView(container, projectId);
  } else if (cleanHash === '#upload') {
    renderUploadView(container);
  } else if (cleanHash === '#profile') {
    renderProfileView(container);
  } else if (cleanHash === '#dashboard') {
    renderDashboardView(container);
  } else if (cleanHash === '#leaderboard') {
    renderLeaderboardView(container);
  } else if (cleanHash === '#about') {
    renderAboutView(container);
  } else {
    // Fallback to home
    renderHomeView(container);
  }
}

// Bootstrap Application
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearchModal();
  initAuthModal();

  window.addEventListener('hashchange', route);
  route();
});
