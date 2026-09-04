// ProjectVault Initial Sample Data

export const INITIAL_PROJECTS = [
  {
    id: "ai-health-assistant",
    name: "AI Health Assistant",
    tagline: "Predictive symptom checker & clinical triage support using machine learning",
    description: "An intelligent medical triage assistant that analyzes reported symptoms, provides predictive risk assessments using Random Forest & XGBoost classifiers, and suggests appropriate healthcare specialists.",
    overview: `### Problem & Motivation
Traditional search engines often cause unnecessary panic when users look up medical symptoms. Students and low-income families frequently lack quick access to primary triage.

### What it does
- **Symptom Parsing:** Ingests free-form natural language symptom descriptions.
- **Predictive ML Model:** Classifies symptom clusters against 40+ disease classes with an 89.4% ROC-AUC score.
- **Triage Matrix:** Ranks urgency (Self-Care, Tele-consult, Emergency) and recommends specialist departments.
- **Privacy-First:** Anonymizes health inputs and complies with HIPAA data handling principles.`,
    category: "AI / ML",
    difficulty: "Advanced",
    technologies: ["Python", "Flask", "Machine Learning", "Scikit-Learn", "Pandas", "Tailwind CSS"],
    student: {
      id: "student-1",
      name: "Srinitha V.",
      college: "Stanford / PES University",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      role: "Computer Science Senior",
      bio: "Building projects, learning technology and exploring predictive data modeling."
    },
    likes: 482,
    views: 3820,
    saves: 194,
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/srinitha-dev/ai-health-assistant",
    liveDemoUrl: "https://ai-health-assistant-demo.vercel.app",
    features: [
      "Natural language symptom parsing with spaCy",
      "Predictive triage classification model trained on 15,000 anonymized clinical records",
      "Interactive SVG anatomical symptom selector",
      "Local doctor & clinic geolocation finder via OpenStreetMap API"
    ],
    resumeDescription: "Developed an AI-powered triage and health analysis web platform using Python, Flask, and Scikit-Learn. Engineered feature extraction pipelines processing 40+ clinical indicators, achieving 89.4% classification accuracy. Designed responsive glassmorphic UI used by 3,800+ test users.",
    createdAt: "2026-08-15T10:00:00Z",
    status: "published"
  },
  {
    id: "student-performance-analyzer",
    name: "Student Performance Analyzer",
    tagline: "Predictive academic performance modeling & interactive Power BI analytics",
    description: "An end-to-end data analytics platform helping educators identify at-risk students early through attendance patterns, assignment velocity, and behavioral signals.",
    overview: `### Problem & Motivation
Academic dropouts often happen because faculty spot struggles too late in the semester. Traditional grade books are backwards-looking rather than predictive.

### Key Architecture
- Automated CSV/LMS data ingestion pipeline with data sanitation and normalization.
- Predictive regression & classification trees estimating final exam outcomes mid-semester.
- Interactive embedded Power BI visual dashboards with multi-tier drill downs for department heads.`,
    category: "Data Analytics",
    difficulty: "Intermediate",
    technologies: ["Python", "Pandas", "Power BI", "FastAPI", "Seaborn", "NumPy"],
    student: {
      id: "student-1",
      name: "Srinitha V.",
      college: "Stanford / PES University",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      role: "Computer Science Senior",
      bio: "Building projects, learning technology and exploring predictive data modeling."
    },
    likes: 318,
    views: 2640,
    saves: 142,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/srinitha-dev/student-performance-analyzer",
    liveDemoUrl: "https://student-analytics-bi.vercel.app",
    features: [
      "LMS automated gradebook parser supporting Canvas and Moodle exports",
      "Cohort comparison heatmaps and longitudinal trend predictions",
      "Automated PDF intervention report generator for academic counselors"
    ],
    resumeDescription: "Built an academic intelligence platform utilizing Python, Pandas, and Power BI. Modeled 5 academic cohorts (8,000+ data points) to detect early indicators of course failure with 84% precision. Reduced manual grade auditing time by 70% across 3 college departments.",
    createdAt: "2026-07-20T14:30:00Z",
    status: "published"
  },
  {
    id: "smart-expense-tracker",
    name: "Smart Expense Tracker",
    tagline: "Collaborative student budgeting with receipt OCR and recurring bill forecasting",
    description: "A sleek modern web app designed for college roommates and student groups to split rent, scan receipts, visualize burn rates, and predict month-end savings.",
    overview: `### The College Budgeting Challenge
Managing roommates' grocery bills, WiFi split costs, and personal allowances in Excel sheets is tedious and error-prone.

### Highlights
- OCR receipt camera scanner converting crumpled grocery slips to itemized digital splits.
- Real-time Firestore sync ensuring roommates see balances immediately.
- Custom budgeting rule-engine (50/30/20 rule adaptation for low-income students).`,
    category: "Web Development",
    difficulty: "Intermediate",
    technologies: ["React", "JavaScript", "Firebase", "Tailwind CSS", "Chart.js"],
    student: {
      id: "student-2",
      name: "Marcus Vance",
      college: "UC Berkeley",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      role: "Full-Stack Developer",
      bio: "Crafting modern web apps with React, Node, and intuitive UX."
    },
    likes: 540,
    views: 4120,
    saves: 268,
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/marcus-v/smart-expense-tracker",
    liveDemoUrl: "https://smart-expenses.pages.dev",
    features: [
      "Tesseract.js OCR integration for receipt processing",
      "Real-time WebSocket/Firestore ledger synchronization",
      "Interactive category breakdown charts with month-over-month forecasting"
    ],
    resumeDescription: "Architected a collaborative expense management application in React and Firebase. Implemented real-time group ledgers and client-side OCR for receipt digitization. Onboarded 1,500 active campus student users with 99.8% uptime.",
    createdAt: "2026-08-01T08:00:00Z",
    status: "published"
  },
  {
    id: "campusconnect",
    name: "CampusConnect",
    tagline: "Real-time peer tutoring, hackathon team matching, and campus marketplace",
    description: "The all-in-one student ecosystem uniting verified college peers for study group matching, course textbook exchanges, and hackathon project collaboration.",
    overview: `### The Vision
Colleges have dozens of disjointed WhatsApp and Discord groups where announcements get lost and scammers infiltrate.

### Built For Universities
- Edu-domain verified single sign-on.
- Skill-based hackathon team builder algorithm matching designers with backend developers.
- Encrypted peer-to-peer textbook barter marketplace.`,
    category: "Web Development",
    difficulty: "Advanced",
    technologies: ["HTML", "CSS", "JavaScript", "SQL", "Node.js", "PostgreSQL"],
    student: {
      id: "student-3",
      name: "Aiden Chen",
      college: "University of Waterloo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      role: "Software Engineering Sophomore",
      bio: "Systems hacker, distributed database enthusiast, open-source maintainer."
    },
    likes: 620,
    views: 5200,
    saves: 310,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/aidenchen/campus-connect-platform",
    liveDemoUrl: "https://campusconnect-hub.vercel.app",
    features: [
      "Role-based access control with university SSO authentication",
      "Real-time instant chat powered by WebSocket channels",
      "PostgreSQL relational schema with full-text search indexing"
    ],
    resumeDescription: "Engineered an integrated university collaboration platform serving 5,000+ students. Built resilient REST APIs and SQL schemas supporting real-time team matching and messaging. Handled 20,000+ weekly requests with sub-100ms response times.",
    createdAt: "2026-07-12T16:20:00Z",
    status: "published"
  },
  {
    id: "ecotrack",
    name: "EcoTrack",
    tagline: "Hyperlocal urban carbon footprint analyzer & sensor data visualization",
    description: "Connects micro-climate IoT sensor feeds with municipal transit data to quantify personal carbon footprints and gamify green commuting on university campuses.",
    overview: `### The Problem
Sustainability campaigns often fail because environmental impact feels abstract and invisible to students.

### The Solution
EcoTrack renders interactive 3D heatmaps of campus emissions, tracks commute carbon savings, and awards campus store discounts to students choosing electric bikes or walking.`,
    category: "Data Analytics",
    difficulty: "Intermediate",
    technologies: ["Python", "Data Analytics", "API", "Leaflet.js", "Chart.js", "Flask"],
    student: {
      id: "student-4",
      name: "Elena Rostova",
      college: "MIT",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      role: "Climate Tech Researcher",
      bio: "Fusing data science with climate policy and geospatial mapping."
    },
    likes: 410,
    views: 3190,
    saves: 185,
    thumbnail: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/elena-rostova/ecotrack-campus",
    liveDemoUrl: "https://ecotrack-campus.surge.sh",
    features: [
      "Geospatial emissions mapping using Leaflet.js and OpenStreetMap",
      "Commute route carbon calculator with multi-modal comparison",
      "Gamified campus sustainability leaderboard with reward tokens"
    ],
    resumeDescription: "Constructed a geospatial carbon tracking analytics tool in Python and Flask. Integrated IoT sensor APIs and public transit data feeds to calculate carbon offsets across 20+ campus transit routes, saving an estimated 4.2 tons of CO2.",
    createdAt: "2026-08-10T12:00:00Z",
    status: "published"
  },
  {
    id: "ai-resume-analyzer",
    name: "AI Resume Analyzer & ATS Scorer",
    tagline: "Semantic resume grading and job description keyword matcher with LLMs",
    description: "An AI-powered tool that evaluates student resumes against target job postings, calculates ATS match compatibility scores, and suggests high-impact bullet point enhancements.",
    overview: `### Why Students Love This
Applicant Tracking Systems (ATS) reject over 75% of student resumes due to poor formatting or missing semantic keywords.

### How It Works
- PDF/DOCX parser extracts structured sections (Education, Skills, Experience, Projects).
- Embeddings comparison with target job specifications using NLP cosine similarity.
- Action-verb suggestion engine to rewrite passive descriptions into quantified accomplishments.`,
    category: "AI / ML",
    difficulty: "Advanced",
    technologies: ["Python", "NLP", "React", "HuggingFace", "Tailwind CSS", "FastAPI"],
    student: {
      id: "student-1",
      name: "Srinitha V.",
      college: "Stanford / PES University",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      role: "Computer Science Senior",
      bio: "Building projects, learning technology and exploring predictive data modeling."
    },
    likes: 890,
    views: 7420,
    saves: 520,
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/srinitha-dev/ai-resume-analyzer",
    liveDemoUrl: "https://resume-ats-analyzer.pages.dev",
    features: [
      "Automated PDF resume parser with structured entity extraction",
      "Semantic keyword density and cosine similarity match scoring",
      "Instant action-verb and quantified metric suggestion engine"
    ],
    resumeDescription: "Built an intelligent ATS resume analyzer using React, FastAPI, and HuggingFace NLP transformers. Evaluated semantic similarity between candidate resumes and job postings with 92% accuracy. Tested by 700+ university job seekers.",
    createdAt: "2026-08-25T11:00:00Z",
    status: "published"
  },
  {
    id: "hospital-management-system",
    name: "Hospital Management System",
    tagline: "HIPAA-aligned electronic health record (EHR), bed allocation, and pharmacy dispatch",
    description: "A comprehensive clinical operations platform streamlining patient triage, doctor appointment scheduling, ICU bed telemetry, and prescription dispensing.",
    overview: `### Motivation
Many rural community hospitals still struggle with paper files and disjointed software causing medication delays and bed management chaos.

### Solution Highlights
- Role-based portals for Doctors, Nurses, Pharmacists, and Hospital Administrators.
- Real-time ICU and General Ward bed occupancy tracker.
- Automatic prescription drug interaction warning engine.`,
    category: "Web Development",
    difficulty: "Intermediate",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Docker", "Tailwind CSS"],
    student: {
      id: "student-5",
      name: "Tariq Mansoor",
      college: "Georgia Tech",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
      role: "Backend Architect",
      bio: "Specializing in high-throughput microservices and distributed storage."
    },
    likes: 375,
    views: 2980,
    saves: 160,
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/tariq-m/hospital-ehr-system",
    liveDemoUrl: "https://hospital-care-demo.vercel.app",
    features: [
      "Role-based portal access with JWT encryption",
      "Interactive SVG bed allocation floorplan for emergency rooms",
      "Automated pharmacy stock alert and prescription tracking"
    ],
    resumeDescription: "Architected a full-stack hospital clinical management system in Vue.js, Node.js, and MongoDB. Containerized services with Docker, cutting deployment overhead by 40%. Implemented secure record management handling 1,200+ simulated patient profiles.",
    createdAt: "2026-06-30T09:15:00Z",
    status: "published"
  },
  {
    id: "weather-dashboard",
    name: "Weather Dashboard & Climate Monitor",
    tagline: "Microclimate forecasting with interactive radar tiles and historical anomaly charts",
    description: "A dark-mode glassmorphic meteorological dashboard pulling 7-day radar forecasts, air quality index (AQI) alerts, and decade-long historical temperature shifts.",
    overview: `### Objective
Provide developers, outdoor researchers, and sports teams with hyper-local weather parameters, solar radiation indices, and precipitation probabilities in a responsive visual interface.`,
    category: "Web Development",
    difficulty: "Beginner",
    technologies: ["React", "JavaScript", "OpenWeather API", "Chart.js", "CSS Glassmorphism"],
    student: {
      id: "student-6",
      name: "Chloe Zhao",
      college: "University of Washington",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      role: "Frontend Developer & UI Designer",
      bio: "Obsessed with buttery-smooth micro-interactions and creative web typography."
    },
    likes: 290,
    views: 2430,
    saves: 118,
    thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/chloezhao/weather-climate-dashboard",
    liveDemoUrl: "https://glass-weather-sky.surge.sh",
    features: [
      "Geolocation-aware instantaneous micro-forecasts",
      "Interactive 24-hour hourly precipitation curves via Chart.js",
      "Air Quality Index (AQI) and UV Index health precautions meter"
    ],
    resumeDescription: "Built a responsive weather visualization application in React and Chart.js consuming OpenWeather REST APIs. Designed custom glassmorphism aesthetic with zero UI framework dependencies. Attracted 2,400+ unique web visitors.",
    createdAt: "2026-07-05T13:40:00Z",
    status: "published"
  },
  {
    id: "devpulse-ecommerce",
    name: "DevPulse - Student Developer E-Commerce",
    tagline: "Headless marketplace for student-built dev tools, mechanical keyboards & tech gear",
    description: "A lightning-fast modern e-commerce storefront engineered with Next.js App Router, Stripe checkout webhooks, and inventory webhooks for student hardware creators.",
    overview: `### The Concept
Engineering students building custom split keyboards, FPGA breakout boards, and mechanical macro pads needed a curated marketplace without exorbitant seller platform cuts.`,
    category: "Web Development",
    difficulty: "Advanced",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    student: {
      id: "student-2",
      name: "Marcus Vance",
      college: "UC Berkeley",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      role: "Full-Stack Developer",
      bio: "Crafting modern web apps with React, Node, and intuitive UX."
    },
    likes: 512,
    views: 4320,
    saves: 230,
    thumbnail: "https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/marcus-v/devpulse-store",
    liveDemoUrl: "https://devpulse-gear.vercel.app",
    features: [
      "Next.js Server Components with sub-second page load times",
      "Secure Stripe payment processing with idempotency keys",
      "Automated digital product delivery & hardware inventory sync"
    ],
    resumeDescription: "Engineered a headless e-commerce platform using Next.js, TypeScript, and Prisma ORM. Implemented full Stripe webhook checkout pipelines and relational inventory schemas in PostgreSQL, achieving a 98/100 Google Lighthouse performance score.",
    createdAt: "2026-08-18T15:20:00Z",
    status: "published"
  },
  {
    id: "face-recognition-attendance",
    name: "Face Recognition Smart Attendance System",
    tagline: "Edge-based computer vision attendance with anti-spoofing and liveness check",
    description: "An automated classroom attendance system using OpenCV, MTCNN, and FaceNet embeddings that records student attendance in real time from IP camera streams.",
    overview: `### The Challenge
Manual roll call in a lecture hall of 150 students consumes 15 minutes of precious instruction time.

### Technological Implementation
- Dual-stage liveness check (blink detection + depth shimmer) preventing photographic and video spoofing.
- FaceNet 128-dimensional embedding generation with cosine thresholding.
- Auto-sync with university attendance database and SMS notifications for absent students.`,
    category: "AI / ML",
    difficulty: "Advanced",
    technologies: ["Python", "OpenCV", "TensorFlow", "SQLite", "Flask", "NumPy"],
    student: {
      id: "student-7",
      name: "Rohan Patel",
      college: "IIT Bombay",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      role: "Computer Vision Researcher",
      bio: "Exploring deep learning, edge ML inference, and embedded robotics."
    },
    likes: 745,
    views: 6180,
    saves: 390,
    thumbnail: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/rohan-patel/face-recognition-attendance",
    liveDemoUrl: "https://smart-attendance-cv.vercel.app",
    features: [
      "Real-time 30 FPS multi-face detection using MTCNN",
      "Liveness detection algorithm to eliminate photo spoofing",
      "Automated attendance report generation with CSV and email export"
    ],
    resumeDescription: "Developed an automated biometric attendance platform using Python, OpenCV, and TensorFlow. Integrated FaceNet embeddings achieving 97.6% multi-face recognition accuracy across varying classroom lighting conditions. Reduced lecture check-in time from 15 minutes to 10 seconds.",
    createdAt: "2026-07-28T09:00:00Z",
    status: "published"
  },
  {
    id: "blockcert-credential-verification",
    name: "BlockCert - Academic Credential Verification",
    tagline: "Tamper-proof academic diploma verification on Ethereum smart contracts",
    description: "Decentralized credential issuance protocol allowing universities to mint cryptographically verifiable NFT diplomas and employers to verify degrees in seconds.",
    overview: `### The Problem
Fake degrees and credential fraud cost corporations millions every year while verification through registrars takes weeks.

### How BlockCert Works
- University registrar signs degrees using institutional private keys.
- Deploys ERC-721 non-transferrable Soulbound Tokens (SBT) to students' Ethereum wallets.
- Employers scan QR codes to instantly verify degree authenticity against the blockchain.`,
    category: "Cybersecurity",
    difficulty: "Advanced",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Hardhat", "IPFS"],
    student: {
      id: "student-3",
      name: "Aiden Chen",
      college: "University of Waterloo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      role: "Software Engineering Sophomore",
      bio: "Systems hacker, distributed database enthusiast, open-source maintainer."
    },
    likes: 460,
    views: 3840,
    saves: 215,
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/aidenchen/blockcert-dapp",
    liveDemoUrl: "https://blockcert-verify.pages.dev",
    features: [
      "Soulbound Token (ERC-5192) implementation in Solidity",
      "IPFS decentralized document metadata storage",
      "Instant 1-click employer verification portal with zero gas fees for verifiers"
    ],
    resumeDescription: "Built a decentralized academic credential verification dApp using Solidity, React, and Web3.js. Deployed Soulbound Token smart contracts on Ethereum testnet with IPFS metadata storage, enabling instant zero-trust degree verification.",
    createdAt: "2026-08-05T14:10:00Z",
    status: "published"
  },
  {
    id: "codearena-realtime-battles",
    name: "CodeArena - Realtime Algorithmic Duel",
    tagline: "1v1 competitive coding battles with live Monaco editor and sandboxed execution",
    description: "A gamified competitive programming platform where students race to solve LeetCode-style algorithms in real time with spectator mode and syntax highlighting.",
    overview: `### The Vision
Make data structures and algorithm prep engaging and collaborative rather than solitary grinding.

### Features
- Real-time keystroke synchronization and test-case passing meters.
- Isolated Docker sandbox code execution supporting Python, JavaScript, C++, and Java.
- ELO rating matchmaking system for university coding clubs.`,
    category: "Game Development",
    difficulty: "Advanced",
    technologies: ["Node.js", "Socket.io", "Monaco Editor", "Redis", "Docker", "React"],
    student: {
      id: "student-1",
      name: "Srinitha V.",
      college: "Stanford / PES University",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      role: "Computer Science Senior",
      bio: "Building projects, learning technology and exploring predictive data modeling."
    },
    likes: 680,
    views: 5910,
    saves: 345,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/srinitha-dev/code-arena-live",
    liveDemoUrl: "https://codearena-duel.vercel.app",
    features: [
      "Sub-50ms WebSocket synchronization with Socket.io and Redis pub/sub",
      "Dockerized secure sandboxed compiler runner with CPU time & memory limits",
      "Automated ELO matchmaking system and weekly tournament bracket mode"
    ],
    resumeDescription: "Created a real-time multiplayer code combat platform in React, Node.js, and Socket.io. Orchestrated sandboxed code evaluation with Docker containers, preventing arbitrary code execution. Hosted campus hackathon tournament with 120 simultaneous contestants.",
    createdAt: "2026-08-20T17:00:00Z",
    status: "published"
  }
];

