# Roofero - Premium Company Profile Showcase

This repository showcases a high-fidelity, custom-built marketing platform for Roofero, a premium roofing and solar services agency. The project demonstrates professional web design, frontend engineering, and search engine optimization (SEO) capabilities, designed to attract and convert high-value clients.

## Project Context

Roofero is a premium trade services company specializing in roofing craftsmanship and solar power integration. The website built for them establishes immediate online credibility, communicates their craftsmanship, and captures leads through a structured, user-focused interface.

I built this website to demonstrate how modern web technologies can be combined to deliver fast, visually polished, and highly functional company profiles that drive business growth.

## Core Features Implemented

### User Experience & Interface

- Custom Branding: A modern, high-contrast dark slate foundation with energetic lime highlights designed to direct user attention to primary conversion points.
- Smooth Motion System: Integrated GSAP (GreenSock) animations and Lenis smooth scroll to create a polished, interactive browsing experience.
- Scoping & Estimate Request: An interactive estimate form built in React that allows prospective clients to outline their project needs.
- Portfolio Showcase: A dynamic project case study template showcasing completed work, including structural roofing upgrades and solar installations.
- Transparent Pricing Layout: Clear service tiers and maintenance plans designed to simplify decision-making.

### Technical Capabilities

- Static Site Generation: Engineered with Astro for optimal page loading speeds, near-instantaneous transitions, and reduced hosting overhead.
- Component-Driven Architecture: Built reusable, type-safe components in React and Astro, enabling quick customization and long-term codebase maintenance.
- State Management: Implemented Zustand for lightweight client-side state handling to manage user sessions and theme selections.
- Accessible UI Primitives: Constructed interactive fields, dialogs, and navigation nodes utilizing Radix UI primitives to ensure high accessibility standards.
- Responsive Scaffolding: Structured layout grids using Tailwind CSS to adapt dynamically across mobile, tablet, and wide desktop screens.

### Performance & SEO Engineering

- Performance Optimization: Built with Astro to compile pages into clean, static HTML, resulting in fast load times and minimal JavaScript overhead.
- Search Engine Optimization: Custom meta tags, descriptive title structures, semantic HTML5 tags, a custom sitemap, and robots.txt configuration.

## Technical Stack

- **Framework**: Astro (Static Site Generation)
- **Frontend Library**: React (used for interactive scoping forms and components)
- **Styling**: Tailwind CSS (utility-first styling)
- **Animations**: GSAP (ScrollTrigger)
- **Scroll Experience**: Lenis (smooth scrolling)
- **UI Primitives**: Radix UI (accessible component base)
- **Language**: TypeScript (for code reliability and type safety)

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:4321` in your browser.

### Build and Deployment

To compile a fully optimized static bundle:

```bash
npm run build
```

The output files are generated in the `dist` directory and are ready for deployment to any static hosting provider.
