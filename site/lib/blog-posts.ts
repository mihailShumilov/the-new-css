export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'introducing-official-addons',
    title: 'Introducing official addons for The New CSS',
    description:
      'Six new addon packages bring buttons, badges, cards, tables, extended colors, and typography to The New CSS — without breaking the 5KB core.',
    date: '2026-02-21',
    content: `The New CSS core library ships under 5KB gzipped. That constraint is a feature, not a limitation — it keeps your baseline fast. But real projects need buttons, cards, tables, and more colors.

Today we are releasing six official addon packages that extend The New CSS with components and utilities you can install individually. Pick what you need, skip what you don't.

## The addon philosophy

Every addon follows the same principles as the core library:

- **Plain CSS.** No build step, no JavaScript runtime, no configuration file.
- **Same design tokens.** Addons reference the same \`--color-*\`, \`--spacing-*\`, and \`--radius-*\` custom properties as the core. They look consistent out of the box.
- **@layer utilities.** Addon classes sit in the \`utilities\` layer, so your own styles always win.
- **Standalone packages.** Each addon is its own npm package. Install one or all six — the core stays untouched.

## What shipped

### Component addons

**[@thenewcss/buttons](/addons/buttons)** (~3KB) — A complete button system with six color variants (primary, secondary, danger, success, warning, dark), three style alternatives (outline, ghost, link), five sizes (xs through xl), loading state with spinner animation, icon buttons, full-width layout, and button groups.

\`\`\`html
<button class="btn btn-primary">Save</button>
<button class="btn btn-outline btn-danger">Delete</button>
<button class="btn btn-ghost btn-sm">Cancel</button>
\`\`\`

**[@thenewcss/badges](/addons/badges)** (~2KB) — Pill-shaped badges and rectangular tags for status indicators and labels. Includes color variants, outline and dot styles, and a tag list layout for wrapping groups.

\`\`\`html
<span class="badge badge-success">Active</span>
<span class="badge badge-outline badge-warning">Pending</span>
<span class="badge badge-dot badge-danger">Offline</span>
\`\`\`

**[@thenewcss/cards](/addons/cards)** (~2KB) — Flexible card components with header, body, footer, and image sections. Add hover lift effects, horizontal layouts, compact mode, or go flat without shadows.

\`\`\`html
<div class="card card-hover">
  <div class="card-body">
    <h3>Feature</h3>
    <p>Card content here.</p>
  </div>
</div>
\`\`\`

**[@thenewcss/tables](/addons/tables)** (~2KB) — Styled tables with striped rows, hover highlights, bordered cells, compact mode, fixed layout, responsive horizontal scroll, and cell alignment utilities.

\`\`\`html
<div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead>...</thead>
    <tbody>...</tbody>
  </table>
</div>
\`\`\`

### Utility addons

**[@thenewcss/colors-extended](/addons/colors-extended)** (~15KB) — 13 additional color palettes: indigo, violet, slate, emerald, cyan, rose, amber, lime, fuchsia, sky, stone, zinc, and neutral. Each palette provides all 11 shades (50 through 950) as CSS custom properties, plus utility classes for text, background, border, and gradient colors. Hover variants and dark mode support are included.

**[@thenewcss/typography-extended](/addons/typography-extended)** (~5KB) — Display-size type scale from \`text-5xl\` through \`text-9xl\`, gradient text utility (\`.text-gradient\`), a \`.prose\` class that auto-styles rich HTML content (headings, paragraphs, lists, code blocks, blockquotes, tables), and \`.text-pretty\` for improved line wrapping.

## Installation

Install any addon via npm:

\`\`\`bash
npm install @thenewcss/buttons @thenewcss/cards
\`\`\`

Or load from a CDN:

\`\`\`html
<link rel="stylesheet" href="https://unpkg.com/@thenewcss/buttons/dist/index.min.css">
\`\`\`

Each addon works alongside the core library and uses the same design tokens. If you use the core via CDN, addons from CDN will match. If you override tokens on \`:root\`, addons pick up your custom theme automatically.

## Size budget

The core remains under 5KB gzipped. Addons add only what they provide:

- Buttons: ~3KB
- Badges: ~2KB
- Cards: ~2KB
- Tables: ~2KB
- Colors Extended: ~15KB
- Typography Extended: ~5KB

Loading the core plus all six addons totals roughly 29KB gzipped — still smaller than most CSS frameworks, and you only load what you use.

## What is next

We are exploring addons for forms, modals, navigation, and tooltips. If you have a component you would like to see, [open an issue on GitHub](https://github.com/mihailShumilov/the-new-css/issues).

[Browse all addons](/addons) or [get started with the core library](/#quickstart).`,
  },
  {
    slug: 'why-css-frameworks-feel-overengineered',
    title: 'Why CSS frameworks feel overengineered in 2026',
    description:
      'Build steps, configuration files, and mental overhead — when did CSS get so complicated? A look at the baseline approach.',
    date: '2026-02-13',
    content: `The CSS ecosystem has grown remarkably complex. What used to be a simple link tag has become a pipeline of build tools, configuration files, and framework-specific syntax.

## The complexity creep

Modern CSS frameworks often require:

- A Node.js build pipeline with PostCSS or similar tools
- Configuration files that define design tokens, purge paths, and plugin chains
- Framework-specific class naming conventions that differ from standard CSS
- IDE plugins for autocomplete because the class vocabulary is too large to memorize

For large applications with dedicated teams, this complexity can be justified. But for most websites — landing pages, documentation, blogs, portfolios — it is overhead without proportional benefit.

## Build steps and mental overhead

Every build step is a potential point of failure. Dependency updates can break your pipeline. Configuration drift between projects means re-learning setup each time.

The mental overhead of remembering utility class names, configuration options, and purge rules adds up. Developers spend time configuring tools instead of writing CSS.

## Utility overload and readability

When every element carries 10-15 utility classes, the HTML becomes hard to read and review:

\`\`\`html
<div class="flex flex-col gap-4 p-6 bg-white rounded-xl
  shadow-md border border-gray-200 hover:shadow-lg
  transition-shadow duration-200 dark:bg-gray-800
  dark:border-gray-700">
\`\`\`

This is styling, not markup. The HTML structure — the semantic meaning — is buried under presentation classes.

## The baseline approach

What if your CSS library gave you sensible defaults and a small set of utilities, with no build step and no configuration?

That is the idea behind [The New CSS](/). A lightweight baseline that makes semantic HTML look good by default, with utility classes available when you need them.

The full library is under 5KB gzipped. You add a single link tag and start building. No PostCSS, no config files, no purge steps.

Sometimes the best framework is the one you barely notice.

[Get started with The New CSS](/#quickstart) or [compare it with Tailwind](/vs-tailwind).`,
  },
  {
    slug: 'semantic-html-should-look-good',
    title: 'Semantic HTML should look good by default',
    description:
      'Why meaningful markup matters and how good CSS defaults reduce UI debt.',
    date: '2026-02-12',
    content: `Semantic HTML exists for a reason. Elements like \`<article>\`, \`<nav>\`, \`<header>\`, and \`<section>\` carry meaning. They help screen readers, search engines, and developers understand your content.

But here is the problem: most CSS frameworks ignore semantic elements entirely. A \`<nav>\` looks exactly like a \`<div>\` until you add classes.

## Why semantic markup matters

**Accessibility.** Screen readers use semantic elements to navigate pages. A properly structured document with \`<main>\`, \`<nav>\`, and \`<article>\` is navigable without any visual rendering.

**SEO.** Search engines use document structure to understand content hierarchy. An \`<h1>\` inside an \`<article>\` carries more weight than a styled \`<div>\`.

**Maintainability.** When markup describes content, the code is self-documenting. \`<nav>\` means navigation. \`<aside>\` means sidebar. No class name needed.

## How defaults reduce UI debt

When your CSS library styles semantic elements with good defaults, you get:

- Typography that works out of the box — headings have proper scale, paragraphs have readable line height
- Forms that look consistent — inputs, selects, and buttons share a visual language
- Tables that are readable — proper cell padding and border handling

This means less custom CSS to write, fewer classes to maintain, and less divergence between projects.

\`\`\`html
<article>
  <h1>This looks good</h1>
  <p>No extra classes needed.</p>
</article>
\`\`\`

## Practical examples

With [The New CSS](/), semantic HTML is styled by default. You write standard HTML and it looks professional:

\`\`\`html
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h1>Article title</h1>
    <p>Content with readable defaults.</p>
  </article>
</main>
\`\`\`

Utility classes are available when you need precise control, but the baseline is already good.

Learn more about [semantic CSS](/semantic-css) or [get started](/#quickstart).`,
  },
  {
    slug: 'tailwind-vs-semantic-css',
    title: 'Tailwind vs semantic CSS: choosing the right tool',
    description:
      'A balanced comparison of utility-first and semantic-first CSS approaches. When to use each.',
    date: '2026-02-11',
    content: `Tailwind CSS and semantic CSS represent two different philosophies. Neither is universally better — the right choice depends on your project, team, and preferences.

## The utility-first approach (Tailwind)

Tailwind CSS provides a comprehensive set of utility classes. You style elements by composing classes directly in HTML:

\`\`\`html
<div class="flex items-center gap-4 p-6 bg-white
  rounded-xl shadow-md">
  <h2 class="text-xl font-bold text-gray-900">Title</h2>
</div>
\`\`\`

**Strengths:**
- Consistent design tokens enforced through configuration
- No context switching between HTML and CSS files
- Large ecosystem with plugins and tooling
- Great for large teams that want strict consistency

**Trade-offs:**
- HTML becomes verbose and harder to review
- Requires a build step for purging unused styles
- Configuration file adds project complexity
- Learning curve for the full utility vocabulary

## The semantic-first approach (The New CSS)

Semantic CSS focuses on styling HTML elements and meaningful classes. The markup describes content, not presentation:

\`\`\`html
<article class="p-6 bg-gray-100 rounded-lg shadow-md">
  <h2 class="text-xl font-bold">Title</h2>
</article>
\`\`\`

**Strengths:**
- HTML stays readable and semantic
- No build step or configuration needed
- Smaller bundle size (less to download)
- Easy to learn — it is just CSS

**Trade-offs:**
- Less fine-grained control via classes alone
- Requires writing custom CSS for complex designs
- Smaller utility vocabulary than Tailwind

## When to choose Tailwind

- Large applications with established design systems
- Teams that prefer utility-first workflows
- Projects that already have a build pipeline
- When configuration-driven consistency is a priority

## When to choose semantic CSS

- Marketing sites, blogs, and documentation
- Projects that prioritize fast adoption and simplicity
- Teams that value readable HTML
- When you want to avoid build-step complexity

## They can coexist

You don't have to choose one forever. Some teams use a lightweight baseline for public-facing pages and Tailwind for internal tools. The right tool depends on the job.

[Compare The New CSS with Tailwind](/vs-tailwind) or [get started](/#quickstart).`,
  },
  {
    slug: 'build-fast-sites-with-less-css',
    title: 'How to build fast sites by shipping less CSS',
    description:
      'Performance starts with what you ship. Practical tips for reducing CSS payload and improving page speed.',
    date: '2026-02-10',
    content: `Every kilobyte of CSS is a render-blocking resource. The browser cannot paint pixels until it has downloaded and parsed your stylesheets. Shipping less CSS is one of the most impactful performance optimizations you can make.

## Why CSS payload matters

CSS blocks rendering. Unlike JavaScript, which can be deferred or loaded asynchronously, CSS in the \`<head>\` must be fully downloaded before the browser renders anything.

A 50KB stylesheet on a 3G connection adds measurable delay to First Contentful Paint. On low-end devices, parsing large CSS files also consumes CPU time.

## Practical tips for reducing CSS

### 1. Start with a small baseline

Instead of loading a full framework and purging unused styles, start with a library that is small by design.

The New CSS ships under 5KB gzipped. That is the entire library — layout, typography, colors, responsive breakpoints, and dark mode. No purge step needed because there is nothing to purge.

\`\`\`html
<link rel="stylesheet"
  href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">
\`\`\`

### 2. Avoid unused styles

If you use a large framework, audit your CSS with DevTools Coverage tab. Look for rules that never match any element. Often, less than half of a large framework is actually used on a given page.

### 3. Use modern CSS features

Modern CSS reduces the need for workarounds:

- **CSS variables** replace multiple duplicate values with a single custom property
- **@layer** eliminates specificity hacks
- **oklch()** provides better color manipulation without Sass functions

### 4. Inline critical CSS

For the fastest possible first paint, inline your critical CSS in the \`<head>\` and load the rest asynchronously. With a library under 5KB, you may be able to inline the entire stylesheet.

### 5. Measure what matters

Use Lighthouse or WebPageTest to measure:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Total blocking time from CSS

These metrics tell you whether your CSS payload is hurting real-world performance.

## The payoff

Shipping less CSS means faster page loads, better Core Web Vitals, and a better experience for users on slow connections. It is one of the few optimizations that has zero trade-offs — less code means less to download, parse, and maintain.

[Try The New CSS](/#quickstart) — a [lightweight CSS library](/lightweight-css-library) built for fast sites.`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
