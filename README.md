# Apna Ashiana Jaipur — Home Page

Accessible home page for a real estate website, built with **React + Vite**.

The page contains a header with the brand and primary navigation, a listings
section with sample property cards, and a footer. It is built to be usable by
screen readers and keyboard-only users (WCAG 2.1 Level AA target).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually <http://localhost:5173>).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```text
real-estate-home-page/
├── index.html
├── vite.config.js
├── package.json
├── rfp.md               # RFP-style requirements document
├── test-cases.md        # Test cases mapped to the requirements
└── src/
    ├── main.jsx
    ├── App.jsx           # Routes: / (home), /listing/:id (detail)
    ├── styles.css
    ├── pages/
    │   ├── Home.jsx      # Hero, Listings, Agents, Testimonials
    │   └── ListingDetail.jsx
    ├── mocks/            # Mock data + mock API (swap for a real API later)
    │   ├── listings.js   # Mock listing data
    │   └── index.js      # fetchListings(), fetchSite(), etc. with simulated latency
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Listings.jsx
        ├── ListingCard.jsx
        ├── Agents.jsx
        ├── Testimonials.jsx
        └── Footer.jsx
```

## Routing

**React Router** (`react-router-dom` v7):

- `/` — home page (hero, listings, agents, testimonials)
- `/listing/:id` — property detail page ("View details" links here)
- Unknown paths fall back to home

`vite dev` and `vite preview` both fall back to `index.html`, so deep links like
`/listing/3` work directly.

## Mock data

Listings come from `src/mocks/listings.js` and are served through
`fetchListings()` in `src/mocks/index.js`, which adds a small delay so the UI
shows a loading state. To connect a real backend later, replace the body of
`fetchListings()` with a `fetch('/api/listings')` call — the components do not
need to change.

## Accessibility notes

- A "Skip to main content" link is the first focusable element.
- Landmarks are used: `header`, `nav`, `main`, `footer`, plus labelled sections.
- Heading levels start at `h1` and never skip a level.
- Every image has descriptive `alt` text.
- All interactive elements are real links/buttons and keyboard operable.
- Visible focus indicator and AA contrast colours.

## Open items (TBD)

- Property images use a placeholder service — replace with real assets.
- Exact brand colours and logo asset.
