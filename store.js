import { INITIAL_PROJECTS, CURRENT_USER, INITIAL_COMMENTS, LEADERBOARD_DATA } from './data.js';

class ProjectVaultStore {
  constructor() {
    this.STORAGE_KEYS = {
      PROJECTS: 'pv_projects_v1',
      USER: 'pv_current_user_v1',
      LIKES: 'pv_user_likes_v1',
      SAVES: 'pv_user_saves_v1',
      COMMENTS: 'pv_project_comments_v1',
      AUTH_TOKEN: 'pv_auth_token_v1'
    };

    this.listeners = new Set();
    this.init();
  }

  init() {
    // Initialize projects
    if (!localStorage.getItem(this.STORAGE_KEYS.PROJECTS)) {
      localStorage.setItem(this.STORAGE_KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS));
    }

    // Initialize user
    if (!localStorage.getItem(this.STORAGE_KEYS.USER)) {
      localStorage.setItem(this.STORAGE_KEYS.USER, JSON.stringify(CURRENT_USER));
    }

    // Initialize likes
    if (!localStorage.getItem(this.STORAGE_KEYS.LIKES)) {
      // Default some liked projects for nice initial state
      localStorage.setItem(this.STORAGE_KEYS.LIKES, JSON.stringify(["ai-health-assistant", "campusconnect"]));
    }

    // Initialize saves
    if (!localStorage.getItem(this.STORAGE_KEYS.SAVES)) {
      localStorage.setItem(this.STORAGE_KEYS.SAVES, JSON.stringify(["smart-expense-tracker", "ai-resume-analyzer"]));
    }

    // Initialize comments
    if (!localStorage.getItem(this.STORAGE_KEYS.COMMENTS)) {
      localStorage.setItem(this.STORAGE_KEYS.COMMENTS, JSON.stringify(INITIAL_COMMENTS));
    }

