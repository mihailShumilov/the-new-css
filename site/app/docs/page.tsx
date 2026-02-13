import Link from 'next/link';
import { docMeta, techArticleJsonLd } from '@/lib/seo';

export const metadata = docMeta({
  title: 'Documentation',
  description:
    'Complete documentation for The New CSS utility-first CSS library. Installation guide, utility class reference, responsive design, dark mode, and customization.',
  path: '/docs',
});

const jsonLd = techArticleJsonLd({
  headline: 'The New CSS Documentation',
  description:
    'Complete documentation for The New CSS utility-first CSS library. Installation guide, utility class reference, responsive design, dark mode, and customization.',
  path: '/docs',
});

const utilityPages = [
  {
    name: 'Layout',
    href: '/docs/layout-utilities',
    description:
      'Control display, position, overflow, visibility, and z-index. Build page structures with block, inline, flex, and grid display utilities.',
  },
  {
    name: 'Flexbox',
    href: '/docs/flexbox',
    description:
      'Align and distribute space among items in a container. Direction, wrapping, justification, alignment, grow, shrink, and order utilities.',
  },
  {
    name: 'Grid',
    href: '/docs/grid',
    description:
      'Create two-dimensional layouts with CSS Grid. Define columns, rows, gaps, and control how items span across grid tracks.',
  },
  {
    name: 'Spacing',
    href: '/docs/spacing',
    description:
      'Margin and padding utilities using a consistent spacing scale. Includes directional variants for top, right, bottom, left, inline, and block.',
  },
  {
    name: 'Sizing',
    href: '/docs/sizing',
    description:
      'Set width, height, min-width, min-height, max-width, and max-height. Includes fractional widths, viewport units, and container-based sizes.',
  },
  {
    name: 'Typography',
    href: '/docs/typography',
    description:
      'Font size, weight, style, line height, letter spacing, text alignment, decoration, and transform utilities for complete text control.',
  },
  {
    name: 'Colors',
    href: '/docs/colors',
    description:
      'Text color, background color, and gradient utilities. All colors use the oklch() color space for perceptually uniform palettes.',
  },
  {
    name: 'Borders',
    href: '/docs/borders',
    description:
      'Border width, color, style, and radius utilities. Includes ring utilities for focus outlines and divide utilities for child separators.',
  },
  {
    name: 'Effects',
    href: '/docs/effects',
    description:
      'Box shadow, opacity, and transition utilities. Add depth with shadows, control transparency, and animate property changes smoothly.',
  },
];

const featurePages = [
  {
    name: 'Responsive Design',
    href: '/docs/responsive',
    description:
      'Mobile-first breakpoint system with sm, md, and lg prefixes. Apply any utility conditionally at different screen sizes.',
  },
  {
    name: 'Dark Mode',
    href: '/docs/dark-mode',
    description:
      'Automatic dark mode via prefers-color-scheme and manual toggle via data-theme attribute. Works out of the box with zero configuration.',
  },
  {
    name: 'Customization',
    href: '/docs/customization',
    description:
      'Override CSS custom properties on :root to change colors, spacing, typography, shadows, and more. No build step or config file needed.',
  },
];

export default function DocsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-6">Documentation</h1>

      <p className="text-gray-600 mb-4">
        Welcome to the complete documentation for The New CSS, a utility-first CSS library that
        ships under 5KB gzipped with no build step required. These docs cover everything you need
        to install the library, learn the utility class system, build responsive layouts, enable
        dark mode, and customize design tokens to match your project.
      </p>
      <p className="text-gray-600 mb-8">
        The New CSS is built entirely on modern CSS standards including oklch() colors for
        perceptually uniform palettes, @layer for predictable specificity ordering, CSS custom
        properties for theming, and container queries for component-level responsiveness. Whether
        you are prototyping a quick landing page or building a production application, these docs
        will help you get the most out of every utility class.
      </p>

      {/* Getting Started */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Getting Started</h2>
      <p className="text-gray-600 mb-4">
        New to The New CSS? Start here. The getting started guide walks you through installation
        via CDN or npm, explains the core concepts behind utility-first CSS, introduces the three
        CSS layer system (base, utilities, variants), and shows you how design tokens work as CSS
        custom properties. You will be up and running in under a minute.
      </p>
      <Link
        href="/docs/getting-started"
        className="inline-flex items-center text-blue-600 font-semibold underline hover:no-underline mb-8"
      >
        Read the getting started guide &rarr;
      </Link>

      {/* Utility Reference */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Utility Reference</h2>
      <p className="text-gray-600 mb-6">
        The New CSS provides a comprehensive set of single-purpose utility classes organized by
        category. Each utility maps to one or two CSS properties, making it easy to predict what
        a class does just by reading its name. Browse the reference pages below to see every
        available class, its CSS output, and live examples.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {utilityPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
          >
            <h3 className="font-semibold mb-1">{page.name}</h3>
            <p className="text-gray-600 text-sm">{page.description}</p>
          </Link>
        ))}
      </div>

      {/* Features */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Features</h2>
      <p className="text-gray-600 mb-6">
        Beyond the core utility classes, The New CSS includes built-in support for responsive
        design, dark mode, and full customization through CSS custom properties. These features
        work without any JavaScript runtime or build tooling. Learn how to use breakpoint
        prefixes for adaptive layouts, enable automatic or manual dark mode switching, and
        override design tokens to create a custom theme that fits your brand.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {featurePages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
          >
            <h3 className="font-semibold mb-1">{page.name}</h3>
            <p className="text-gray-600 text-sm">{page.description}</p>
          </Link>
        ))}
      </div>

      {/* Additional context for SEO */}
      <h2 className="text-xl font-semibold mt-8 mb-4">How the Docs Are Organized</h2>
      <p className="text-gray-600 mb-4">
        Each documentation page follows a consistent structure. You will find a description of
        the utility category, a reference table listing every class and its CSS output, and live
        rendered examples with copy-ready code snippets. The responsive design and dark mode
        pages also include interactive demos so you can see behavior changes in real time.
      </p>
      <p className="text-gray-600 mb-4">
        The utility classes in The New CSS use familiar naming conventions. If you have used
        Tailwind CSS or similar frameworks, you will feel right at home. Classes like{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">flex</code>,{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">p-4</code>,{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">text-gray-600</code>, and{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">rounded-lg</code> work exactly
        as you would expect. The key difference is that The New CSS ships as plain CSS with no
        build step, no configuration file, and no JavaScript dependency.
      </p>
      <p className="text-gray-600">
        All source CSS is organized into three layers declared via{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">@layer</code>: base for resets
        and element defaults, utilities for all the single-purpose classes, and variants for
        responsive breakpoints, hover and focus states, and dark mode overrides. This layering
        ensures that your own custom styles always take priority over library styles without
        needing to fight specificity.
      </p>
    </>
  );
}
