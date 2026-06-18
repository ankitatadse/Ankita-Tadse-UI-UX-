/* ── PROJECTS DATA — Professional Case Study Structure ─────────────
   Each project has:
   - images[]: Array of HD image URLs (carousel). First = cover card image.
   - heroImage: Single hero image shown at the top of the modal.
   - tags, title, subtitle, role, timeline, platform
   - aboutProject (+ aboutImage)
   - userChallenges[] (+ challengesImage)
   - mySolution (+ solutionImage)
   - designSystem: { typography, colors, components[] } (+ designSystemImage)
   - outcomes[]: [{n, label}], successMetrics text (+ metricsImage)
   - keyTakeaway (+ takeawayImage)
   - tools[]
   ──────────────────────────────────────────────────────────────── */
const PROJECTS_DATA = {

  "Service operation dashboard": {
    images: [
      "https://cdn.dribbble.com/userupload/48072469/file/ad33055d2230abb169cf52ffc80d0c6b.png?resize=1504x1128&vertical=center",
      "https://cdn.dribbble.com/userupload/48072471/file/48c8427f4d7c0d883bce807e512357fb.png?resize=1504x1128&vertical=center",
      "https://cdn.dribbble.com/userupload/48072470/file/cdad10d8536f10a27a14effa468608ef.png?resize=1504x1128&vertical=center",
      "https://cdn.dribbble.com/userupload/48072472/file/54c38142eacda86834eda2b904adc3ef.png?resize=1504x1128&vertical=center",
    ],
    heroImage: "https://cdn.dribbble.com/userupload/48072469/file/ad33055d2230abb169cf52ffc80d0c6b.png?resize=1504x1128&vertical=center",
    tags: [{ label: 'Web Dashboard', cls: 't-web' }, { label: 'Service Operations', cls: 't-dashboard' }, { label: 'Data Viz', cls: 't-ux' }],
    title: 'Service Operation Dashboard',
    subtitle: 'A centralized operations dashboard built for an enterprise automotive company to streamline technician management, job tracking, and operational monitoring.',
    role: 'UI/UX Designer', timeline: '10 Weeks', platform: 'Web',
    aboutProject: 'This project focused on designing a centralized service operations dashboard for an enterprise automotive company to streamline technician management, job tracking, and operational monitoring. The goal was to transform complex business requirements into an intuitive digital experience that enables supervisors and service managers to monitor performance, track active jobs, and make faster operational decisions.',
    aboutImage: "https://cdn.dribbble.com/userupload/48072471/file/48c8427f4d7c0d883bce807e512357fb.png?resize=1504x1128&vertical=center",
    userChallenges: [
      'Difficulty tracking multiple service jobs simultaneously.',
      'Limited visibility into technician workload and productivity.',
      'Manual monitoring of service progress and job status.',
      'Critical operational data scattered across multiple systems.',
    ],
    challengesImage: "https://cdn.dribbble.com/userupload/48072470/file/cdad10d8536f10a27a14effa468608ef.png?resize=1504x1128&vertical=center",
    mySolution: 'Designed a role-based dashboard that provides real-time visibility into active jobs, technician activities, and operational KPIs. The interface prioritizes high-impact metrics, job status monitoring, and quick actions, allowing users to identify bottlenecks and manage service operations efficiently.',
    solutionImage: "https://cdn.dribbble.com/userupload/48072472/file/54c38142eacda86834eda2b904adc3ef.png?resize=1504x1128&vertical=center",
    designSystem: {
      typography: 'Clear hierarchy for KPIs, data tables, and operational alerts.',
      colors: 'Professional blue theme to establish trust and consistency.',
      components: [
        'Secure Login Portal',
        'Success Notifications',
        'KPI Summary Cards',
        'Active Job Registry',
        'Status Indicators',
        'Quick Action Controls',
        'Global Search & Navigation',
      ],
    },
    designSystemImage: "https://cdn.dribbble.com/userupload/48072470/file/cdad10d8536f10a27a14effa468608ef.png?resize=1504x1128&vertical=center",
    successMetrics: 'Measure the effectiveness of the solution through task completion speed, operational visibility, dashboard engagement, and reduction in manual monitoring efforts.',
    outcomes: [
      { n: '3×', label: 'Reducing administrative effort' },
      { n: '60%', label: 'Reduction in customer follow-up calls' },
      { n: '100%', label: 'Real-time visibility for service advisors' },
    ],
    metricsImage: "https://cdn.dribbble.com/userupload/48072471/file/48c8427f4d7c0d883bce807e512357fb.png?resize=1504x1128&vertical=center",
    takeawayImage: "https://cdn.dribbble.com/userupload/48072472/file/54c38142eacda86834eda2b904adc3ef.png?resize=1504x1128&vertical=center",
    keyTakeaway: 'By centralizing operational data and presenting it through a clear, action-oriented dashboard, the solution helps service teams make informed decisions faster, improve workflow visibility, and enhance overall operational efficiency.',
    tools: ['Figma', 'FigJam', 'Prototyping', 'User Interviews', 'Dashboard Design', 'Design Systems'],
  },
  automotive: {
    images: [
      "https://cdn.dribbble.com/userupload/47955112/file/04abd982d3e2a5a5eeb260da6df6727d.png?resize=1504x&vertical=center",
      "https://cdn.dribbble.com/userupload/47955113/file/dcc3d1215f8ede27adb04250d6a277b6.png?resize=1504x&vertical=center",
      "https://cdn.dribbble.com/userupload/47955115/file/7749a8c0a1b4a7e92f9cf4dcd9b544f2.png?resize=1504x&vertical=center",
      "https://cdn.dribbble.com/userupload/47955114/file/145ec9f95af3b339375c8275f73c2fbf.png?resize=1504x&vertical=center",
      "https://cdn.dribbble.com/userupload/47955116/file/7000a09f176373132db2a833135af5d5.png?resize=1504x&vertical=center"
    ],
    heroImage: "https://cdn.dribbble.com/userupload/47955112/file/04abd982d3e2a5a5eeb260da6df6727d.png?resize=1504x&vertical=center",
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'UX Case Study', cls: 't-ux' }, { label: 'Enterprise', cls: 't-dashboard' }],
    title: 'Automotive Service Management App',
    subtitle: 'End-to-end service tracking for mechanics and service advisors — all in one unified mobile platform.',
    role: 'UI/UX Designer', timeline: '10 Weeks', platform: 'Android',
    aboutProject: 'Service App is a mobile service management solution designed for automotive dealerships to streamline service appointments, job card management, and workshop operations. The experience enables service advisors to create appointments, manage customer vehicles, track service progress, and handle job cards efficiently—all from a single mobile application.',
    aboutImage: "https://cdn.dribbble.com/userupload/47955112/file/04abd982d3e2a5a5eeb260da6df6727d.png?resize=1504x&vertical=center",
    userChallenges: [
      'Service advisors spend significant time creating and managing service appointments manually.',
      'Tracking vehicle service status across multiple customers can be difficult.',
      'Job card information is often scattered across different systems.',
      'Workshop teams need quick access to customer and vehicle details while on the move.'
    ],
    challengesImage: "https://cdn.dribbble.com/userupload/47955113/file/dcc3d1215f8ede27adb04250d6a277b6.png?resize=1504x&vertical=center",
    mySolution: 'Quick Appointment Creation — a guided appointment flow; Centralized Dashboard — all service activities and job card summaries in one place; Mobile Job Card Management — view, update, and track job cards from mobile; Real-Time Service Visibility — clear status indicators and quick actions for daily operations.',
    solutionImage: "https://cdn.dribbble.com/userupload/47955115/file/7749a8c0a1b4a7e92f9cf4dcd9b544f2.png?resize=1504x&vertical=center",
    designSystem: {
      typography: 'Inter for clean readability and strong visual hierarchy.',
      colors: 'Purple primary brand with supporting status and action colors.',
      components: [
        'Appointment cards',
        'Progress steppers',
        'Search bars',
        'Quick actions',
        'Forms',
        'CTA components',
        'Dashboard analytics widgets'
      ]
    },
    designSystemImage: "https://cdn.dribbble.com/userupload/47955114/file/145ec9f95af3b339375c8275f73c2fbf.png?resize=1504x&vertical=center",
    successMetrics: 'The application simplifies dealership service operations by reducing administrative effort, improving service visibility, and enabling service advisors to manage customer interactions and workshop activities more efficiently from anywhere.',
    metricsImage: "https://cdn.dribbble.com/userupload/47955116/file/7000a09f176373132db2a833135af5d5.png?resize=1504x&vertical=center",
    keyTakeaway: 'A mobile-first workflow reduces admin overhead and delivers real-time operational visibility for service teams.',
    tools: ['Figma', 'FigJam', 'Prototyping', 'User Interviews', 'Mobile Design', 'Design Systems'],
  },

  bus: {
    images: [
      'https://cdn.dribbble.com/userupload/47571017/file/159f0145f4df13fe543033d8fed05ef8.png?resize=1504x&vertical=center',
      'https://cdn.dribbble.com/userupload/47571156/file/fe4939ce5fdb22ee0bee3c62d2a39e27.png?resize=1504x&vertical=center'
    ],
    heroImage: 'https://cdn.dribbble.com/userupload/47571017/file/159f0145f4df13fe543033d8fed05ef8.png?resize=1504x&vertical=center',
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'Redesign', cls: 't-ux' }],
    title: 'Bus Booking App Redesign',
    subtitle: 'A modern reimagination of a bus booking experience focused on simplicity, speed, and decision clarity.',
    role: 'UX Designer', timeline: '6 Weeks', platform: 'iOS & Android',
    aboutProject: 'A modern reimagination of a bus booking experience focused on simplicity, speed, and decision clarity.',
    aboutImage: 'https://cdn.dribbble.com/userupload/47571017/file/159f0145f4df13fe543033d8fed05ef8.png?resize=1504x&vertical=center',
    userChallenges: [
      'Users often struggle with cluttered interfaces, overwhelming options, and difficulty comparing buses quickly.'
    ],
    challengesImage: 'https://cdn.dribbble.com/userupload/47571156/file/fe4939ce5fdb22ee0bee3c62d2a39e27.png?resize=1504x&vertical=center',
    mySolution: 'Designed a clean, minimal, and intuitive interface that helps users quickly search routes, compare buses at a glance, and make faster booking decisions. Introduced card-based listings, simplified search flow, and trust indicators like ratings and seats-left.',
    outcomes: [
      { n: '3→1', label: 'Booking steps reduced' },
      { n: '40%', label: 'Est. drop-off reduction' },
      { n: '5★', label: 'Avg task completion in usability test' },
    ],
    process: [
      { step: '01', title: 'UX Audit', desc: 'Ran a heuristic evaluation against Nielsen\'s 10 principles. Found 14 usability violations, ranked by severity and frequency.' },
      { step: '02', title: 'User Research', desc: 'Competitive analysis of 4 booking apps. Screened 8 users on task completion — seat selection had the highest failure rate.' },
      { step: '03', title: 'Wireframe & Test', desc: 'Paper wireframes → Figma lo-fi → tested with 5 users. Iterated the seat map 3 times before reaching 0 confusion errors.' },
      { step: '04', title: 'Hi-Fi Delivery', desc: 'Complete hi-fi screens for 20+ states including empty, loading, error, success, and edge cases across both themes.' },
    ],
    tools: ['Figma', 'UI Design', 'UX Thinking'],
  },
  english: {
    images: [
      'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png'
    ],
    heroImage: 'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'UX Case Study', cls: 't-ux' }, { label: 'EdTech', cls: 't-brand' }],
    title: 'English Learning App',
    subtitle: 'A gamified mobile experience that turns language learning into a 10-minute daily habit — with streaks, adaptive difficulty, and conversational AI practice.',
    role: 'UI/UX Designer', timeline: '8 Weeks', platform: 'iOS',
    aboutProject: 'Existing language apps felt like homework — long sessions, passive learning, and no real motivation loop. This concept rethinks English learning as a series of short, high-engagement micro-sessions built around habit science: keep it under 10 minutes, reward consistency, and make speaking less scary.',
    aboutImage: 'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
    userChallenges: [
      'Most learners quit by Day 3 due to long sessions and low motivation.',
      'No visible progress or low-stakes speaking practice increases anxiety.'
    ],
    challengesImage: 'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
    mySolution: 'A compact daily lesson format capped at 10 minutes, with a visual streak system, an AI chatbot for low-stakes conversation practice, and a personalised learning path from an initial assessment. Gamified badges reward depth and mastery, not just streaks.',
    solutionImage: 'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
    designSystem: {
      typography: 'Poppins for friendly, readable UI at small sizes.',
      colors: 'Accessible, vibrant accent palette for encouragement and feedback.',
      components: [
        'Lesson cards',
        'Streak & progress bar',
        'Conversational chatbot UI',
        'Badge & achievement modal'
      ]
    },
    designSystemImage: 'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
    successMetrics: 'Engagement (daily active users), retention (Day-3 retention), and average lesson completion rate.',
    metricsImage: 'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
    keyTakeaway: 'Short, habit-focused lessons with low-friction speaking practice increase retention and reduce early drop-off.',
    takeawayImage: 'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
    outcomes: [
      { n: '10 min', label: 'Max daily lesson length' },
      { n: '3 days', label: 'Target habit formation window' },
      { n: '4 modes', label: 'Learning types: Read, Listen, Speak, Write' }
    ],
    process: [
      { step: '01', title: 'Research', desc: 'Reviewed habit formation literature and ran a diary study to identify drop-off points.' },
      { step: '02', title: 'Concept', desc: 'Tested competing lesson formats and selected a conversation-first hybrid.' },
      { step: '03', title: 'Design', desc: 'Designed accessible patterns and a gamified progression system.' },
      { step: '04', title: 'Prototype', desc: 'Built an interactive prototype and validated with users.' }
    ],
    tools: ['Figma', 'Gamification Design', 'User Research', 'Prototyping', 'Habit Design', 'AI UX'],
  },

  healthcare: {
    images: [
      'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg'
    ],
    heroImage: 'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
    tags: [{ label: 'Web Dashboard', cls: 't-web' }, { label: 'Healthcare', cls: 't-dashboard' }, { label: 'Data Viz', cls: 't-ux' }],
    title: 'Healthcare Dashboard',
    subtitle: 'A clinician-facing patient analytics platform designed for speed, minimal cognitive load, and zero ambiguity in high-pressure clinical environments.',
    role: 'UI/UX + Data Viz Designer', timeline: '12 Weeks', platform: 'Web (Desktop)',
    aboutProject: 'Designed for doctors and clinical staff who have seconds — not minutes — to make data-informed decisions. The dashboard consolidates patient vitals, upcoming appointments, department metrics, and alert flags into a single view, eliminating the need to switch between 4 separate hospital systems.',
    aboutImage: 'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
    userChallenges: [
      'Switching between multiple systems caused delayed responses to critical alerts and documentation errors.',
      'High cognitive load due to scattered patient data across tools.'
    ],
    challengesImage: 'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
    mySolution: 'A unified dashboard with patient-centric information architecture, priority alerts at the top, and progressive disclosure for patient cards so clinicians can get the right information at a glance.',
    solutionImage: 'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
    designSystem: {
      typography: 'Legible system with clear hierarchy optimized for quick glances.',
      colors: 'High-contrast neutrals with accent states for alerts and critical metrics.',
      components: [
        'Patient cards',
        'Priority alert banners',
        'Data tables with sparklines',
        'Progressive disclosure panels'
      ]
    },
    designSystemImage: 'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
    successMetrics: 'Reduced time-to-find critical patient info and consolidated multiple systems into one workflow to reduce errors.',
    metricsImage: 'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
    keyTakeaway: 'Centralizing clinical data into a glanceable dashboard reduces cognitive load and speeds critical decision-making in high-pressure environments.',
    takeawayImage: 'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
    outcomes: [
      { n: '4→1', label: 'Systems consolidated into one view' },
      { n: '↓ 35%', label: 'Time-to-find critical patient info' },
      { n: '0', label: 'Unnecessary data density on primary view' }
    ],
    process: [
      { step: '01', title: 'Contextual Inquiry', desc: 'Observed clinicians during rounds to measure time-to-answer critical questions.' },
      { step: '02', title: 'Information Architecture', desc: 'Card sorting with clinical staff to align mental models.' },
      { step: '03', title: 'Dashboard Design', desc: 'Applied data-ink principles for focused displays.' },
      { step: '04', title: 'Accessibility', desc: 'WCAG AA colour system and high-contrast mode.' }
    ],
    tools: ['Figma', 'Dashboard Design', 'Healthcare UX', 'Data Visualization', 'WCAG AA', 'Card Sorting'],
  },

  finance: {
    images: [
      'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png'
    ],
    heroImage: 'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'Fintech', cls: 't-ux' }],
    title: 'Finance Bank App',
    subtitle: 'A personal banking app that answers "how much did I spend this week?" in under 2 seconds — and gets you to any action in 3 taps or fewer.',
    role: 'UI/UX Designer', timeline: '6 Weeks', platform: 'iOS',
    aboutProject: 'A concept redesign focused on speed to insight and reduction of tap depth. Reoriented the home screen around user tasks, not features.',
    aboutImage: 'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
    userChallenges: [
      'Key actions hidden in nested menus and no contextual spending insights on the home screen.'
    ],
    challengesImage: 'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
    mySolution: 'Redesigned home to show current balance, this week\'s spend, and recent transactions at a glance. Added a persistent quick-action bar and visual spend indicators to reduce tap depth.',
    solutionImage: 'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
    designSystem: {
      typography: 'Poppins for approachable clarity and small-size readability.',
      colors: 'Neutral base with vibrant action accents for quick visual parsing.',
      components: [
        'Quick-action bar',
        'Spending sparkline',
        'Transaction cards',
        'Persistent balance header'
      ]
    },
    designSystemImage: 'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
    successMetrics: 'Reduced tap-depth for core actions and surface key spending insights in under 2 seconds.',
    metricsImage: 'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
    keyTakeaway: 'Designing for the user\'s question-first behaviour (not feature-first) significantly improves speed-to-answer and task completion.',
    takeawayImage: 'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
    outcomes: [
      { n: '3 taps', label: 'To complete any core action' },
      { n: '0 scroll', label: 'Needed to see key account info' },
      { n: '5→3', label: 'Transfer flow steps reduced' }
    ],
    process: [
      { step: '01', title: 'Jobs-To-Be-Done', desc: 'Interviewed users to identify core tasks and designed the nav around jobs.' },
      { step: '02', title: 'Competitor Teardown', desc: 'Analysed competitor tap-depth and optimised flows.' },
      { step: '03', title: 'Design & Prototype', desc: 'Built an interactive prototype for rapid testing.' },
      { step: '04', title: 'Usability Test', desc: 'Validated transfer flow reductions with remote tests.' }
    ],
    tools: ['Figma', 'Mobile Design', 'Fintech UX', 'Prototyping', 'Jobs-To-Be-Done', 'Usability Testing'],
  },

  smartwatch: {
    images: [
      'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png'
    ],
    heroImage: 'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
    tags: [{ label: 'Wearable', cls: 't-ux' }, { label: 'UX Case Study', cls: 't-ux' }],
    title: 'Smartwatch — UX Case Study',
    subtitle: 'Designing for extreme constraints: a 40mm circular display where every interaction must complete in under 5 seconds, one-handed, on the go.',
    role: 'UX Designer', timeline: '5 Weeks', platform: 'WearOS (40mm)',
    aboutProject: 'A wearable OS UX exploration focused on glanceable interactions, one-handed use, and a swipe-based navigation model optimised for a 40mm circular display.',
    aboutImage: 'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
    userChallenges: [
      'Phone-first patterns don\'t translate to watches: tiny text, multi-level menus, and gesture ambiguity cause failures.'
    ],
    challengesImage: 'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
    mySolution: 'A 4-direction swipe navigation model, glanceable data cards, and a constrained design system that enforces max menu depth and short interaction durations.',
    solutionImage: 'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
    designSystem: {
      typography: 'Readable, scaled typography at small sizes with Poppins for consistent UI tone.',
      colors: 'High-contrast palette for visibility under varied lighting.',
      components: [
        'Glance cards',
        'Circular navigation guides',
        'One-action controls',
        'Micro-animation patterns'
      ]
    },
    designSystemImage: 'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
    successMetrics: 'Max menu depth ≤2, interaction times under 5 seconds, and measurable reduction in task failure rates.',
    metricsImage: 'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
    keyTakeaway: 'Designing from constraints up produces reliable, glanceable experiences for wearables that outperform phone-first adaptations.',
    takeawayImage: 'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
    outcomes: [
      { n: '≤2', label: 'Max menu depth in entire OS' },
      { n: '5 sec', label: 'Target max interaction time' },
      { n: '4 dir', label: 'Navigation axes: simple, learnable' }
    ],
    process: [
      { step: '01', title: 'Constraint Mapping', desc: 'Documented physical and cognitive constraints for watch UX.' },
      { step: '02', title: 'Pattern Research', desc: 'Audited existing wearable patterns and identified gaps.' },
      { step: '03', title: 'Design System', desc: 'Built round-display component specs and navigation guides.' },
      { step: '04', title: 'Prototype', desc: 'Simulated swipe navigation and validated interaction times.' }
    ],
    tools: ['Figma', 'Wearable Design', 'Interaction Design', 'Constraint-First Design', 'Design Systems'],
  },

  abtest: {
    images: [
      'https://cdn.dribbble.com/userupload/47932600/file/cda2ebe060091e90dd3f841d86febdd2.png?resize=1504x&vertical=center',
      'https://cdn.dribbble.com/userupload/47932603/file/2f57477d749daaf5fbec7b652e73d91b.png?resize=1504x&vertical=center',
      'https://cdn.dribbble.com/userupload/47932601/file/2c0454e4f2d87033b45e00af732b4f8f.png?resize=1504x&vertical=center',
      'https://cdn.dribbble.com/userupload/47932602/file/afd87e3d72815f2dfd5ce3c1eea15051.png?resize=1504x&vertical=center'
    ],
    heroImage: 'https://cdn.dribbble.com/userupload/47932600/file/cda2ebe060091e90dd3f841d86febdd2.png?resize=1504x&vertical=center',
    tags: [{ label: 'Web', cls: 't-web' }, { label: 'A/B Testing', cls: 't-ux' }, { label: 'Research', cls: 't-brand' }],
    title: 'Profile Card A/B Test',
    subtitle: 'A design-led A/B test comparing two profile card layouts to measure engagement and CTA recognition.',
    role: 'UI Designer + UX Researcher', timeline: '3 Weeks', platform: 'Web',
    aboutProject: 'This project explores an A/B test of two profile card designs to understand how layout and visual presentation influence user engagement and CTA visibility.',
    aboutImage: 'https://cdn.dribbble.com/userupload/47932600/file/cda2ebe060091e90dd3f841d86febdd2.png?resize=1504x&vertical=center',
    userChallenges: [
      'Users often spend only a few seconds viewing profile cards, making it difficult to highlight key information and encourage interaction.'
    ],
    challengesImage: 'https://cdn.dribbble.com/userupload/47932603/file/2f57477d749daaf5fbec7b652e73d91b.png?resize=1504x&vertical=center',
    mySolution: 'Version A (Structured Layout) prioritises content clarity and scanability. Version B (Immersive Layout) prioritises visual impact with a glass-morphism overlay. We measured Follow CTR, engagement, interaction speed, and preference to determine the better balance between usability and conversion.',
    solutionImage: 'https://cdn.dribbble.com/userupload/47932601/file/2c0454e4f2d87033b45e00af732b4f8f.png?resize=1504x&vertical=center',
    designSystem: {
      typography: 'Readable system with clear hierarchy for small UI elements.',
      colors: 'Neutral backgrounds with accent action colours for CTAs.',
      components: [
        'Profile cards',
        'CTA buttons',
        'Overlay states',
        'Compact metadata rows'
      ]
    },
    designSystemImage: 'https://cdn.dribbble.com/userupload/47932602/file/afd87e3d72815f2dfd5ce3c1eea15051.png?resize=1504x&vertical=center',
    successMetrics: 'Measured Follow Button CTR, engagement, interaction speed, and overall user preference across both variants.',
    metricsImage: 'https://cdn.dribbble.com/userupload/47932602/file/afd87e3d72815f2dfd5ce3c1eea15051.png?resize=1504x&vertical=center',
    keyTakeaway: 'The test compares a content-focused approach against a visual-first approach to identify which design balances usability, engagement, and conversion.',
    takeawayImage: 'https://cdn.dribbble.com/userupload/47932603/file/2f57477d749daaf5fbec7b652e73d91b.png?resize=1504x&vertical=center',
    process: [
      { step: '01', title: 'Hypothesis & Metrics', desc: 'Defined measurable goals: Follow CTR, engagement and interaction speed.' },
      { step: '02', title: 'Design Variants', desc: 'Created Version A (content-first) and Version B (visual-first) at hi-fi fidelity.' },
      { step: '03', title: 'Testing', desc: 'Ran quick preference and interaction tests to gather quantitative and qualitative feedback.' },
      { step: '04', title: 'Recommend', desc: 'Analysed results and recommended the variant that optimised for CTR and usability.' }
    ],
    tools: ['Figma', 'A/B Design', 'Heuristic Evaluation', '5-Second Testing', 'UI Design'],
  },

  /* ── UPCOMING PROJECTS ── */
  'dms-web': {
    images: [], coming: true,
    tags: [{ label: 'Web App', cls: 't-web' }, { label: 'Enterprise', cls: 't-dashboard' }],
    title: 'Web DMS — Document Management System',
    subtitle: 'An enterprise platform for managing operations documentation — version control, approval workflows, and full-text search for operations teams.',
    role: 'Lead UI/UX Designer', timeline: 'In Progress', platform: 'Web (Desktop)',
    overview: 'An enterprise web platform for managing operations documentation, built on real workflow research from time at Kohler ITC. Operations teams were managing critical documents across email threads, shared drives, and physical binders — version control was a constant issue.',
    problem: 'Documents existed across 5+ disconnected tools. No version history, no audit trail, no way to know if the document you were reading was the current one. Approvals happened over email, leaving no record. Compliance reviews were a manual nightmare.',
    solution: 'Currently designing a centralised DMS with role-based access, version history, approval workflows, change notifications, and full-text search. Case study dropping soon.',
    outcomes: [], process: [],
    tools: ['Figma', 'Enterprise UX', 'Workflow Design', 'Information Architecture'],
  },
  retailer: {
    images: [], coming: true,
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'B2B', cls: 't-ux' }],
    title: 'Retailer\'s App',
    subtitle: 'A B2B mobile app for field sales reps and retailer partners — order entry, inventory, account ledger, and delivery tracking in one place.',
    role: 'UI/UX Designer', timeline: 'In Progress', platform: 'Android',
    overview: 'Field sales reps were processing retailer orders via phone calls and paper forms with no visibility into stock levels, delivery status, or account history. This app brings that entire workflow into a single mobile interface.',
    problem: 'Reps carried order books and called the warehouse to check stock — during the sales call. Orders were written up post-visit and keyed into a system manually. Errors, delays, and no audit trail were the norm.',
    solution: 'Designing a mobile-first app for reps and retailer owners: quick order entry with real-time stock availability, account ledger, and delivery tracking. Case study coming soon.',
    outcomes: [], process: [],
    tools: ['Figma', 'B2B UX', 'Mobile Design', 'Field Research'],
  },
  clockin: {
    images: [], coming: true,
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'Operations', cls: 't-ux' }],
    title: 'Mechanic Clock-In App',
    subtitle: 'A field-facing time-logging tool designed for gloves-on, one-hand use in busy workshop conditions.',
    role: 'UI/UX Designer', timeline: 'In Progress', platform: 'Android',
    overview: 'Time logging was done on paper at end-of-shift, leading to inaccuracies. Managers had no real-time visibility into job progress or mechanic utilisation. This app solves both problems with a UI designed for the workshop floor — large targets, high contrast, minimal input.',
    problem: 'End-of-shift paper logging introduced memory errors and time theft by accident. Managers had no real-time visibility. Job assignment was verbal — no digital record of who was working on what.',
    solution: 'Simple clock-in/out UI optimised for gloves-on, one-hand use. Job assignment view, parts logging, and a supervisor dashboard showing real-time technician utilisation. Design in progress.',
    outcomes: [], process: [],
    tools: ['Figma', 'Ops UX', 'Accessibility', 'Mobile Design'],
  }
};

