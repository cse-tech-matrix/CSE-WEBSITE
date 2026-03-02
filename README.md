# Tech Matrix - CSE Association Website

> The official website of the **Computer Science & Engineering Students Association** at **Nandha Engineering College**, Erode. A futuristic, immersive web experience that represents innovation, coding culture, and tech leadership.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion 11 |
| **Icons** | Lucide React |
| **Utilities** | clsx, tailwind-merge |
| **Deployment** | Vercel / Netlify / Render |

### Design System

- **Theme**: Dark futuristic with gradient accents
- **Effects**: Glassmorphism, particle fields, floating shapes, neon glows
- **Typography**: Inter (body) + JetBrains Mono (code/accents)
- **Colors**: Indigo primary (#6366f1), Purple accent (#a855f7), Cyan (#06b6d4), Pink (#ec4899)

---

## Folder Structure

```
CSE-WEBSITE/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout (fonts, metadata, globals)
│   ├── loading.tsx              # Loading screen animation
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About the association
│   ├── team/page.tsx            # Team members showcase
│   ├── events/page.tsx          # Events timeline with filters
│   ├── gallery/page.tsx         # Animated image gallery + lightbox
│   ├── achievements/page.tsx    # Milestones and growth timeline
│   ├── contact/page.tsx         # Contact form, grievance, map
│   ├── admin/page.tsx           # Admin dashboard (CRUD)
│   └── globals.css              # Global styles + Tailwind layers
│
├── components/                   # Reusable components
│   ├── layout/                  # Structural components
│   │   ├── Navbar.tsx           # Animated navbar with active state
│   │   ├── Footer.tsx           # Footer with links and socials
│   │   └── PageTransition.tsx   # Framer Motion page transitions
│   ├── ui/                      # UI primitives
│   │   ├── GlassCard.tsx        # Glassmorphism card component
│   │   ├── NeonButton.tsx       # Gradient/outline button variants
│   │   ├── AnimatedCounter.tsx  # Scroll-triggered number counter
│   │   ├── SectionHeading.tsx   # Gradient section title
│   │   └── MemberCard.tsx       # Team member card
│   ├── home/                    # Home page sections
│   │   ├── HeroSection.tsx      # Matrix text + particles hero
│   │   ├── AboutPreview.tsx     # Feature cards section
│   │   ├── StatsSection.tsx     # Animated counters
│   │   ├── EventsPreview.tsx    # Featured events cards
│   │   └── CTASection.tsx       # Call-to-action block
│   └── effects/                 # Visual effects
│       ├── ParticleField.tsx    # Canvas particle network
│       ├── FloatingShapes.tsx   # Gradient orbs + dashed circles
│       └── GradientOrb.tsx      # Animated gradient blob
│
├── data/                         # Static data (team, events, contact)
│   ├── team.ts                  # All team member data
│   ├── events.ts                # Event history and categories
│   └── contact.ts               # Contact info and social links
│
├── lib/                          # Utilities
│   └── utils.ts                 # cn() class merge helper
│
├── hooks/                        # Custom React hooks (extensible)
│
├── public/                       # Static assets
│   ├── core/                    # Core member photos
│   ├── office/                  # Executive member photos
│   ├── Office bearers/          # Office bearer photos
│   ├── allmem/                   # Group photos
│   └── lovable-uploads/         # Event images and misc
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind theme + custom animations
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS plugins
├── package.json                 # Dependencies and scripts
├── .env.example                 # Environment variable template
└── .gitignore                   # Git ignore rules
```

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero with matrix effect, features, stats counters, featured events, CTA |
| **About** | `/about` | Association overview, vision/mission, what drives us |
| **Team** | `/team` | HOD, incharge, office bearers, executives, core members, group photos |
| **Events** | `/events` | Filterable timeline of all events with drive links |
| **Gallery** | `/gallery` | Animated grid with lightbox and category filters |
| **Achievements** | `/achievements` | Milestones, stats, growth timeline |
| **Contact** | `/contact` | Contact form, grievance system, coordinators, map |
| **Admin** | `/admin` | Dashboard to manage events and members (client-side CRUD) |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ installed ([install with nvm](https://github.com/nvm-sh/nvm))
- **npm** or **yarn** package manager

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/cse-association-website.git
cd cse-association-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

The site will be available at **http://localhost:3000**.

### Build for Production

```bash
npm run build
npm start
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL | No |
| `MONGODB_URI` | MongoDB connection string (future) | No |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | No |

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Add environment variables in Vercel dashboard

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) and import repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy

### Render

1. Create a new **Web Service** on [render.com](https://render.com)
2. Connect your repository
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`

---

## Key Features

- **Matrix Text Effect** — Scrambling letter reveal on the hero section
- **Particle Network** — Canvas-based connected particle background
- **Glassmorphism** — Frosted glass cards with backdrop blur
- **Animated Counters** — Scroll-triggered number animations
- **Timeline Events** — Alternating timeline with year badges and filters
- **Lightbox Gallery** — Click-to-expand image gallery with overlays
- **Active Nav Indicator** — Spring-animated active route highlight
- **Page Transitions** — Smooth enter/exit animations between pages
- **Responsive Design** — Mobile-first approach, works on all devices
- **SEO Optimized** — Proper metadata, semantic HTML, Open Graph tags
- **Admin Dashboard** — Client-side CRUD interface for events and members

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Guidelines

- Follow the existing component structure and naming conventions
- Use TypeScript for all new files
- Keep components modular and reusable
- Test responsiveness on mobile, tablet, and desktop
- Ensure animations are smooth and don't affect performance

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Nandha Engineering College** — For supporting the CSE department's initiatives
- **CSE Association Team** — The brilliant minds who make this happen
- **Open Source Community** — For the amazing tools that power this project

---

<p align="center">
  <strong>Tech Matrix</strong> — Where Innovation Meets Code<br/>
  Department of Computer Science & Engineering<br/>
  Nandha Engineering College, Erode
</p>
