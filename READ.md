# Alex's portfolio — final assignment package

Three-page, dependency-free static website built with semantic HTML, one shared stylesheet, and JavaScript.

## Folder structure

```text
index.html
projects.html
about.html
css/style.css
js/script.js
README.md
```

## Features
- Home, Projects, About & Contact pages with consistent navigation and real project descriptions.
- Responsive CSS Grid/Flexbox, with breakpoints at 800px and 520px, designed for 320px and 1200px viewports.
- Keyboard-accessible skill-list DOM manipulation, theme selector, and contact form validation.
- Skip links, visible focus indicators, semantic landmarks, explicit form labels, live feedback, error associations, and descriptive page titles.
- No external fonts, scripts, CDNs, or required build step.

## IMPORTANT: Contact is a validation demo, not a real mailbox
GitHub Pages is static hosting. This contact form validates name, email, and message on the client but **does not send or store messages**. The site clearly discloses this. Add an authorized form backend/service if actual message delivery is required; do not claim the form sends messages as-is.

## Publish to your existing GitHub Pages repository
1. Back up your existing repository files if you want to keep them.
2. Upload `index.html`, `projects.html`, `about.html`, `css/style.css`, and `js/script.js` to the root of `AlexJnes25/Project-Milestone-4-Java-Added`, preserving the `css` and `js` folder names. Upload `README.md` if you want documentation.
3. Commit changes to the branch your GitHub Pages deployment uses (usually `main`). Existing root `style.css` / `script.js` may be removed *after confirming nothing links to them*; all new pages use `css/style.css` and `js/script.js`.
4. Open https://alexjnes25.github.io/Project-Milestone-4-Java-Added/ and confirm the published version is new; GitHub Pages deployment may not appear immediately.

## Final verification before submission
- In Chrome DevTools, test each of three live pages at 320px and 1200px, with no horizontal scrolling, overlap or clipped controls.
- Keyboard-only: Tab through navigation and controls; Enter adds skills / submits form; theme selector works with arrows; error focus and text are announced.
- Run https://wave.webaim.org/ on each published page and resolve all reported errors.
- Check every text/background pairing (including selected themes and interaction/error states) at https://webaim.org/resources/contrastchecker/ for WCAG AA (at least 4.5:1 normal text and 3:1 large text).
- Form tests: empty fields, invalid email, corrected values, successful validation. Confirm no claims of real email delivery.
