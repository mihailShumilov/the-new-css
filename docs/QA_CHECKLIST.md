# QA Checklist

## Functional

- [ ] All internal links work (no 404s)
- [ ] Copy buttons work in modern browsers (Chrome, Firefox, Safari)
- [ ] Mobile layout renders correctly (responsive breakpoints)
- [ ] No console errors on any page
- [ ] Dark mode toggle works on all pages
- [ ] Tab switcher on Quick Start section works
- [ ] Split-view examples render correctly on desktop and mobile
- [ ] Template previews display correctly
- [ ] Blog post content renders with proper formatting
- [ ] RSS feed is valid XML at /rss.xml

## SEO

- [ ] Every page has a unique `<title>`
- [ ] Every page has a unique `<meta name="description">`
- [ ] OpenGraph tags present on all pages (og:title, og:description, og:image)
- [ ] Twitter card tags present on all pages
- [ ] Canonical URL set on all pages
- [ ] `sitemap.xml` includes all 32 URLs
- [ ] `robots.txt` allows all crawling and references sitemap
- [ ] JSON-LD schemas valid:
  - [ ] Homepage: SoftwareSourceCode + WebSite + FAQPage
  - [ ] Blog posts: BlogPosting
  - [ ] Doc pages: TechArticle + BreadcrumbList
- [ ] No `noindex` accidentally set
- [ ] No duplicate titles or descriptions
- [ ] Every page has exactly one `<h1>`
- [ ] RSS feed linked in `<head>` via `<link rel="alternate">`

## Performance

- [ ] Lighthouse >= 95 on homepage
- [ ] Lighthouse >= 95 on one template page
- [ ] Lighthouse >= 95 on one blog post
- [ ] No large blocking JavaScript
- [ ] CSS loaded from CDN (production) or local (dev) correctly
- [ ] Static export generates all pages to `site/out/`

## Content

- [ ] Hero communicates positioning in < 5 seconds
- [ ] Comparison table is accurate and fair
- [ ] /vs-tailwind page exists and internally linked
- [ ] /vs-bootstrap page exists and internally linked
- [ ] /minimal-css-framework page exists
- [ ] /lightweight-css-library page exists
- [ ] /semantic-css page exists
- [ ] /templates index lists 3 templates
- [ ] /templates/landing has preview + source code
- [ ] /templates/dashboard has preview + source code
- [ ] /templates/blog has preview + source code
- [ ] /blog index lists 4 posts
- [ ] Blog posts have CTA block at end
- [ ] Blog posts have internal links to relevant pages
- [ ] RSS feed contains all 4 posts

## Analytics

- [ ] Google Analytics loads on all pages
- [ ] `data-event` attributes on CTA buttons
- [ ] Click event delegation works (tested via gtag debug)
- [ ] CodeBlock copy events fire when copy button is clicked

## Navigation

- [ ] Header has links: Docs, Examples, Templates, Blog, Compare, GitHub
- [ ] Mobile nav has all links
- [ ] Footer has structured links (Resources, Compare, Community)
- [ ] Footer links to RSS, FAQ, GitHub

## Validation

Run these commands to verify:

```bash
# Build CSS + site
npm run build
npm run build:site

# Check size budget
npm run size

# Run unit tests
npm test

# Run E2E tests (requires site running on :3000)
npm run test:e2e
```