export const CURRENT_USER = {
  id: "student-1",
  name: "Srinitha",
  fullName: "Srinitha V.",
  email: "srinitha@student.edu",
  title: "Computer Science Student",
  college: "PES University / Stanford Exchange",
  degree: "B.Tech in Computer Science & Engineering",
  year: "Class of 2026",
  bio: "Building projects, learning technology and exploring data. Passionate about machine learning, full-stack systems, and developer tooling.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  followers: 1240,
  following: 184,
  totalLikes: 4890,
  views: 45200,
  saves: 890,
  skills: [
    "Python",
    "SQL",
    "Power BI",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "FastAPI",
    "Machine Learning"
  ],
  achievements: [
    { icon: "🏆", title: "Project Creator", desc: "Published 10+ open-source student projects" },
    { icon: "📊", title: "Data Analytics", desc: "Ranked in top 5% of campus data science league" },
    { icon: "💻", title: "10+ Projects", desc: "Maintained active development portfolio" },
    { icon: "🚀", title: "Hackathon Participant", desc: "Winner at HackCampus 2025" }
  ],
  socials: {
    github: "https://github.com/srinitha-dev",
    linkedin: "https://linkedin.com/in/srinitha-v",
    twitter: "https://twitter.com/srinitha_dev",
    portfolio: "https://srinitha.dev"
  }
};

