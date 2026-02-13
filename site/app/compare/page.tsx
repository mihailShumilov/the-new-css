import { docMeta, techArticleJsonLd } from '@/lib/seo';

export const metadata = docMeta({
  title: 'Compare CSS Frameworks',
  description: 'Compare The New CSS with Tailwind CSS and Bootstrap. Side-by-side analysis of bundle size, features, build requirements, and modern CSS support.',
  path: '/compare',
});

const jsonLd = techArticleJsonLd({
  headline: 'Compare CSS Frameworks',
  description: 'Compare The New CSS with Tailwind CSS and Bootstrap. Side-by-side analysis of bundle size, features, build requirements, and modern CSS support.',
  path: '/compare',
});

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1 className="text-3xl font-bold mb-6">The New CSS vs Tailwind CSS vs Bootstrap</h1>

      <p className="text-gray-600 mb-8">
        Choosing a CSS framework is one of the first decisions in any web project. This page offers a
        factual, side-by-side comparison of three popular approaches: The New CSS, Tailwind CSS, and
        Bootstrap. Each framework has genuine strengths, and the best choice depends on your project
        requirements, team experience, and performance goals.
      </p>

      {/* Overview */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Overview</h2>

      <p className="text-gray-600 mb-4">
        <strong>The New CSS</strong> is a lightweight CSS base with sensible defaults and utility classes
        that ships as plain CSS with no build step required. It is built entirely on modern CSS features
        including oklch() colors, @layer ordering, container queries, and CSS custom properties. The full
        bundle stays under 5KB gzipped.
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Tailwind CSS</strong> is the most widely adopted utility-first framework. It uses a
        build step with PostCSS or a CLI to scan your templates and generate only the CSS classes you
        actually use. Tailwind offers an extensive utility API, strong IDE tooling, and a large
        ecosystem of plugins and component libraries.
      </p>
      <p className="text-gray-600 mb-8">
        <strong>Bootstrap</strong> is a component-oriented framework that has been a staple of web
        development since 2011. It provides pre-built components like navbars, modals, and carousels
        alongside a growing set of utility classes. Bootstrap can be used without a build step by
        including the compiled CSS, or customized via Sass.
      </p>

      {/* Bundle Size Comparison */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Bundle Size Comparison</h2>

      <div className="overflow-x-auto mb-6">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Framework</th>
              <th>CSS Size (gzipped)</th>
              <th>JavaScript</th>
              <th>Total Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">The New CSS</td>
              <td className="text-green-600 font-semibold">~5KB</td>
              <td>None</td>
              <td className="text-green-600 font-semibold">~5KB</td>
            </tr>
            <tr>
              <td className="font-medium">Tailwind CSS</td>
              <td>~30KB+ (varies by usage)</td>
              <td>None</td>
              <td>~30KB+</td>
            </tr>
            <tr>
              <td className="font-medium">Bootstrap</td>
              <td>~23KB CSS</td>
              <td>~16KB JS (optional)</td>
              <td>~39KB (with JS)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-4">
        Bundle size directly affects page load performance, especially on mobile networks and
        lower-powered devices. Every additional kilobyte of CSS must be downloaded, parsed, and
        applied before the browser can render the page. A smaller CSS bundle means faster First
        Contentful Paint and better Core Web Vitals scores.
      </p>
      <p className="text-gray-600 mb-8">
        Tailwind mitigates its larger default size through tree-shaking: the build step removes
        unused classes so production bundles typically range from 10KB to 30KB depending on how many
        utilities your project uses. Bootstrap does not tree-shake CSS by default, though tools like
        PurgeCSS can be added separately. The New CSS ships the entire library at under 5KB, so no
        purging or tree-shaking is necessary.
      </p>

      {/* Build Process */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Build Process</h2>

      <div className="overflow-x-auto mb-6">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Build Step</th>
              <th>Configuration</th>
              <th>Setup Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">The New CSS</td>
              <td className="text-green-600 font-semibold">Not required</td>
              <td>None</td>
              <td className="text-green-600 font-semibold">Add a link tag</td>
            </tr>
            <tr>
              <td className="font-medium">Tailwind CSS</td>
              <td>Required (PostCSS or CLI)</td>
              <td>tailwind.config.js</td>
              <td>Moderate</td>
            </tr>
            <tr>
              <td className="font-medium">Bootstrap</td>
              <td>Not required for CSS</td>
              <td>Optional Sass setup</td>
              <td>Low (CSS) / Moderate (Sass)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-4">
        The New CSS requires zero tooling. Drop a single{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;link&gt;</code> tag into your
        HTML and start using utility classes immediately. This makes it ideal for prototyping,
        static sites, and environments where build tooling is unavailable or undesirable.
      </p>
      <p className="text-gray-600 mb-4">
        Tailwind requires a build pipeline. You need PostCSS (or the Tailwind CLI), a configuration
        file, and content paths defined so unused classes can be purged. This adds complexity but
        also enables powerful features like custom utilities, plugins, and JIT compilation.
      </p>
      <p className="text-gray-600 mb-8">
        Bootstrap can be used without a build step by including the pre-compiled CSS from a CDN. For
        deeper customization, you need a Sass compiler to override variables and include only the
        modules you need. This gives Bootstrap a low barrier to entry with an optional path to
        advanced configuration.
      </p>

      {/* Modern CSS Features */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Modern CSS Features</h2>

      <div className="overflow-x-auto mb-6">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>The New CSS</th>
              <th>Tailwind CSS</th>
              <th>Bootstrap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">oklch() Colors</td>
              <td className="text-green-600 font-semibold">Native</td>
              <td>Not default (plugin available)</td>
              <td>No</td>
            </tr>
            <tr>
              <td className="font-medium">@layer</td>
              <td className="text-green-600 font-semibold">Yes (base, utilities, variants)</td>
              <td>Yes (since v3.x)</td>
              <td>No</td>
            </tr>
            <tr>
              <td className="font-medium">Container Queries</td>
              <td className="text-green-600 font-semibold">Built-in</td>
              <td>Plugin (@tailwindcss/container-queries)</td>
              <td>No</td>
            </tr>
            <tr>
              <td className="font-medium">CSS Custom Properties</td>
              <td className="text-green-600 font-semibold">All tokens</td>
              <td>Theme values</td>
              <td>Partial (since v5)</td>
            </tr>
            <tr>
              <td className="font-medium">CSS Nesting</td>
              <td className="text-green-600 font-semibold">Used in source</td>
              <td>Generated output is flat</td>
              <td>Sass nesting (compiled out)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-4">
        The New CSS is built from the ground up on modern CSS specifications. oklch() provides
        perceptually uniform color palettes, meaning equal steps in lightness look equal to the
        human eye across all hues. @layer eliminates specificity conflicts by letting the browser
        resolve cascade order declaratively. Container queries enable component-level responsive
        design without relying on viewport breakpoints.
      </p>
      <p className="text-gray-600 mb-8">
        Tailwind has adopted @layer internally and exposes some modern features through plugins, but
        its generated output is designed for broad compatibility. Bootstrap introduced CSS custom
        properties in version 5, though its color system still relies on Sass and hex/rgb values.
        Both frameworks are gradually modernizing, but The New CSS treats modern CSS as a baseline
        rather than a progressive enhancement.
      </p>

      {/* Customization */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Customization</h2>

      <div className="overflow-x-auto mb-6">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Customization Method</th>
              <th>Rebuild Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">The New CSS</td>
              <td className="text-green-600 font-semibold">Override CSS custom properties</td>
              <td className="text-green-600 font-semibold">No</td>
            </tr>
            <tr>
              <td className="font-medium">Tailwind CSS</td>
              <td>tailwind.config.js / theme object</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td className="font-medium">Bootstrap</td>
              <td>Sass variables or CSS custom properties</td>
              <td>Sass changes require rebuild</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-4">
        The New CSS exposes all design tokens as CSS custom properties on{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">:root</code>. To change the
        primary blue, spacing scale, or font stack, override the relevant variable in your own
        stylesheet. Changes take effect immediately with no rebuild, and they cascade into every
        utility that references that token.
      </p>
      <p className="text-gray-600 mb-4">
        Tailwind offers deep customization through its configuration file. You can extend or
        override the entire theme, add custom utilities, and create plugins. This is extremely
        powerful for large design systems, but changes require re-running the build step.
      </p>
      <p className="text-gray-600 mb-8">
        Bootstrap supports customization through Sass variables (which require a Sass compiler) and,
        since version 5, through CSS custom properties for runtime adjustments like color changes.
        The Sass path offers the most control, while the CSS custom properties path is more
        convenient for simpler tweaks.
      </p>

      {/* Dark Mode */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Dark Mode</h2>

      <div className="overflow-x-auto mb-6">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Approach</th>
              <th>Auto-Detection</th>
              <th>Manual Toggle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">The New CSS</td>
              <td className="text-green-600 font-semibold">Gray token inversion</td>
              <td className="text-green-600 font-semibold">Yes (prefers-color-scheme)</td>
              <td className="text-green-600 font-semibold">Yes (data-theme attribute)</td>
            </tr>
            <tr>
              <td className="font-medium">Tailwind CSS</td>
              <td>dark: variant prefix</td>
              <td>Yes (media or class strategy)</td>
              <td>Yes (class strategy)</td>
            </tr>
            <tr>
              <td className="font-medium">Bootstrap</td>
              <td>data-bs-theme attribute</td>
              <td>No (manual only by default)</td>
              <td>Yes (data-bs-theme)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-4">
        The New CSS takes a unique approach to dark mode by inverting the gray color scale. When dark
        mode is active, <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-gray-50</code>{' '}
        becomes dark and <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-gray-900</code>{' '}
        becomes light. This means your existing gray utilities adapt automatically without adding
        any dark-prefixed classes. Both automatic OS detection and a manual{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">data-theme</code> toggle are
        supported simultaneously.
      </p>
      <p className="text-gray-600 mb-4">
        Tailwind requires you to explicitly add <code className="bg-gray-100 px-2 py-1 rounded text-sm">dark:</code> variants
        to every element that should change in dark mode. This gives you fine-grained control over
        every color in both modes but increases the number of classes in your markup. Tailwind
        supports both media-query-based and class-based dark mode strategies.
      </p>
      <p className="text-gray-600 mb-8">
        Bootstrap 5.3 introduced a color mode system using the{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">data-bs-theme</code> attribute. It
        does not automatically detect OS preference out of the box -- you need to add JavaScript
        to read <code className="bg-gray-100 px-2 py-1 rounded text-sm">prefers-color-scheme</code>{' '}
        and set the attribute. However, Bootstrap provides comprehensive color mode support across
        all of its components once the attribute is set.
      </p>

      {/* When to Choose Each */}
      <h2 className="text-2xl font-bold mt-12 mb-4">When to Choose Each</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Choose The New CSS when you need:</h3>
      <ul className="text-gray-600 mb-6 space-y-2" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
        <li>Rapid prototyping and MVPs with zero configuration</li>
        <li>Small to medium sites where every kilobyte counts</li>
        <li>Performance-critical projects targeting top Core Web Vitals scores</li>
        <li>Environments without build tooling (plain HTML, CMS templates, email)</li>
        <li>A learning resource for modern CSS features like oklch(), @layer, and container queries</li>
        <li>Server-rendered apps where you want pure CSS with no JavaScript dependency</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-3">Choose Tailwind CSS when you need:</h3>
      <ul className="text-gray-600 mb-6 space-y-2" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
        <li>The largest utility API with support for arbitrary values and complex variants</li>
        <li>Excellent IDE tooling with autocomplete, linting, and class sorting</li>
        <li>A mature ecosystem of plugins, component libraries (Headless UI, daisyUI), and templates</li>
        <li>Large teams that benefit from a shared configuration file and design system enforcement</li>
        <li>Fine-grained control over every aspect of dark mode, responsive design, and state variants</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-3">Choose Bootstrap when you need:</h3>
      <ul className="text-gray-600 mb-6 space-y-2" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
        <li>Pre-built, accessible components like modals, dropdowns, carousels, and navbars</li>
        <li>A familiar framework that most web developers already know</li>
        <li>Extensive documentation with examples for common UI patterns</li>
        <li>Projects where component consistency matters more than minimal bundle size</li>
        <li>Teams transitioning from older codebases that already use Bootstrap</li>
      </ul>

      <p className="text-gray-600 mb-4">
        These frameworks are not mutually exclusive. Some teams use The New CSS for lightweight
        pages alongside Tailwind for their main application. Others use Bootstrap components with
        custom utility classes layered on top. The right choice depends on your specific constraints
        around performance, team familiarity, tooling requirements, and project complexity.
      </p>

      <p className="text-gray-600 mt-8 mb-4">
        Ready to try The New CSS?{' '}
        <a href="/docs/getting-started" className="text-blue-600 font-medium hover:underline">
          Get started in under a minute
        </a>{' '}
        -- no install, no config, just a link tag.
      </p>
    </div>
  );
}
