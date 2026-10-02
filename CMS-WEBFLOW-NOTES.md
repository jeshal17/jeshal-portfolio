# CMS / Webflow note

This build is a React + Vite + Tailwind CSS + GSAP site.

The project content is currently stored in `src/data/projects.js` / the project array in `src/main.jsx`
as a CMS-like collection so the portfolio is easy to update.

Webflow itself is not required to run a React application. If you want Webflow CMS to be the content
source later, keep this React front end and connect it to Webflow CMS through the Webflow CMS API
(or move the content layer into Webflow while retaining the same visual design).

Recommended stack:
- React.js
- Tailwind CSS
- GSAP + ScrollTrigger
- JavaScript
- Webflow CMS/API (optional content source)