export const INITIAL_COMMENTS = {
  "ai-health-assistant": [
    {
      id: "c1",
      author: "Alex Morgan",
      role: "Tech Recruiter @ Stripe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "Really clean dashboard design and impressive classification accuracy! How did you handle unbalanced medical symptom classes?",
      timestamp: "2 hours ago",
      likes: 14
    },
    {
      id: "c2",
      author: "David Kim",
      role: "Peer Developer",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
      content: "Try adding a mobile version with voice symptom dictation via Web Speech API. That would take this to the next level!",
      timestamp: "1 day ago",
      likes: 8
    }
  ],
  "smart-expense-tracker": [
    {
      id: "c3",
      author: "Prof. H. Williams",
      role: "Faculty Advisor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      content: "Excellent implementation of OCR on client devices. Great software engineering rigor.",
      timestamp: "3 days ago",
      likes: 19
    }
  ]
};

export const LEADERBOARD_DATA = {
  topProjects: [
    { rank: 1, id: "ai-resume-analyzer", name: "AI Resume Analyzer & ATS Scorer", student: "Srinitha V.", category: "AI / ML", likes: 890, views: 7420, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    { rank: 2, id: "face-recognition-attendance", name: "Face Recognition Attendance", student: "Rohan Patel", category: "AI / ML", likes: 745, views: 6180, avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" },
    { rank: 3, id: "codearena-realtime-battles", name: "CodeArena Duel", student: "Srinitha V.", category: "Game Development", likes: 680, views: 5910, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    { rank: 4, id: "campusconnect", name: "CampusConnect Hub", student: "Aiden Chen", category: "Web Development", likes: 620, views: 5200, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { rank: 5, id: "smart-expense-tracker", name: "Smart Expense Tracker", student: "Marcus Vance", category: "Web Development", likes: 540, views: 4120, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { rank: 6, id: "devpulse-ecommerce", name: "DevPulse E-Commerce", student: "Marcus Vance", category: "Web Development", likes: 512, views: 4320, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { rank: 7, id: "ai-health-assistant", name: "AI Health Assistant", student: "Srinitha V.", category: "AI / ML", likes: 482, views: 3820, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    { rank: 8, id: "blockcert-credential-verification", name: "BlockCert DApp", student: "Aiden Chen", category: "Cybersecurity", likes: 460, views: 3840, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { rank: 9, id: "ecotrack", name: "EcoTrack Smart Campus", student: "Elena Rostova", category: "Data Analytics", likes: 410, views: 3190, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
    { rank: 10, id: "hospital-management-system", name: "Hospital EHR System", student: "Tariq Mansoor", category: "Web Development", likes: 375, views: 2980, avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80" }
  ],
  topStudents: [
    { rank: 1, name: "Srinitha V.", college: "PES University / Stanford", projects: 12, likes: 4890, views: 45200, score: 9850, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    { rank: 2, name: "Rohan Patel", college: "IIT Bombay", projects: 9, likes: 3420, views: 28900, score: 8740, avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" },
    { rank: 3, name: "Aiden Chen", college: "University of Waterloo", projects: 8, likes: 2950, views: 24100, score: 8120, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { rank: 4, name: "Marcus Vance", college: "UC Berkeley", projects: 7, likes: 2680, views: 21500, score: 7600, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { rank: 5, name: "Elena Rostova", college: "MIT", projects: 6, likes: 2310, views: 19800, score: 7100, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
    { rank: 6, name: "Tariq Mansoor", college: "Georgia Tech", projects: 5, likes: 1890, views: 15400, score: 6250, avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80" },
    { rank: 7, name: "Chloe Zhao", college: "Univ. of Washington", projects: 5, likes: 1640, views: 14200, score: 5800, avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" },
    { rank: 8, name: "Liam O'Connor", college: "Trinity College Dublin", projects: 4, likes: 1420, views: 11900, score: 5120, avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" },
    { rank: 9, name: "Ananya Sharma", college: "BITS Pilani", projects: 4, likes: 1290, views: 10500, score: 4890, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
    { rank: 10, name: "Kenji Sato", college: "Tokyo University", projects: 3, likes: 1150, views: 9800, score: 4420, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" }
  ],
  risingCreators: [
    { rank: 1, name: "Maya Patel", college: "Carnegie Mellon", growth: "+340% this week", projects: 3, likes: 980, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    { rank: 2, name: "Zackary Taylor", college: "UT Austin", growth: "+280% this week", projects: 2, likes: 820, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { rank: 3, name: "Priya Nair", college: "NUS Singapore", growth: "+245% this week", projects: 3, likes: 760, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
    { rank: 4, name: "Lucas Silva", college: "USP Brazil", growth: "+210% this week", projects: 2, likes: 640, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { rank: 5, name: "Sara Al-Hashimi", college: "KAUST", growth: "+195% this week", projects: 2, likes: 580, avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" }
  ]
};
