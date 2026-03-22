# Portfolio App

A single-page portfolio site built with **React** and **Vite**. It highlights projects with live links, skills, education, and contact details. Content is driven by a small data file so you can update copy and links without touching layout code.

## Tech stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- ESLint (React Hooks + Refresh plugins)

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Production build

```bash
npm run build
```

Output is written to `dist/`.

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Customizing your content

Most personal information lives in **`src/data/portfolio.js`**:

| Export | Purpose |
|--------|---------|
| `profile` | Name, title, tagline, bio, email, phone, location |
| `socialLinks` | GitHub, LinkedIn, etc. |
| `skillCategories` | Grouped skills (title, blurb, list of skills) |
| `projects` | Name, description, tags, `liveUrl`, optional `repoUrl` |
| `experience` | Focus / work-style timeline entries |
| `education` | School, degree, years |

- Use an empty string for `liveUrl` or `repoUrl` to hide that button on a project card.
- **Profile photo:** imported in `src/App.jsx` from `src/assets/Images/MyPhoto.jpeg` (replace the file to change the picture).

**Site title:** edit `<title>` in `index.html` if you change your name or branding.

## Deploying on Vercel

The repo includes **`vercel.json`** with:

- `npm run build` as the build command  
- `dist` as the output directory  
- SPA-style rewrites so client routes resolve to `index.html`

Connect the GitHub repository in the [Vercel dashboard](https://vercel.com/) or deploy with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npx vercel
```

## Project structure

```
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/Images/   # Profile image (MyPhoto.jpeg)
│   ├── data/
│   │   └── portfolio.js # All editable copy & links
│   ├── App.jsx          # Page layout & sections
│   ├── App.css          # Section & component styles
│   ├── index.css        # Theme variables (dark, high contrast)
│   └── main.jsx         # App entry
├── index.html
├── vite.config.js
└── vercel.json
```

## License

Personal portfolio—rights reserved by the site owner.
