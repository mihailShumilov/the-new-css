# Implementation Plan

## Detected Stack

- **Framework:** Next.js 15 (App Router) with static export (`output: 'export'`)
- **UI:** React 19, TypeScript 5.7
- **CSS:** The New CSS library via CDN (prod) / local copy (dev)
- **Site-specific styles:** `globals.css` using `@layer site`
- **SEO:** Metadata API, JSON-LD, static sitemap.xml + robots.txt
- **Analytics:** Google Analytics (gtag.js)
- **Deployment:** Static export to `site/out/`

## Approach

### New Pages (all as static App Router pages)
- `/vs-tailwind` — SEO comparison page
- `/vs-bootstrap` — SEO comparison page
- `/minimal-css-framework` — SEO landing page
- `/lightweight-css-library` — SEO landing page
- `/semantic-css` — SEO landing page
- `/templates` — Index listing 3 templates
- `/templates/landing` — Full landing page template demo
- `/templates/dashboard` — Dashboard template demo
- `/templates/blog` — Blog layout template demo
- `/blog` — Blog index
- `/blog/[slug]` — Dynamic blog post pages (static params)

### Blog System
- Blog post data stored in `site/lib/blog-posts.ts` (no MDX dependency)
- Dynamic route `site/app/blog/[slug]/page.tsx` with `generateStaticParams()`
- RSS generated as static route `site/app/rss.xml/route.ts`

### Home Page Rebuild
- Complete rewrite of `site/app/page.tsx` with new information architecture
- New sections: Hero, Why, Quick Start (tabbed), Comparison, Split-view Examples, Templates, Philosophy, Social Proof, FAQ

### SEO Updates
- Update `site/public/sitemap.xml` with all new pages
- Add JSON-LD schemas per page type
- Analytics event tracking via gtag custom events

### Components
- New: `TabSwitcher.tsx` (client) — for CDN/npm tabs in Quick Start
- New: `SplitExample.tsx` (client) — code + rendered preview
- New: `AnalyticsEvent.tsx` (client) — wrapper for tracked CTAs
- Update: `Header.tsx` — add Blog, Templates links
- Update: `Footer.tsx` — add new page links

## Files to Create/Modify

### New Files
- `site/app/vs-tailwind/page.tsx`
- `site/app/vs-bootstrap/page.tsx`
- `site/app/minimal-css-framework/page.tsx`
- `site/app/lightweight-css-library/page.tsx`
- `site/app/semantic-css/page.tsx`
- `site/app/templates/page.tsx`
- `site/app/templates/landing/page.tsx`
- `site/app/templates/dashboard/page.tsx`
- `site/app/templates/blog/page.tsx`
- `site/app/blog/page.tsx`
- `site/app/blog/[slug]/page.tsx`
- `site/app/rss.xml/route.ts`
- `site/lib/blog-posts.ts`
- `site/components/TabSwitcher.tsx`
- `site/components/SplitExample.tsx`
- `site/components/AnalyticsEvent.tsx`
- `docs/QA_CHECKLIST.md`

### Modified Files
- `site/app/page.tsx` — Full rewrite
- `site/app/globals.css` — New styles for split examples, tabs, templates
- `site/components/Header.tsx` — New nav links
- `site/components/Footer.tsx` — New footer links
- `site/components/MobileNav.tsx` — New mobile nav links
- `site/lib/seo.ts` — Add blog metadata helper
- `site/public/sitemap.xml` — Add all new URLs

## Risks + Mitigation

| Risk | Mitigation |
|------|-----------|
| Static export doesn't support dynamic routes | Use `generateStaticParams()` for blog slugs |
| RSS route handler in static mode | Use `export const dynamic = 'force-static'` |
| New pages increase build time | Minimal — all are simple static pages |
| Site-specific CSS grows large | Keep in `@layer site`, use library utilities where possible |
| CDN snippet uses wrong package name | Use actual npm name `the-new-css` from package.json |