/* ─── CAROUSEL STATE ─── */
let _carIdx = 0, _carImgs = [];

// Back to top handler for modal button
document.addEventListener('click', function (e) {
  const modalBtn = e.target.closest ? e.target.closest('.modal-back-top') : null;
  if (!modalBtn) return;
  e.preventDefault();
  e.stopPropagation();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
let _touchStartX = 0, _touchStartY = 0;
let _zoomScale = 1, _zoomPanX = 0, _zoomPanY = 0;
let _isPanning = false, _panStartX = 0, _panStartY = 0;
let _zoomListenersReady = false;

function _getActiveCarouselImage() {
  const slides = document.querySelectorAll('#carouselTrack .modal-carousel-slide');
  if (!slides.length || !slides[_carIdx]) return null;
  return slides[_carIdx].querySelector('img');
}

function _clampZoomPan(vp, scale, x, y) {
  if (!vp || scale <= 1) return { x: 0, y: 0 };
  const maxX = (vp.clientWidth * (scale - 1)) / 2;
  const maxY = (vp.clientHeight * (scale - 1)) / 2;
  return {
    x: Math.max(-maxX, Math.min(maxX, x)),
    y: Math.max(-maxY, Math.min(maxY, y)),
  };
}
function zoomIn() {
  const vp = document.getElementById('carouselViewport');
  _zoomBy(0.5, vp);
}

function zoomOut() {
  const vp = document.getElementById('carouselViewport');
  _zoomBy(-0.5, vp);
}

function resetZoom() {
  _resetActiveImageZoom();
}
function _applyActiveImageTransform() {
  const img = _getActiveCarouselImage();
  if (!img) return;
  img.style.transform = `translate(${_zoomPanX}px, ${_zoomPanY}px) scale(${_zoomScale})`;
  img.style.cursor = _zoomScale > 1 ? (_isPanning ? 'grabbing' : 'grab') : 'zoom-in';
}

function _zoomBy(delta, vp) {
  const nextScale = Math.max(1, Math.min(4, _zoomScale + delta));
  _zoomScale = Number(nextScale.toFixed(2));

  if (_zoomScale === 1) {
    _zoomPanX = 0;
    _zoomPanY = 0;
  } else {
    const clamped = _clampZoomPan(vp, _zoomScale, _zoomPanX, _zoomPanY);
    _zoomPanX = clamped.x;
    _zoomPanY = clamped.y;
  }
  _applyActiveImageTransform();
}

function _resetActiveImageZoom() {
  _zoomScale = 1;
  _zoomPanX = 0;
  _zoomPanY = 0;
  _isPanning = false;
  _applyActiveImageTransform();
}

function _initCarouselZoom() {
  const vp = document.getElementById('carouselViewport');
  if (!vp || _zoomListenersReady) return;
  _zoomListenersReady = true;

  vp.addEventListener('wheel', e => {
    const overlay = document.getElementById('modalOverlay');
    if (!overlay || !overlay.classList.contains('open')) return;
    const img = _getActiveCarouselImage();
    if (!img) return;

    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    _zoomBy(delta, vp);
  }, { passive: false });

  vp.addEventListener('mousedown', e => {
    if (_zoomScale <= 1) return;
    e.preventDefault();
    _isPanning = true;
    _panStartX = e.clientX - _zoomPanX;
    _panStartY = e.clientY - _zoomPanY;
    _applyActiveImageTransform();
  });

  window.addEventListener('mousemove', e => {
    if (!_isPanning || _zoomScale <= 1) return;
    const nextX = e.clientX - _panStartX;
    const nextY = e.clientY - _panStartY;
    const clamped = _clampZoomPan(vp, _zoomScale, nextX, nextY);
    _zoomPanX = clamped.x;
    _zoomPanY = clamped.y;
    _applyActiveImageTransform();
  });

  window.addEventListener('mouseup', () => {
    if (!_isPanning) return;
    _isPanning = false;
    _applyActiveImageTransform();
  });

  vp.addEventListener('dblclick', e => {
    e.preventDefault();

    if (_zoomScale === 1) {
      _zoomScale = 2;
    } else {
      _zoomScale = 1;
      _zoomPanX = 0;
      _zoomPanY = 0;
    }

    _applyActiveImageTransform();
  });

  vp.addEventListener('dblclick', e => {
    e.preventDefault();
    _resetActiveImageZoom();
  });
}

function carouselMove(dir) {
  _carIdx = Math.max(0, Math.min(_carImgs.length - 1, _carIdx + dir));
  _renderCarousel();
}
function carouselGoTo(i) {
  _carIdx = i;
  _renderCarousel();
}
function _renderCarousel() {
  document.getElementById('carouselTrack').style.transform = `translateX(-${_carIdx * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === _carIdx));
  document.querySelectorAll('.carousel-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === _carIdx);
    if (i === _carIdx) t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
  document.getElementById('carouselPrev').classList.toggle('hidden', _carIdx === 0);
  document.getElementById('carouselNext').classList.toggle('hidden', _carIdx === _carImgs.length - 1);
  document.getElementById('carouselCounter').textContent = `${_carIdx + 1} / ${_carImgs.length}`;
  _resetActiveImageZoom();
}

/* Touch / swipe support */
function _initCarouselTouch() {
  const vp = document.getElementById('carouselViewport');
  if (!vp) return;
  vp.addEventListener('touchstart', e => {
    _touchStartX = e.touches[0].clientX;
    _touchStartY = e.touches[0].clientY;
  }, { passive: true });
  vp.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - _touchStartX;
    const dy = e.changedTouches[0].clientY - _touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) carouselMove(dx < 0 ? 1 : -1);
  }, { passive: true });
}

/* ─── MODAL LOGIC ─── */
function openModal(id) {
  const data = PROJECTS_DATA[id];
  if (!data) return;
  const overlay = document.getElementById('modalOverlay');

  /* ── Carousel hidden — using inline section images instead */
  const carouselEl = document.getElementById('modalCarousel');
  if (carouselEl) {
    carouselEl.style.display = 'none';
  }

  /* ── Header ── */
  document.getElementById('modalTags').innerHTML = data.tags.map(t => `<span class="ptag ${t.cls}">${t.label}</span>`).join('');
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = data.subtitle || '';

  /* ── Meta row ── */
  const metaEl = document.getElementById('modalMeta');
  if (data.role || data.timeline || data.platform) {
    metaEl.style.display = '';
    metaEl.innerHTML = [
      data.role ? `<div class="modal-meta-item"><div class="modal-meta-label">My Role</div><div class="modal-meta-value">${data.role}</div></div>` : '',
      data.timeline ? `<div class="modal-meta-item"><div class="modal-meta-label">Timeline</div><div class="modal-meta-value">${data.timeline}</div></div>` : '',
      data.platform ? `<div class="modal-meta-item"><div class="modal-meta-label">Platform</div><div class="modal-meta-value">${data.platform}</div></div>` : '',
    ].join('');
  } else { metaEl.style.display = 'none'; }

  /* ── Content ── */
  let html = '';

  const renderInlineImage = (src, alt) => src ? `<div class="modal-inline-image"><img src="${src}" alt="${alt}" loading="lazy"></div>` : '';
  const renderList = items => items && items.length ? `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>` : '';

  if (data.coming) {
    html += `<div class="coming-banner">⏳ Case study in progress — check back soon or <a href="#contact" onclick="closeModal()" style="color:var(--accent);text-decoration:underline;">reach out for a preview</a>.</div>`;
  }

  if (data.heroImage) {
    html += renderInlineImage(data.heroImage, 'Project hero image');
  }

  if (data.aboutProject) {
    html += `<div class="modal-section"><div class="modal-section-label">About Project</div><p>${data.aboutProject}</p>${renderInlineImage(data.aboutImage, 'About project image')}</div>`;
  }

  if (data.userChallenges && data.userChallenges.length > 0) {
    html += `<div class="modal-section"><div class="modal-section-label">User Challenges</div>${renderList(data.userChallenges)}${renderInlineImage(data.challengesImage, 'Challenges image')}</div>`;
  }

  if (data.mySolution) {
    html += `<div class="modal-section"><div class="modal-section-label">My Solution</div><p>${data.mySolution}</p>${renderInlineImage(data.solutionImage, 'Solution image')}</div>`;
  }

  if (data.designSystem) {
    const systemHtml = `
      ${data.designSystem.typography ? `<p><strong>Typography:</strong> ${data.designSystem.typography}</p>` : ''}
      ${data.designSystem.colors ? `<p><strong>Colors:</strong> ${data.designSystem.colors}</p>` : ''}
      ${renderList(data.designSystem.components)}`;
    html += `<div class="modal-section"><div class="modal-section-label">Design System</div>${systemHtml}${renderInlineImage(data.designSystemImage, 'Design system image')}</div>`;
  }

  if (data.successMetrics) {
    html += `<div class="modal-section"><div class="modal-section-label">Success Metrics</div><p>${data.successMetrics}</p>${renderInlineImage(data.metricsImage, 'Success metrics image')}</div>`;
  }

  if (data.keyTakeaway) {
    html += `<div class="modal-section"><div class="modal-section-label">Key Takeaway</div><p>${data.keyTakeaway}</p>${renderInlineImage(data.takeawayImage, 'Key takeaway image')}</div>`;
  }

  if (data.process && data.process.length > 0) {
    html += `<div class="modal-section"><div class="modal-section-label">Design Process</div>`;
    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">`;
    data.process.forEach(p => {
      html += `<div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:1rem 1.1rem;">
        <div style="font-family:var(--serif);font-size:1.5rem;color:rgba(200,240,96,0.2);line-height:1;margin-bottom:0.4rem;">${p.step}</div>
        <div style="font-size:0.875rem;font-weight:600;color:var(--white);margin-bottom:0.4rem;">${p.title}</div>
        <div style="font-size:0.8rem;color:var(--off);line-height:1.65;">${p.desc}</div>
      </div>`;
    });
    html += `</div></div>`;
  }

  /* Tools & Methods removed per user request */
  html += `
  <div class="modal-back-top-wrap">
    <button class="modal-back-top" onclick="modalBackToTop()">
      Back to Top ↑
    </button>
  </div>
`;
  document.getElementById('modalContent').innerHTML = html;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function carouselGoTo(i) {
  _carIdx = i;
  _renderCarousel();
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && e.type === 'click') return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') carouselMove(1);
  if (e.key === 'ArrowLeft') carouselMove(-1);
});

