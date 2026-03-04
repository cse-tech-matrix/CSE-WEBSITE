# Tech Matrix — CSE Association Website

**Live:** [cse-association.netlify.app](https://cse-association.netlify.app/)

Official website of the **Department of Computer Science & Engineering Students Association**, Nandha Engineering College, Erode.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + **Framer Motion**
- **Fonts**: Space Grotesk (body), Orbitron (headings), JetBrains Mono (code)
- **Deploy**: Netlify

## Features

- Matrix rain background effect across all pages
- Animated splash screen with scramble text
- Glass-morphism UI with neon glow effects
- Team page organized by domain categories (R&D, Technical, Event Management, etc.)
- Responsive design optimized for mobile and desktop
- Optimized images and throttled animations for smooth performance

## Getting Started

```bash
git clone https://github.com/cse-tech-matrix/CSE-WEBSITE.git
cd CSE-WEBSITE
npm install
npm run dev
```

Open **http://localhost:3000**.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero with matrix text effect, stats, highlights |
| `/about` | About — vision, mission, what we offer |
| `/team` | Team — HOD, incharges, office bearers, members by category |
| `/events` | Events — filterable timeline with drive links |
| `/contact` | Contact — coordinators info, map, socials |
| `/grievance` | Grievance Redressal — form submission |
| `/developers` | Developer credits |
| `/admin` | Admin dashboard (client-side) |

## Project Structure

```
app/                  # Next.js App Router pages
components/
  effects/            # MatrixRain, FloatingShapes, GradientOrb
  home/               # HeroSection, StatsSection, CTASection, etc.
  layout/             # Navbar, Footer, SplashScreen, PageTransition
  ui/                 # Reusable UI components
data/                 # Team, events, contact data files
public/               # Static assets (images, logos)
```

## Deployment (Netlify)

1. Push to GitHub
2. Import repo on [app.netlify.com](https://app.netlify.com)
3. Build settings auto-detected from `netlify.toml` — click Deploy

## Developers

- Mr. G. Mohana Prasath — Engineering Lead
- Mr. S. R. Chanthuru — Interface Engineer
- Mr. M. Dhilip — Principal Designer
- Mr. R. Rupanarayanan — Information Architect
- Mr. K. Rumesh Kumaran — Quality Strategist

## License

MIT
