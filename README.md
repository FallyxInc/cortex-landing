# Ascenix Website

AI-powered incident analysis platform for senior care operators. This website showcases Ascenix's capabilities in transforming raw incident data into actionable insights that reduce risk, injuries, and operational blind spots.

## Overview

Ascenix is an all-in-one analysis platform for data like falls, behaviors, hydration, and more. The platform allows for:
- **Saved Time**: No manual reporting - automated analysis frees staff to focus on care
- **Accurate Documentation**: More accurate documentation for compliance and regulatory requirements
- **Preventive Metrics**: Effective preventative metrics by merging all data together for actionable insights

## Website Structure

The website is built as a multi-page application with the following pages:

1. **Landing Page** (`/`) - Product-first page that answers "What is Ascenix, what problem does it solve, and why should I care?"
   - Hero section with value proposition
   - Problem in long-term care homes
   - What Ascenix does
   - Core product modules
   - Feature walkthrough
   - How it's different
   - Building trust (case studies)
   - CTA

2. **Product Page** (`/product`) - Deep dive into how the platform works
   - Platform overview (Data In → Analysis → Outputs)
   - Analysis engine capabilities
   - Expanded module details
   - Integrations (PointClickCare)
   - Security & data handling

3. **Use Cases Page** (`/use-cases`) - Real-world scenarios organized by role
   - Executive / Operator use cases
   - Clinical leadership use cases
   - Quality & risk teams use cases
   - Real-world examples

4. **Team Page** (`/team`) - Who's behind Ascenix and why you should trust them
   - Team member profiles
   - What we bring (domain experience, execution credibility)
   - Why we built this (the story)
   - Our vision

5. **Contact Page** (`/contact`) - Request a demo or get in touch
   - Contact information
   - Demo request form

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Multi-page routing
- **Tailwind CSS 4** - Styling
- **Custom Theme System** - Dynamic theming with context API

## Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### How to Work With It

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or the next available port)

2. **Make Changes**
   - Edit files in `src/` directory
   - Pages are in `src/pages/`
   - Components are in `src/components/`
   - Styles are in `src/index.css`
   - The app uses React Router for navigation

3. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory

4. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Test the production build locally before deploying

### Project Structure

```
src/
├── pages/              # Page components
│   ├── LandingPage.jsx
│   ├── ProductPage.jsx
│   ├── UseCasesPage.jsx
│   ├── TeamPage.jsx
│   └── ContactPage.jsx
├── components/         # Reusable components
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   └── ...
├── contexts/           # React contexts
│   └── ThemeContext.jsx
├── hooks/              # Custom hooks
│   └── useTheme.js
├── utils/              # Utility functions
│   └── colorUtils.js
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

### Key Features

- **Multi-page routing** with React Router
- **Responsive design** - Mobile-first approach
- **Theme system** - Customizable color scheme
- **Smooth animations** - Scroll-triggered animations
- **Intentional design** - Every element serves a purpose

## Deployment

After building, the `dist/` directory contains all static files ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).
