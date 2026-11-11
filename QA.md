# Verification record

Checked 11 November 2026.

## GitHub Pages preparation

- Configured Vite base as `/cambridge-printing-concept/`.
- Re-ran all four automated tests successfully on Node 22.23.4.
- Rebuilt the production site successfully; generated HTML uses the repository prefix for JavaScript, CSS, and favicon URLs.
- Added an Actions workflow that runs the same checks and build before publishing `dist/`.

## Passed

- Production build with Vite.
- Four automated tests: service/source integrity, brief formatting, independent-concept disclosures/noindex, and absence of submission/persistence code.
- Production dependency audit: zero reported vulnerabilities at check time.
- Chrome desktop visual inspection of hero, service explorer, illustrative work, FAQs, and call-to-action.
- Narrow layouts in 390px and 360px frames. Checked that document width does not exceed the viewport after fixing one service-art overflow.
- Four service selections, including keyboard ArrowRight, Home, and End navigation.
- Planner open, selection changes, summary display, editing retained choices, close, Escape, and repeated open with fresh choices.
- Local sample brief download triggered and returned a file.
- Planner heading receives focus on opening and changing steps; close restores the trigger focus.
- Mobile navigation opens, closes after section selection, and dismisses with Escape.
- FAQ expansion displays the concept-only warning.
- Mobile planner fits the narrow viewport.

## Limits

- Phone-sized layouts were inspected in browser frames, not on physical devices.
- Safari, Firefox, real-device touch behavior, and screen-reader behavior have not been tested.
- Automated checks are basic regression/content checks, not a full accessibility or penetration audit.
- No backend, live quote generation, file upload, order processing, or submission delivery exists by design.
- Google Fonts is an external dependency; local system fonts are the fallback.
- Browser instrumentation produced extension-origin errors. No application-origin error was observed during the reviewed interactions.
