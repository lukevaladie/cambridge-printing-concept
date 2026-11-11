# Cambridge Printing: independent React concept

A bespoke, responsive website concept for a possible web-design sales pitch. **This is not Cambridge Printing's official website and is not affiliated with or endorsed by the business.** It is a design demonstration, not a finished commercial implementation.

## Public concept preview

[View the GitHub Pages concept](https://lukevaladie.github.io/cambridge-printing-concept/).

Changes pushed to `main` run the tests, build the React app, and deploy `dist/` through GitHub Actions. The Vite base path is `/cambridge-printing-concept/`; update it if the repository is renamed. Set the repository's Pages source to **GitHub Actions**.

## Run locally

Use Node.js 22.12+ (Node 24 is recommended).

```sh
npm ci
npm run dev
```

Open the local address Vite prints. To make a production build:

```sh
npm test
npm run build
npm run preview
```

The generated `dist/` folder is the static website; it is excluded from Git because the deployment workflow builds it. Do not open its HTML directly with a `file://` URL because it uses module assets. Use Vite's preview server to test the configured GitHub Pages base path:

```sh
npm run preview
```

Then open `http://localhost:4173/cambridge-printing-concept/`.

## What is included

- React 19 and Vite, with no component-framework dependency.
- Desktop and phone layouts, including a compact mobile menu.
- Original vector/CSS print artwork rather than stock photos or borrowed client projects.
- A four-service explorer with keyboard navigation.
- A company-history section based on the official website.
- Native expandable FAQs.
- An accessible native-dialog project planner with editable choices and a local text-brief download.
- Reduced-motion support, visible keyboard focus, a skip link, and search-engine noindex metadata.
- Basic automated content and safety checks.

The project planner is entirely client-side. It does not request a name or email, submit a request, quote a price, accept an order, or upload a file. Selections are held only in React memory and reset when the planner closes. There is no backend, analytics SDK, cookie storage, or persistent browser storage.

Google Fonts supplies DM Sans and Manrope. System font fallbacks keep the site usable if those requests fail. All graphic artwork is part of the source; no stock-image API or secret is needed.

## Design direction

Warm paper, orange ink, deep green, and cobalt accents evoke printed matter. Oversized typography gives the business a confident contemporary introduction. The original site’s separate service pages become a browsable service explorer, while a project-planning demo illustrates a clearer inquiry path.

The fictional stationery, event posters, and direct-mail samples are explicitly labeled illustrative concepts. They are **not** Cambridge Printing's portfolio. The wordmark is a proposed design treatment, not the company's existing logo.

## Editing

- `src/main.jsx`: page structure, artwork, navigation, FAQs, and planner.
- `src/data.js`: service descriptions, source URLs, and brief formatting.
- `src/styles.css`: typography, colors, illustrations, layout, and breakpoints.
- `public/favicon.svg`: proposed concept icon.
- `tests/content.test.mjs`: automated checks.

## Before using this as a real business site

1. Obtain the business's approval for the redesign, brand direction, final copy, and imagery.
2. Reconfirm services, public contact details, location, and any turnaround promises.
3. Replace illustrative projects with approved work, or retain their clear concept labels.
4. Agree on a real inquiry/upload workflow, security controls, retention policy, and privacy notice before collecting customer data.
5. Add owner-approved SEO, domain, analytics, and integration requirements. Remove concept/noindex notices only after authorization to launch the official site.
6. Test on real mobile devices, Safari, Firefox, and assistive technology before commercial release.

No outreach, submission, or change to the original business website was made.

## Sources and verification

Business details were checked on 11 November 2026 against:

- [Official home page](https://cambridgeprinting.net/): four primary service lines, public phone, address, and direct-mail/variable-data positioning.
- [About](https://cambridgeprinting.net/about.html): founding in 1921.
- [Services](https://cambridgeprinting.net/services.html): consultation/design, pre-press, print/copy/finish, promotional merchandise/apparel, and mailing.
- [Print production](https://cambridgeprinting.net/print.html): digital/offset, wide-format, finishing, and letterpress.
- [Contact](https://cambridgeprinting.net/contact.html): 47 Seventh Street, Cambridge, MA 02141; 617.547.8230; paul@cambridgeprinting.net.

The original home page visibly uses a fixed-width layout, image-heavy headings and buttons, a gradient sidebar, and very small contact details. Those observations motivated the redesign. They do not establish a commercial willingness to buy a website.

Do not infer working hours, prices, turnaround commitments, clients, testimonials, or order minimums from this concept. None were invented.

## Rights

The source includes original concept graphics and copy. Third-party package and font licenses remain applicable. Cambridge Printing's name and factual public details are used only to identify the subject of this independent demonstration; no endorsement or ownership of its brand is asserted.