    // Auth status (default logged in as Srinitha for rich student experience)
    if (!localStorage.getItem(this.STORAGE_KEYS.AUTH_TOKEN)) {
      localStorage.setItem(this.STORAGE_KEYS.AUTH_TOKEN, 'demo_session_active');
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify(event, data) {
    this.listeners.forEach(cb => {
      try {
        cb(event, data);
      } catch (err) {
        console.error("Store listener error:", err);
      }
    });
  }

  getProjects() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEYS.PROJECTS);
      return data ? JSON.parse(data) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  }

  getProjectById(id) {
    const projects = this.getProjects();
    return projects.find(p => p.id === id);
  }

  addProject(projectData) {
    const projects = this.getProjects();
    const user = this.getCurrentUser();

    const newId = (projectData.name || 'project')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') + '-' + Date.now().toString().slice(-4);

    const newProject = {
      id: newId,
      name: projectData.name,
      tagline: projectData.tagline || (projectData.description ? projectData.description.slice(0, 80) + '...' : 'Student Showcase Project'),
      description: projectData.description,
      overview: projectData.overview || `### Overview\n${projectData.description}\n\n### Motivation\nBuilt for coursework and showcase on ProjectVault.`,
      category: projectData.category || "Web Development",
      difficulty: projectData.difficulty || "Intermediate",
      technologies: Array.isArray(projectData.technologies) ? projectData.technologies : ["JavaScript", "HTML", "CSS"],
      student: {
        id: user.id || "student-1",
        name: user.fullName || user.name || "Student Creator",
        college: user.college || "University Student",
        avatar: user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        role: user.title || "Student Developer",
        bio: user.bio || "Building innovative technology projects."
      },
      likes: 1,
      views: 12,
      saves: 0,
      thumbnail: projectData.thumbnail || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      screenshots: projectData.screenshots && projectData.screenshots.length > 0 
        ? projectData.screenshots 
        : [projectData.thumbnail || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"],
      githubUrl: projectData.githubUrl || "https://github.com",
      liveDemoUrl: projectData.liveDemoUrl || "",
      features: projectData.features || [
        "Interactive real-time user interface",
        "Responsive cross-device layout design",
        "Modern developer toolstack integration"
      ],
      resumeDescription: projectData.resumeDescription || `Engineered ${projectData.name} utilizing ${(projectData.technologies || []).slice(0, 3).join(', ')}. Implemented responsive architecture and core features, delivering a modern student showcase application.`,
      createdAt: new Date().toISOString(),
      status: "published"
    };

    projects.unshift(newProject);
    localStorage.setItem(this.STORAGE_KEYS.PROJECTS, JSON.stringify(projects));

    // Update user project count
    user.projects = (user.projects || 0) + 1;
    this.updateProfile(user);

    this.notify('PROJECT_ADDED', newProject);
    return newProject;
  }

  deleteProject(id) {
    let projects = this.getProjects();
    projects = projects.filter(p => p.id !== id);
    localStorage.setItem(this.STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    this.notify('PROJECT_DELETED', id);
  }

  updateProjectStatus(id, status) {
    const projects = this.getProjects();
    const target = projects.find(p => p.id === id);
    if (target) {
      target.status = status;
      localStorage.setItem(this.STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
      this.notify('PROJECT_UPDATED', target);
    }
  }

  // Like Toggle
  toggleLike(projectId) {
    const likes = this.getUserLikes();
    const projects = this.getProjects();
    const project = projects.find(p => p.id === projectId);
    const isCurrentlyLiked = likes.includes(projectId);

    let updatedLikes;
    if (isCurrentlyLiked) {
      updatedLikes = likes.filter(id => id !== projectId);
      if (project && project.likes > 0) project.likes -= 1;
    } else {
      updatedLikes = [...likes, projectId];
      if (project) project.likes = (project.likes || 0) + 1;
    }

    localStorage.setItem(this.STORAGE_KEYS.LIKES, JSON.stringify(updatedLikes));
    localStorage.setItem(this.STORAGE_KEYS.PROJECTS, JSON.stringify(projects));

    this.notify('LIKE_TOGGLED', { projectId, liked: !isCurrentlyLiked, count: project ? project.likes : 0 });
    return { liked: !isCurrentlyLiked, count: project ? project.likes : 0 };
  }

  isLiked(projectId) {
    return this.getUserLikes().includes(projectId);
  }

  getUserLikes() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEYS.LIKES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // Save / Bookmark Toggle
  toggleSave(projectId) {
    const saves = this.getUserSaves();
    const projects = this.getProjects();
    const project = projects.find(p => p.id === projectId);
    const isCurrentlySaved = saves.includes(projectId);

    let updatedSaves;
    if (isCurrentlySaved) {
      updatedSaves = saves.filter(id => id !== projectId);
      if (project && project.saves > 0) project.saves -= 1;
    } else {
      updatedSaves = [...saves, projectId];
      if (project) project.saves = (project.saves || 0) + 1;
    }

    localStorage.setItem(this.STORAGE_KEYS.SAVES, JSON.stringify(updatedSaves));
    localStorage.setItem(this.STORAGE_KEYS.PROJECTS, JSON.stringify(projects));

    this.notify('SAVE_TOGGLED', { projectId, saved: !isCurrentlySaved, count: project ? project.saves : 0 });
    return { saved: !isCurrentlySaved, count: project ? project.saves : 0 };
  }

  isSaved(projectId) {
    return this.getUserSaves().includes(projectId);
  }

  getUserSaves() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEYS.SAVES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  getSavedProjects() {
    const saveIds = this.getUserSaves();
    const projects = this.getProjects();
    return projects.filter(p => saveIds.includes(p.id));
  }

  getUserProjects() {
    const user = this.getCurrentUser();
    const projects = this.getProjects();
    return projects.filter(p => p.student.id === user.id || p.student.name.toLowerCase().includes(user.name.toLowerCase()));
  }

  incrementViews(projectId) {
    const projects = this.getProjects();
    const project = projects.find(p => p.id === projectId);
    if (project) {
      project.views = (project.views || 0) + 1;
      localStorage.setItem(this.STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
      this.notify('VIEWS_INCREMENTED', { projectId, views: project.views });
    }
  }

  // Comments
  getComments(projectId) {
    try {
      const allComments = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.COMMENTS) || '{}');
      return allComments[projectId] || [];
    } catch {
      return [];
    }
  }

  addComment(projectId, content) {
    const user = this.getCurrentUser();
    const allComments = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.COMMENTS) || '{}');
    if (!allComments[projectId]) {
      allComments[projectId] = [];
    }

    const newComment = {
      id: 'c_' + Date.now(),
      author: user.name || "Student Developer",
      role: user.title || "Peer Student",
      avatar: user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      content: content.trim(),
      timestamp: "Just now",
      likes: 0
    };

    allComments[projectId].unshift(newComment);
    localStorage.setItem(this.STORAGE_KEYS.COMMENTS, JSON.stringify(allComments));
    this.notify('COMMENT_ADDED', { projectId, comment: newComment });
    return newComment;
  }

  likeComment(projectId, commentId) {
    const allComments = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.COMMENTS) || '{}');
    if (allComments[projectId]) {
      const target = allComments[projectId].find(c => c.id === commentId);
      if (target) {
        target.likes = (target.likes || 0) + 1;
        localStorage.setItem(this.STORAGE_KEYS.COMMENTS, JSON.stringify(allComments));
        this.notify('COMMENT_LIKED', { projectId, commentId, likes: target.likes });
        return target.likes;
      }
    }
    return 0;
  }

  // Current User & Profile
  getCurrentUser() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEYS.USER);
      return data ? JSON.parse(data) : CURRENT_USER;
    } catch {
      return CURRENT_USER;
    }
  }

  updateProfile(newProfile) {
    const merged = { ...this.getCurrentUser(), ...newProfile };
    localStorage.setItem(this.STORAGE_KEYS.USER, JSON.stringify(merged));
    this.notify('PROFILE_UPDATED', merged);
    return merged;
  }

  // Auth
  isLoggedIn() {
    return Boolean(localStorage.getItem(this.STORAGE_KEYS.AUTH_TOKEN));
  }

  login(email, password) {
    localStorage.setItem(this.STORAGE_KEYS.AUTH_TOKEN, 'session_' + Date.now());
    this.notify('AUTH_CHANGED', { loggedIn: true });
    return true;
  }

  signup(data) {
    const newUser = {
      ...CURRENT_USER,
      id: 'student-' + Date.now(),
      name: data.name || "Student Creator",
      fullName: data.name || "Student Creator",
      email: data.email || "student@university.edu",
      college: data.college || "University",
      degree: data.course || "Computer Science",
      skills: data.skills ? data.skills.split(',').map(s => s.trim()) : ["JavaScript", "Python"],
      avatar: data.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
      projects: 0,
      followers: 1,
      totalLikes: 0,
      views: 0
    };
    localStorage.setItem(this.STORAGE_KEYS.USER, JSON.stringify(newUser));
    localStorage.setItem(this.STORAGE_KEYS.AUTH_TOKEN, 'session_' + Date.now());
    this.notify('AUTH_CHANGED', { loggedIn: true, user: newUser });
    return newUser;
  }

  logout() {
    localStorage.removeItem(this.STORAGE_KEYS.AUTH_TOKEN);
    this.notify('AUTH_CHANGED', { loggedIn: false });
  }

  // Leaderboard data
  getLeaderboard() {
    return LEADERBOARD_DATA;
  }
}

export const store = new ProjectVaultStore();
