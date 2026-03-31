/**
 * Portfolio content — update projects or links here as you ship more work.
 */

export const profile = {
  name: 'Daud Khalil',
  title: 'Frontend & MERN Developer',
  tagline:
    'I am a Frontend Developer specializing in React, with experience in full-stack development using the MERN stack (MongoDB, Express, React, Node.js).',
  bio: `I am a Frontend Developer specializing in React, with experience in full-stack development using the MERN stack (MongoDB, Express, React, Node.js). I'm from Bahawalpur, Pakistan, pursuing a Bachelors in Computer Science at Islamia University of Bahawalpur (2023–2027). I enjoy turning ideas into polished interfaces: semantic HTML, modern CSS, JavaScript, React.js, and Bootstrap when it speeds things up. I'm always leveling up on accessibility, performance, and mobile-first design.`,
  email: 'daudkhalil101@gmail.com',
  phone: '+92 327 6058089',
  phoneTel: 'tel:+923276058089',
  location: 'Bahawalpur, Pakistan',
}

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/Dauddev07' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/daud-khalil-558913308/' },
]

/** Grouped for the Skills section UI — edit titles or lists anytime */
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
    skills: ['React.js', 'Bootstrap'],
  },
  {
    id: 'mern',
    title: 'Backend & database',
    blurb: 'API development, data modeling, and authentication flows.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
  },
  {
    id: 'delivery',
    title: 'Workflow & quality',
    blurb: 'Responsive builds, version control, and polish.',
    skills: ['Responsive design', 'Git'],
  },
]

export const projects = [
  {
    id: '1',
    name: 'BeanCraft Coffee Shop',
    description:
      'Frontend for a coffee shop experience—menus, branding, and an interactive UI. Deployed on Vercel.',
    tags: ['React', 'JavaScript', 'UI'],
    liveUrl: 'https://bean-craft-coffee-shop-frontend.vercel.app/',
    repoUrl: 'https://github.com/Dauddev07/BeanCraft-CoffeeShop-Frontend',
  },
  {
    id: '2',
    name: '333 Fitness Gym',
    description:
      'Bold gym landing page with classes, trainers, plans, BMI tool, and strong visual hierarchy—built for engagement on all devices.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://dauddev07.github.io/333-Fitness-Gym/',
    repoUrl: 'https://github.com/Dauddev07/333-Fitness-Gym',
  },
  {
    id: '3',
    name: 'Attendance Manager',
    description:
      'Smart classroom tracker: manage students, mark attendance by subject, and review history with a clear, usable interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://dauddev07.github.io/Attendance-Manager/',
    repoUrl: 'https://github.com/Dauddev07/Attendance-Manager',
  },
]

export const mernProjects = [
  {
    id: 'm1',
    name: 'BeanCraft (MERN Full-Stack)',
    description:
      'Full-stack coffee shop app with customer storefront, profile/orders, and admin dashboard. Includes auth, order lifecycle, reviews, and live status updates.',
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: 'https://beancraft-mern.vercel.app/',
    repoUrl: 'https://github.com/Dauddev07/beancraft-mern',
  },
]

export const experience = [
  {
    role: 'Frontend & MERN Developer',
    company: 'Personal & academic projects',
    period: '2023 — Present',
    detail:
      'Shipping responsive UIs with React and building full-stack MERN apps with Express APIs, MongoDB models, and practical auth/order flows.',
  },
]

export const education = [
  {
    school: 'APS Noor Mahal Campus, Bahawalpur',
    degree: 'Matric',
    period: '2019 — 2021',
  },
  {
    school: 'APS Noor Mahal Campus, Bahawalpur',
    degree: 'Intermediate',
    period: '2021 — 2023',
  },
  {
    school: 'Islamia University of Bahawalpur',
    degree: 'Bachelors — Computer Science',
    period: '2023 — 2027',
  },
]
