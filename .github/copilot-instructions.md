# Project Overview

This is a React + Vite project for a hackathon landing page. It uses TypeScript, Tailwind CSS, and React Router DOM. The application is structured with a main landing page and separate pages for "Code of Conduct" and "Terms of Event".

# Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM

# Key Files

- `vite.config.ts`: Vite configuration, including the Tailwind CSS plugin.
- `tailwind.config.js`: Tailwind CSS configuration.
- `src/main.tsx`: The main entry point of the application, where the router is configured.
- `src/App.tsx`: The main component for the landing page, which is composed of multiple smaller components.
- `src/components/`: This directory contains all the React components used in the application.
- `src/pages/`: This directory contains the top-level page components like `CodeOfConduct.tsx` and `TermsOfEvent.tsx`.
- `src/shared/`: This directory contains reusable components that are shared across different features or pages.
- `src/components/MainLayout.tsx`: A key component that defines the overall layout (Header and Footer) for all pages.
- `package.json`: Project dependencies and scripts.

# Developer Workflow

- To run the development server: `npm run dev`
- To build for production: `npm run build`
- To lint the code: `npm run lint`

# Styling

The project uses Tailwind CSS for styling. All styles are applied directly in the JSX using `className`. There are also some inline styles for background images and fonts.

Example:

```tsx
<div className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden" style={{ fontFamily: "'Space Grotesk', 'Noto Sans', sans-serif" }}>
```

# Component Structure

The application follows a component-based architecture. The `App` component in `src/App.tsx` serves as the container for the main landing page, which is built by composing smaller, single-purpose components from the `src/components/` directory.

The overall page structure is defined in the `MainLayout.tsx` component, which includes the `Header` and `Footer`. This layout is used by the main `App.tsx` and all other pages in the `src/pages/` directory to ensure a consistent look and feel.

Reusable components that can be used in multiple places are located in the `src/shared/components/` directory.

# Routing

Routing is handled by `react-router-dom`. The routes are defined in `src/main.tsx`. The application has the following routes:

- `/`: The main landing page.
- `/code-of-conduct`: The Code of Conduct page.
- `/terms-of-event`: The Terms of Event page.
