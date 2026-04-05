/**
 * Portfolio content — update projects or links here as you ship more work.
 */

export const resumePdfPath = '/daud-khalil-resume.pdf' 

export const profile = {
  name: 'Daud Khalil',
  title: 'Frontend Developer',
  tagline:
    'I am a Frontend Developer specializing in React — building responsive, accessible interfaces with clean UI and solid engineering practices.',
  bio: `I'm a frontend web developer from Bahawalpur, Pakistan, pursuing a Bachelors in Computer Science at Islamia University of Bahawalpur (2023–2027). I turn ideas into polished web apps with React, modern CSS, and JavaScript. I care about accessibility, performance, and mobile-first design.`,
  email: 'daudkhalil101@gmail.com',
  phone: '+92 327 6058089',
  phoneTel: 'tel:+923276058089',
  location: 'Bahawalpur, Pakistan',
}

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/Dauddev07' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/daud-khalil-558913308/' },
]

/** Grouped for the Skills section UI */
export const skillCategories = [
  {
    id: 'core',
    title: 'Languages & markup',
    blurb: 'Structure, style, and interactivity in the browser.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'ui',
    title: 'Frameworks & UI',
    blurb: 'Component-driven interfaces and layout systems.',
    skills: ['React.js', 'Vite', 'React Router', 'Bootstrap'],
  },
  {
    id: 'delivery',
    title: 'Workflow & quality',
    blurb: 'Responsive builds, version control, and polish.',
    skills: ['Responsive design', 'Git', 'Zustand'],
  },
]

/** Shown on the home page (first N items) */
export const homeFeaturedProjectCount = 3

/**
 * All projects — first `homeFeaturedProjectCount` appear on the home page.
 * Order: featured first, then additional portfolio pieces.
 */
export const allProjects = [
  {
    id: 'invoice',
    name: 'Invoice Studio',
    description:
      'Production-style invoice generator: live preview, templates, line items with drag-and-drop, tax/discounts, PDF/PNG export, and local persistence — no backend required.',
    extendedDescription:
      'Built with React 19 and Vite. Includes Zustand + localStorage, multiple invoice templates, currency formatting, theme switching, and keyboard shortcuts.',
    tags: ['React', 'Vite', 'Zustand', 'PDF export'],
    liveUrl: 'https://invoice-generator-app-rouge.vercel.app/',
    repoUrl: 'https://github.com/Dauddev07/Invoice-Generator',
  },
  {
    id: 'medflow',
    name: 'MedFlow — Clinic management',
    description:
      'Portfolio-ready clinic dashboard: patients, appointments with doctor availability, prescriptions, dark mode, and local persistence — mock data, no API.',
    extendedDescription:
      'React + Vite + React Router + Zustand. Features booking rules, calendar/list views, simulated login, and CSS Modules.',
    tags: ['React', 'React Router', 'Zustand', 'CSS Modules'],
    liveUrl: 'https://medflow-doctors-appointment-app.vercel.app/',
    repoUrl: 'https://github.com/Dauddev07/Doctors-Clinic-App',
  },
  {
    id: 'admin',
    name: 'Nexus admin dashboard',
    description:
      'Responsive admin UI with charts, data tables, theme toggle, toasts, and a mock login flow — no backend.',
    extendedDescription:
      'React + Vite + Recharts + TanStack Table patterns. Dark/light theme, accessible controls, and modular layout.',
    tags: ['React', 'Vite', 'Charts', 'Tables'],
    liveUrl: 'https://nexus-admin-dashboard-nu.vercel.app/',
    repoUrl: 'https://github.com/Dauddev07/Nexus-Admin-Dashboard',
  },
  {
    id: 'coffee',
    name: 'BeanCraft Coffee Shop',
    description:
      'Frontend for a coffee shop experience—menus, branding, and an interactive UI. Deployed on Vercel.',
    extendedDescription:
      'React SPA focused on layout, typography, and component structure with a warm brand feel.',
    tags: ['React', 'JavaScript', 'UI'],
    liveUrl: 'https://bean-craft-coffee-shop-frontend.vercel.app/',
    repoUrl: 'https://github.com/Dauddev07/BeanCraft-CoffeeShop-Frontend',
  },
  {
    id: 'fitness',
    name: '333 Fitness Gym',
    description:
      'Bold gym landing page with classes, trainers, plans, BMI tool, and strong visual hierarchy—built for engagement on all devices.',
    extendedDescription:
      'Static site with semantic HTML, responsive CSS, and lightweight JavaScript for interactions.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://dauddev07.github.io/333-Fitness-Gym/',
    repoUrl: 'https://github.com/Dauddev07/333-Fitness-Gym',
  },
  {
    id: 'attendance',
    name: 'Attendance Manager',
    description:
      'Client-side tool for organizing attendance records without a server.',
    extendedDescription:
      'HTML, CSS, and JavaScript with local storage patterns for classroom-style tracking.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://dauddev07.github.io/Attendance-Manager/',
    repoUrl: 'https://github.com/Dauddev07/Attendance-Manager',
  },
  {
    id: 'portfolio',
    name: 'Personal portfolio',
    description:
      'This site — React, Vite, and a data-driven layout with projects, services, and CV.',
    extendedDescription:
      'React Router, shared layout, scroll-triggered section reveals, and deployable on Vercel.',
    tags: ['React', 'Vite', 'React Router'],
    liveUrl: '',
    repoUrl: 'https://github.com/Dauddev07/MyPortfolio',
  },
]

export const servicesContent = {
  headline: 'Request services',
  intro:
    'I build fast, responsive web experiences for individuals, small teams, and coursework-style products. If you need a landing page, a React SPA, UI polish, or help turning a design into production-ready code, I’d like to hear from you.',
  offerings: [
    'Landing pages and marketing sites',
    'React / Vite single-page applications',
    'Dashboard-style UIs and forms',
    'Responsive layout and accessibility improvements',
    'Integration-ready frontends (ready to connect to your API later)',
  ],
  closing:
    'Share your timeline, budget range, and links or sketches. I’ll reply with next steps.',
}

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Personal & academic projects',
    period: '2023 — Present',
    detail:
      'Shipping responsive sites and SPAs with React and Vite — focusing on clear UX, reusable components, and deployable demos.',
  },
]

/** Order as after education swap (before later revert): degree-focused list */
export const education = [
  {
    school: 'Islamia University of Bahawalpur',
    degree: 'Bachelors — Computer Science',
    period: '2023 — 2027',
  },
  {
    school: 'APS Noor Mahal Campus, Bahawalpur',
    degree: 'Intermediate',
    period: '2021 — 2023',
  },
  {
    school: 'APS Noor Mahal Campus, Bahawalpur',
    degree: 'Matric',
    period: '2019 — 2021',
  },
]
