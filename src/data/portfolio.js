// Single source of truth for all portfolio content.
// Edit this file to update the site – components never hard-code copy.

export const profile = {
  name: 'Prince Singh',
  status: 'Open to internships and full-time roles',
  roles: ['full-stack web apps.', 'real-time chat systems.', 'AI-powered products.', 'secure REST APIs.'],
  intro: 'From real-time chat to AI-powered products, I ship secure, tested and deployable software end to end.',
  email: 'singhprincekumar269@gmail.com',
  phone: '+91 79038 92826',
  resume: '/Prince_Singh_Resume.pdf',
  links: {
    github: 'https://github.com/Jarvis-del',
    linkedin: 'https://www.linkedin.com/in/prince-singh-530a392b5',
    leetcode: 'https://leetcode.com/u/Ultron17',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'activity', label: 'Activity' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],
}

export const about = {
  text: 'I’m a Computer Science student who builds and ships production-grade web applications end to end. I work with React on the frontend and Node.js with Express on the backend, using MongoDB and MySQL for data. I care about REST API design, JWT authentication, automated tests and CI/CD, and I enjoy working in Agile teams that deliver clean, maintainable software.',
  stats: [
    { value: 600, suffix: '+', label: 'LeetCode problems solved' },
    { value: 200, suffix: '+', label: 'Automated tests in one project' },
    { value: 94.65, label: 'JEE Mains 2023 percentile' },
    { value: 2, label: 'Full-stack apps shipped' },
  ],
}

export const skills = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT authentication'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'ACID transactions'] },
  { title: 'Tools & platforms', items: ['Git', 'GitHub', 'VS Code', 'Vitest', 'GitHub Actions', 'Azure'] },
  { title: 'Core concepts', items: ['DSA', 'OOP', 'DBMS', 'Agile', 'Scrum', 'LLM integration'] },
]

export const projects = [
  {
    name: 'Momentum – AI-powered habit tracker',
    role: 'Full Stack Developer',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini API'],
    points: [
      'Built a MERN app with five Gemini AI features: morning motivation, habit suggestions, streak-recovery coach, weekly report and a chatbot grounded in the user’s own habit data.',
      'Made the AI layer fault-tolerant with retries, exponential backoff, multi-model fallback and response caching.',
      'Secured the API with JWT access tokens, rotating httpOnly refresh tokens, bcrypt, Helmet, CSRF checks, rate limiting and NoSQL-injection protection.',
      'Wrote 200+ tests (Vitest, Supertest, React Testing Library) at about 95% backend coverage, with CI/CD on GitHub Actions.',
    ],
    url: profile.links.github,
  },
  {
    name: 'Relay Chat – real-time messaging app',
    role: 'Full-Stack Developer',
    stack: ['MERN', 'Socket.io', 'JWT', 'Cloudinary', 'Resend', 'Arcjet'],
    points: [
      'Architected a real-time messaging app with JWT auth and Socket.io for low-latency, two-way communication.',
      'Built group chats with admin-controlled membership and room-based routing so only authorized users get each message.',
      'Added emoji reactions, reply/quote messaging, in-browser voice messages and a live online/last-seen presence system.',
      'Integrated Cloudinary for media, Resend for email and Arcjet for rate limiting, then deployed it as one production-ready service.',
    ],
    url: profile.links.github,
  },
]

const GH = 'https://github.com/Jarvis-del/'

// Snapshot taken October 21, 2026. Replace via the `activityUpdated` action to wire up live data.
export const activity = {
  snapshotDate: 'October 21, 2026',
  leetcode: {
    stats: [
      { value: 600, suffix: '+', label: 'problems solved' },
      { value: 6, label: 'badges earned' },
      { value: 2, label: '100-day badges' },
    ],
    topics: [
      ['Array', 371], ['String', 125], ['Hash Table', 109], ['Sorting', 107],
      ['Math', 102], ['Binary Search', 80], ['Dynamic Programming', 79],
    ],
  },
  github: {
    stats: [
      { value: 15, label: 'public repos' },
      { value: 2, label: 'followers' },
      { value: 4, label: 'featured repos' },
    ],
    repos: [
      { name: 'Momentum', description: 'Current project: AI-powered habit tracker with five Gemini AI features.', language: 'MERN', url: profile.links.github },
      { name: 'Relay Chat', description: 'Current project: real-time messaging app built on Socket.io.', language: 'MERN', url: profile.links.github },
      { name: 'React_Projects', description: 'A collection of my React projects.', language: 'JavaScript', url: GH + 'React_Projects' },
      { name: 'SQL_Projects', description: 'Joins, aggregations and real-world SQL practice.', language: 'T-SQL', url: GH + 'SQL_Projects' },
    ],
  },
}

export const education = {
  schools: [
    { name: 'G.L. Bajaj Institute of Technology & Management', detail: 'B.Tech in Computer Science & Engineering, Greater Noida', period: '2023 – 2027' },
    { name: 'Kamla Rai College, Gopalganj', detail: 'Senior Secondary (12th)' },
    { name: 'D.A.V Public School, Thawe, Gopalganj', detail: 'Higher Secondary (10th)' },
  ],
  certifications: [
    { name: 'Databases & SQL for Data Science with Python', issuer: 'IBM (Coursera) · Aug 2025' },
    { name: 'SQL for Data Science Specialization', issuer: 'UC Davis (Coursera) · Aug 2025' },
    { name: 'Design Prompts for Everyday Work Tasks', issuer: 'Google (Coursera) · Sep 2025' },
  ],
  achievements: 'Solved 600+ problems on LeetCode across arrays, trees, graphs and dynamic programming. Scored 94.65 percentile in JEE Mains 2023.',
}
