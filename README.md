# Heorhi Lukyanau - Portfolio Website

A modern, minimalist portfolio and blog built with Astro JS, featuring signal yellow accents and a clean design.

## Features

- **Modern Minimalist Design**: Clean layouts with generous whitespace and signal yellow (#FFDD00) accent color
- **Dark/Light Mode**: Seamless theme switching with localStorage persistence
- **Blog System**: Markdown/MDX support with syntax highlighting for technical articles
- **Interactive Skills Visualization**: Chart.js powered skills display with years of experience
- **Contact Form**: Integrated contact form with email functionality
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **SEO Optimized**: Meta tags, sitemap, and semantic HTML
- **Fast Performance**: Static site generation with Astro for optimal loading speeds

## Tech Stack

- **Framework**: Astro 5.15.1
- **Language**: TypeScript (strict mode)
- **Styling**: CSS with custom properties for theming
- **Content**: MDX for blog posts with content collections
- **Charts**: Chart.js for interactive data visualization
- **Build Tool**: Vite (via Astro)
- **Package Manager**: pnpm

## Project Structure

```
heorhi-portfolio/
├── public/
│   └── Heorhi_backend_engineer.pdf    # Resume PDF
├── src/
│   ├── components/                     # Reusable components (future)
│   ├── content/
│   │   ├── blog/                      # Blog posts (MDX)
│   │   └── config.ts                  # Content collections config
│   ├── layouts/
│   │   └── Layout.astro               # Main layout with nav & footer
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...slug].astro        # Blog post template
│   │   │   └── index.astro            # Blog listing
│   │   ├── about.astro                # About page
│   │   ├── contact.astro              # Contact page
│   │   ├── index.astro                # Home page
│   │   ├── projects.astro             # Projects showcase
│   │   └── skills.astro               # Skills with chart
│   └── styles/
│       └── global.css                 # Global styles & theme
├── astro.config.mjs                   # Astro configuration
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development

The development server runs at `http://localhost:4321` with hot module replacement.

## Pages

- **Home** (`/`): Hero section, focus areas, featured blog posts, and CTA
- **About** (`/about`): Career timeline, work experience, focus areas, and interests
- **Skills** (`/skills`): Main skills, interactive chart, and technology stack breakdown
- **Projects** (`/projects`): Portfolio of projects with tech stacks
- **Blog** (`/blog`): Technical articles with tag filtering
- **Contact** (`/contact`): Contact information, form, and resume download

## Blog Posts

Blog posts are written in MDX format and stored in `src/content/blog/`. Each post includes:

- Title, description, and publication date
- Optional tags for categorization
- Draft status flag
- Full markdown/MDX support with syntax highlighting

### Adding a New Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2024-10-25
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

## Customization

### Colors

Edit CSS custom properties in `src/styles/global.css`:

```css
:root {
  --color-yellow: #ffdd00;
  --color-yellow-dark: #e6c700;
  /* ... other colors */
}
```

### Content

- Update personal information in page files
- Replace placeholder projects in `src/pages/projects.astro`
- Add your own blog posts in `src/content/blog/`
- Update resume PDF in `public/`

## Deployment

The site is built as static HTML and can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated builds
- **Cloudflare Pages**: Connect repository for edge deployment

Build command: `pnpm build`  
Output directory: `dist`

## Performance

- Static site generation for instant page loads
- Optimized assets and code splitting
- Minimal JavaScript (only for interactivity)
- Responsive images and lazy loading
- Efficient CSS with no framework overhead

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Personal portfolio project - feel free to use as inspiration for your own portfolio!

## Contact

- Email: dissfall@icloud.com
- Email (preferred): heorhi@lukyanau.me
- LinkedIn: [heorhi-lukyanau](https://www.linkedin.com/in/heorhi-lukyanau/)

