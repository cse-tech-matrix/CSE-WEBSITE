# Tech Matrix — CSE Association Website

**Live:** [cse-association.netlify.app](https://cse-association.netlify.app/)

Official website of the **Computer Science & Engineering Students Association**, Nandha Engineering College, Erode.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + **Framer Motion**
- **Fonts**: Space Grotesk (body), Orbitron (headings), JetBrains Mono (code)
- **Deploy**: Netlify

## Getting Started

```bash
git clone https://github.com/cse-tech-matrix/CSE-WEBSITE.git
cd CSE-WEBSITE
npm install
cp .env.example .env.local
npm run dev
```

Open **http://localhost:3000**.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero with matrix text effect, stats, featured events |
| `/about` | About — vision, mission, what drives us |
| `/team` | Team — HOD, office bearers, executives, core members |
| `/events` | Events — filterable timeline with drive links |
| `/contact` | Contact — form, coordinators info |
| `/grievance` | Grievance Redressal |
| `/developers` | Developer credits |
| `/admin` | Admin dashboard (client-side) |

## Deployment (Netlify)

1. Push to GitHub
2. Import repo on [app.netlify.com](https://app.netlify.com)
3. Build settings auto-detected from `netlify.toml` — click Deploy

## License

MIT
