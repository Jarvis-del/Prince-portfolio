# Prince Singh – Portfolio

React 18 + Redux Toolkit + Tailwind CSS, bundled with Vite.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Structure

```
src/
  app/store.js                  Redux store
  features/portfolio/           content slice + selectors
  features/ui/                  UI slice (active nav section)
  data/portfolio.js             all copy and links – edit here
  components/layout/            Header (scroll-spy), Footer
  components/sections/          Hero, About, Skills, Projects, Activity, Education, Contact
  components/ui/                Card, Section, Stat, CountUp, Icon
  hooks/                        useInView, useTyper
  assets/photo.webp             background-removed portrait
```

Deploy `dist/` to Netlify, Vercel or GitHub Pages.
