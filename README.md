# Manali Jain — Architectural Portfolio

A professional architectural portfolio website showcasing landscape architecture, urban design, and spatial planning work.

## 🏛️ Overview

This is a personal portfolio website for Manali Jain, an Architect and Landscape Architect based in Munich, Germany. The site is designed to feel like a competition-ready architectural portfolio—calm, confident, visual, and professional.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **Animations:** Framer Motion
- **Rendering:** Static Site Generation (SSG)
- **Hosting:** Vercel-ready

## 📂 Project Structure

```
/src
 ├─ app/                      # Next.js App Router pages
 │   ├─ page.tsx              # Home
 │   ├─ portfolio/            # Visual project grid
 │   ├─ case-studies/[slug]/  # Detailed project pages
 │   └─ experience/           # CV / Experience
 ├─ components/
 │   ├─ ui/                   # Button, Text, Tag, Container
 │   ├─ layout/               # Header, Footer
 │   ├─ media/                # ImageGrid, Lightbox
 │   ├─ project/              # ProjectHeader, ProjectCard
 │   └─ sections/             # Hero, Timeline, Education
 ├─ content/                  # All content as TypeScript
 │   ├─ projects/             # Architectural projects
 │   ├─ experience.ts         # Work experience
 │   ├─ education.ts          # Education & skills
 │   └─ profile.ts            # Profile info
 ├─ design-system/
 │   ├─ tokens/               # colors, spacing, typography
 │   └─ themes/               # CSS variables
 ├─ lib/                      # Utility functions
 ├─ config/                   # Site configuration
 └─ types/                    # TypeScript types
```

## 🎨 Design System

The design system follows architectural portfolio conventions:

- **Colors:** Neutral grayscale base with a single muted terracotta accent
- **Typography:** Cormorant Garamond (display) + Inter (body)
- **Spacing:** Generous whitespace for visual hierarchy
- **Animations:** Subtle, professional motion via Framer Motion

## 📄 Pages

### Home
- Hero section with name, title, and bio
- Featured projects grid
- Professional profile summary

### Portfolio
- Full project grid with typology filtering
- Visual-first design with large imagery

### Case Studies
- Dynamic pages for each project
- Project header with metadata
- Image gallery with lightbox
- Tools and scope information

### Experience
- Timeline-based CV
- Education section
- Skills & tools
- Achievements & awards

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📦 Adding New Projects

1. Create a new file in `src/content/projects/`:

```typescript
import type { Project } from '@/types'

export const myNewProject: Project = {
  slug: 'my-new-project',
  title: 'Project Title',
  location: 'City, Country',
  year: 2024,
  typology: 'Urban Design',
  role: 'Lead Designer',
  firm: 'Studio Name',
  scope: ['Masterplan', 'Public Space'],
  tools: ['AutoCAD', 'Lumion'],
  description: 'Project description...',
  featured: true,
  heroImage: '/images/projects/my-project/hero.jpg',
  images: [
    { src: '/images/projects/my-project/01.jpg', caption: 'Image caption' },
  ],
}
```

2. Export from `src/content/projects/index.ts`

3. Add images to `public/images/projects/my-project/`

## 🖼️ Images

Place project images in the `public/images/projects/` directory. The site includes graceful fallbacks for missing images.

## 🌐 Deployment

The site is configured for static export and is Vercel-ready:

```bash
npm run build
```

This generates a static `out/` directory that can be deployed to any static hosting service.

## 📝 License

© Manali Jain. All rights reserved.
