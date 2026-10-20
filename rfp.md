# Request for Proposal (RFP) — Real Estate Website Home Page

**Client / Organization:** Apna Ashiana Jaipur
**Prepared by:** OpenCode agent
**Date:** 2026-10-19
**Status:** Draft

## 1. Project Background & Overview

Apna Ashiana Jaipur is a real estate business serving the Jaipur market. It
needs a public-facing home page that introduces the brand, presents available
property listings, and provides clear navigation and contact information.

The home page must be easy to use for all visitors, including people who rely
on assistive technology. It must be **screen reader optimized** and meet
accessibility standards out of the box, without requiring remediation later.

The selected vendor/team will build the page as a React application and deliver
a working, tested, responsive implementation.

## 2. Objectives

- Provide a polished home page for Apna Ashiana Jaipur.
- Present a section showcasing property listings.
- Provide clear site-wide navigation and a footer with contact details.
- Deliver a page that is fully usable by screen reader and keyboard-only users.
- Ensure the layout works on mobile, tablet, and desktop.

## 3. Target Users / Stakeholders

- Prospective home buyers and renters in Jaipur.
- Property sellers and owners listing with Apna Ashiana Jaipur.
- Visitors who use screen readers or keyboard-only navigation.
- Apna Ashiana Jaipur (site owner/operator).

## 4. Scope

### 4.1 In Scope

- Header with the brand name "Apna Ashiana Jaipur" and primary navigation.
- Listings section displaying static sample property cards.
- Footer with contact information, useful links, and a copyright notice.
- Responsive layout for mobile, tablet, and desktop.
- Screen reader optimization and accessibility conformance.
- React implementation with supporting documentation and test cases.

### 4.2 Out of scope

- Backend, database, or API integration for listings.
- Authentication or user accounts.
- Form submission, lead capture, or contact forms.
- Search, filters, sorting, or pagination.
- CMS or admin dashboard.
- Deployment or hosting configuration.

## 5. Functional Requirements

| ID  | Requirement | Priority |
| --- | ----------- | -------- |
| FR-1 | The page has a header containing the brand name "Apna Ashiana Jaipur" and primary navigation. | Must |
| FR-2 | The header navigation exposes links: Home, Buy, Rent, Sell, Contact. | Must |
| FR-3 | The page has a listings section that displays static sample property cards. | Must |
| FR-4 | Each listing card shows: property image, title/name, price, location, bedrooms, bathrooms, area, and a "View details" control. | Must |
| FR-5 | The page has a footer containing contact information, useful links, and a copyright notice. | Must |
| FR-6 | The layout is responsive and usable on mobile, tablet, and desktop. | Must |
| FR-7 | The page is optimized for screen readers (see Section 7). | Must |

## 6. Non-Functional Requirements

| ID  | Requirement | Target |
| --- | ----------- | ------ |
| NFR-1 | Accessibility conformance | WCAG 2.1 Level AA |
| NFR-2 | Semantic landmarks present | `header`, `nav`, `main`, `footer` (and `section` for listings) |
| NFR-3 | Keyboard operability | All interactive elements reachable and operable via keyboard |
| NFR-4 | Image accessibility | Every content image has a descriptive `alt`; decorative images use empty `alt` and `aria-hidden` |
| NFR-5 | Text contrast | At least 4.5:1 for normal text, 3:1 for large text |
| NFR-6 | Focus visibility | Visible focus indicator on all focusable elements |
| NFR-7 | Responsive breakpoints | Mobile, tablet, desktop layouts with no horizontal overflow |
| NFR-8 | Runtime | React (build tooling TBD) |

## 7. Accessibility & Screen Reader Requirements

- A "Skip to main content" link is the first focusable element and moves focus
  to the `main` region.
- Landmarks are used correctly: one `header`, one `nav` (with an accessible
  name), one `main`, and one `footer`.
- Heading structure is logical and starts at `h1` (brand/page title), with no
  skipped levels.
- Every image has an appropriate `alt`; decorative images are hidden from
  assistive technology.
- Form-like controls and navigation links have accessible names.
- The listings section has an accessible name (e.g. `aria-labelledby`).
- Focus order is logical and matches the visual order.
- Interactive elements are real buttons/links, not clickable `<div>`s.
- Color is not the only means of conveying information.

## 8. Deliverables

- React home page source code (header, listings section, footer).
- `rfp.md` — this requirements document.
- `test-cases.md` — the test cases for this project.
- README with setup/run instructions.

## 9. Milestones / Timeline

| Milestone | Description | Due |
| --------- | ----------- | --- |
| M1 | Requirements and test plan approved | TBD |
| M2 | Home page UI implemented | TBD |
| M3 | Accessibility audit and fixes | TBD |
| M4 | Final delivery and sign-off | TBD |

## 10. Constraints, Assumptions & Dependencies

- Primary navigation links are assumed to be: Home, Buy, Rent, Sell, Contact.
- The listings section shows 6 static sample property cards.
- Sample listing data is hard-coded; there is no backend or API.
- Content language is English.
- Visual style is classic/professional (blue/white palette, formal layout).
- React build tooling is not yet chosen.
- Property images, brand colors, and logo asset are not yet provided.

## 11. Acceptance Criteria

- [ ] AC-1: The header renders the brand name "Apna Ashiana Jaipur" and the five primary navigation links.
- [ ] AC-2: The five navigation links are reachable in logical tab order and activate with Enter.
- [ ] AC-3: The listings section renders the sample property cards (6 cards) in a responsive grid.
- [ ] AC-4: Every listing card shows image, title, price, location, bedrooms, bathrooms, area, and a "View details" control.
- [ ] AC-5: The footer renders contact information, useful links, and a copyright notice.
- [ ] AC-6: The page contains exactly one `header`, one `nav`, one `main`, and one `footer` landmark.
- [ ] AC-7: A "Skip to main content" link is the first focusable element and moves focus into the main region.
- [ ] AC-8: Every content image has a descriptive `alt`; decorative images are hidden from assistive technology.
- [ ] AC-9: All interactive elements are reachable and operable using only the keyboard.
- [ ] AC-10: Heading levels start at `h1` and never skip a level.
- [ ] AC-11: The layout is usable at mobile, tablet, and desktop widths with no horizontal scrolling.
- [ ] AC-12: Text and UI component contrast meets WCAG 2.1 AA (4.5:1 normal, 3:1 large).
- [ ] AC-13: A visible focus indicator is present on every focusable element.
- [ ] AC-14: A screen reader can identify the page title and the purpose of each landmark and region.

## 12. Evaluation Criteria

- All `Must` functional requirements (FR-1 to FR-7) are fully implemented.
- Conformance to WCAG 2.1 Level AA, verified by automated and manual checks.
- All acceptance criteria (AC-1 to AC-14) pass.
- All test cases in `test-cases.md` pass.
- Responsive layout works across mobile, tablet, and desktop.
- Code is clean, maintainable, and documented.

## 13. Open Questions / TBD

- Exact contact details for the footer (phone, email, address).
- Preferred React build tooling (Vite, Create React App, Next.js).
- Source of property images (placeholder service, local assets, CDN).
- Exact brand colors and logo asset.
- ~~Whether "View details" opens a detail page~~ — **Resolved 2026-10-20:** detail
  page implemented at `/listing/:id` using React Router.
- Milestone dates.
