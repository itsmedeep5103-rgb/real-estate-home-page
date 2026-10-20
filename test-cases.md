# Test Cases — Real Estate Website Home Page

## Positive / Happy Path

| ID | Requirement | Preconditions | Steps | Expected Result |
| -- | ----------- | ------------- | ----- | --------------- |
| TC-1 | FR-1, AC-1 | Home page loaded in a browser | 1. Inspect the header | Header shows brand "Apna Ashiana Jaipur" and links Home, Buy, Rent, Sell, Contact |
| TC-2 | FR-2, AC-2 | Home page loaded | 1. Press Tab repeatedly from top of page | The five nav links are focusable in order; pressing Enter on each navigates/activates it |
| TC-3 | FR-3, AC-3 | Home page loaded | 1. Locate the listings section | A listings section renders 6 property cards in a grid |
| TC-4 | FR-4, AC-4 | Listings section visible | 1. Inspect each card | Each card shows image, title, price, location, bedrooms, bathrooms, area, and a "View details" control |
| TC-5 | FR-5, AC-5 | Home page loaded | 1. Scroll to the footer | Footer shows contact information, useful links, and a copyright notice |
| TC-6 | FR-6, AC-11 | Browser available | 1. Resize viewport to mobile, tablet, desktop widths | Layout adapts with no horizontal scrolling or overlapping content |
| TC-7 | NFR-1, AC-12 | Home page loaded | 1. Measure text and UI contrast | Contrast meets 4.5:1 normal and 3:1 large text |
| TC-8 | FR-7, AC-14 | Screen reader running | 1. Launch a screen reader and browse the page | Page title is announced; each landmark and the listings region announce their purpose |

## Negative / Error Handling

| ID | Requirement | Preconditions | Steps | Expected Result |
| -- | ----------- | ------------- | ----- | --------------- |
| TC-9 | NFR-4, AC-8 | Home page loaded | 1. Inspect all images with accessibility tree | Content images have descriptive `alt`; decorative images have empty `alt` and are hidden |
| TC-10 | NFR-2, AC-6 | Home page loaded | 1. Inspect accessibility tree landmarks | Exactly one `header`, one `nav`, one `main`, and one `footer` exist |
| TC-11 | NFR-3, AC-9 | Home page loaded | 1. Tab through the entire page using only keyboard | Every interactive element is reachable and operable via keyboard; no keyboard trap |
| TC-12 | NFR-6, AC-13 | Home page loaded | 1. Tab to each focusable element | A visible focus indicator appears on every focused element |

## Edge Cases & Boundaries

| ID | Requirement | Preconditions | Steps | Expected Result |
| -- | ----------- | ------------- | ----- | --------------- |
| TC-13 | NFR-2, AC-7 | Home page loaded | 1. Press Tab once from a fresh page load | First focus lands on "Skip to main content"; activating it moves focus into `main` |
| TC-14 | NFR-2, AC-10 | Home page loaded | 1. Inspect heading outline | First heading is `h1`; no heading level is skipped |
| TC-15 | NFR-4, AC-8 | A listing image fails to load | 1. Simulate a broken image | Screen reader announces the `alt` text; no empty announcement or missing text occurs |
| TC-16 | FR-7, AC-6 | Screen reader running | 1. Navigate the listings section | The section has an accessible name and announces its role |
| TC-17 | FR-7, AC-9 | Screen reader running | 1. Activate "View details" with Enter | Control is focusable, has an accessible name, and activates without error |
| TC-18 | NFR-7, AC-11 | Narrow viewport (e.g. 320px) | 1. Load page at minimum supported width | Content remains readable and usable; no horizontal overflow |
