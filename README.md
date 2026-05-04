# Portfolio Website

This is a personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, shadcn/ui, and Framer Motion. It is designed as a responsive single-page portfolio with sections for introduction, about, skills, projects, and contact information.

## Features

- Animated hero section with social links and a CV download button.
- Responsive navigation with a mobile menu.
- Dedicated sections for About, Skills, Projects, Contact, and Footer.
- React Router setup with a custom 404 page for GitHub Pages.
- Reusable UI components and utility-first styling.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router DOM
- React Query

## Getting Started

### Prerequisites

- Node.js 18 or newer
- Bun or npm

### Install Dependencies

```bash
bun install
```

If you prefer npm:

```bash
npm install
```

### Run Locally

```bash
bun dev
```

Or with npm:

```bash
npm run dev
```

## Available Scripts

```bash
bun dev        # Start the development server
bun build      # Build for production
bun preview    # Preview the production build locally
bun lint       # Run ESLint
bun test       # Run Vitest
bun deploy     # Publish the app to GitHub Pages
```

Equivalent npm commands are available through `npm run <script>`.

## Deployment

The project is configured for GitHub Pages. The Vite base path is set for the `Portfolio-Website` repository, and `public/404.html` supports client-side routing on refresh or direct navigation.

## Project Structure

```text
src/
	components/
		portfolio/   # Main portfolio sections
		ui/          # Reusable UI primitives
	pages/         # Route-level pages
	hooks/         # Custom hooks
	lib/           # Shared utilities
public/
	404.html       # GitHub Pages SPA fallback
	robots.txt     # Search engine crawler rules
```

## Customization

Common places to personalize the site:

- `src/components/portfolio/Hero.tsx` for your intro content and links.
- `src/components/portfolio/About.tsx` for your bio.
- `src/components/portfolio/Skills.tsx` for your technical stack.
- `src/components/portfolio/Projects.tsx` for featured work.
- `src/components/portfolio/Contact.tsx` for contact details.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