/* Attach click to all project cards */
document.querySelectorAll('.proj-card[data-id], .upcoming-row[data-id]').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.id));
});

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  if (isOpen) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  } else {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
  }
});
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
}

/* ── FAQ ACCORDION ── */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-icon').textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('open');
      item.querySelector('.faq-icon').textContent = '−';
    }
  });
});

/* Ensure at least one FAQ is expanded on first render */
(() => {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(i => {
    const icon = i.querySelector('.faq-icon');
    if (icon) icon.textContent = i.classList.contains('open') ? '−' : '+';
  });

  const hasOpenItem = document.querySelector('.faq-item.open');
  if (!hasOpenItem) {
    faqItems[0].classList.add('open');
    const firstIcon = faqItems[0].querySelector('.faq-icon');
    if (firstIcon) firstIcon.textContent = '−';
  }
})();

/* ── CONTACT FORM ── */
function handleSubmit(e) {
  // e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Message sent! ✓';
  btn.style.background = '#3B6E11';
  btn.style.color = '#fff';
  setTimeout(() => { btn.textContent = 'Send message →'; btn.style.background = ''; btn.style.color = ''; }, 3000);

  const myForm = e.target;
  const formData = new FormData(myForm);
}

/* ── THEME TOGGLE ── */
(function () {
  const btns = [
    document.getElementById('themeToggle'),
    document.getElementById('themeToggleMobile')
  ].filter(Boolean);

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light');
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  });
})();

/* Edit panel JS removed for public build */


const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.proj-card').forEach(el => io.observe(el));
