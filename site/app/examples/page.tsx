import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';

export const metadata = docMeta({
  title: 'Examples',
  description:
    'Copy-paste examples built with The New CSS utility-first CSS library. Cards, navigation bars, hero sections, pricing tables, and responsive layouts.',
  path: '/examples',
});

const jsonLd = techArticleJsonLd({
  headline: 'Examples',
  description:
    'Copy-paste examples built with The New CSS utility-first CSS library. Cards, navigation bars, hero sections, pricing tables, and responsive layouts.',
  path: '/examples',
});

export default function ExamplesPage() {
  const cardCode = `<div class="bg-gray-100 p-6 rounded-lg shadow">
  <h3 class="font-bold text-lg mb-2">Card Title</h3>
  <p class="text-gray-600 text-sm mb-4">
    A simple card with padding, rounded corners, and a
    subtle shadow. Great for displaying content blocks.
  </p>
  <a href="#" class="text-blue-600 text-sm font-semibold
    hover:underline">Read more</a>
</div>`;

  const navCode = `<header class="sticky top-0 bg-gray-50 shadow-sm">
  <nav class="container mx-auto px-4 py-3 flex
    items-center justify-between">
    <a href="/" class="font-bold text-lg">Brand</a>
    <div class="flex items-center gap-6">
      <a href="#" class="text-gray-600 text-sm
        hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-600 text-sm
        hover:text-gray-900">Features</a>
      <a href="#" class="text-gray-600 text-sm
        hover:text-gray-900">Pricing</a>
      <a href="#" class="bg-blue-600 text-white text-sm
        px-4 py-2 rounded-lg font-semibold">Sign Up</a>
    </div>
  </nav>
</header>`;

  const heroCode = `<section class="py-16 text-center">
  <h1 class="text-4xl font-extrabold tracking-tight
    mb-4">Build Something Great</h1>
  <p class="text-lg text-gray-600 max-w-2xl mx-auto
    mb-8">Start your next project with a lightweight
    utility-first CSS library. No build step required.</p>
  <div class="flex gap-4 justify-center">
    <a href="#" class="bg-blue-600 text-white px-6 py-3
      rounded-lg font-semibold">Get Started</a>
    <a href="#" class="border border-gray-300 px-6 py-3
      rounded-lg font-semibold">Learn More</a>
  </div>
</section>`;

  const pricingCode = `<div class="grid sm:grid-cols-3 gap-6">
  <div class="border border-gray-200 rounded-lg p-6
    text-center">
    <h3 class="font-bold text-lg mb-2">Free</h3>
    <p class="text-3xl font-extrabold mb-4">$0</p>
    <p class="text-gray-600 text-sm mb-6">For personal
      projects and experiments.</p>
    <a href="#" class="block bg-gray-200 text-gray-800
      py-2 rounded-lg font-semibold text-sm">Get Started</a>
  </div>
  <div class="border-2 border-blue-600 rounded-lg p-6
    text-center">
    <h3 class="font-bold text-lg mb-2">Pro</h3>
    <p class="text-3xl font-extrabold mb-4">$19</p>
    <p class="text-gray-600 text-sm mb-6">For growing
      teams and startups.</p>
    <a href="#" class="block bg-blue-600 text-white py-2
      rounded-lg font-semibold text-sm">Upgrade</a>
  </div>
  <div class="border border-gray-200 rounded-lg p-6
    text-center">
    <h3 class="font-bold text-lg mb-2">Enterprise</h3>
    <p class="text-3xl font-extrabold mb-4">$99</p>
    <p class="text-gray-600 text-sm mb-6">For large
      organizations with custom needs.</p>
    <a href="#" class="block bg-gray-200 text-gray-800
      py-2 rounded-lg font-semibold text-sm">Contact Us</a>
  </div>
</div>`;

  const galleryCode = `<div class="grid grid-cols-1 sm:grid-cols-2
  lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 rounded-lg p-6 text-center
    text-gray-600">Item 1</div>
  <div class="bg-gray-100 rounded-lg p-6 text-center
    text-gray-600">Item 2</div>
  <div class="bg-gray-100 rounded-lg p-6 text-center
    text-gray-600">Item 3</div>
  <div class="bg-gray-100 rounded-lg p-6 text-center
    text-gray-600">Item 4</div>
  <div class="bg-gray-100 rounded-lg p-6 text-center
    text-gray-600">Item 5</div>
  <div class="bg-gray-100 rounded-lg p-6 text-center
    text-gray-600">Item 6</div>
</div>`;

  const sidebarCode = `<div class="flex gap-6" style="min-height: 300px">
  <aside class="shrink-0 bg-gray-100 rounded-lg p-4"
    style="width: 200px">
    <h3 class="font-bold text-sm mb-3">Menu</h3>
    <nav class="flex flex-col gap-2">
      <a href="#" class="text-sm text-gray-600
        hover:text-gray-900">Dashboard</a>
      <a href="#" class="text-sm text-blue-600
        font-semibold">Settings</a>
      <a href="#" class="text-sm text-gray-600
        hover:text-gray-900">Profile</a>
    </nav>
  </aside>
  <main class="flex-1 bg-gray-50 rounded-lg p-6">
    <h2 class="font-bold text-lg mb-2">Settings</h2>
    <p class="text-gray-600 text-sm">Main content area
      that grows to fill the remaining space.</p>
  </main>
</div>`;

  const formCode = `<form class="max-w-sm">
  <div class="mb-4">
    <label class="block text-sm font-semibold mb-1">
      Name</label>
    <input type="text" placeholder="Jane Doe"
      class="w-full border border-gray-300 rounded-lg
      px-3 py-2 text-sm">
  </div>
  <div class="mb-4">
    <label class="block text-sm font-semibold mb-1">
      Email</label>
    <input type="email" placeholder="jane@example.com"
      class="w-full border border-gray-300 rounded-lg
      px-3 py-2 text-sm">
  </div>
  <div class="mb-6">
    <label class="block text-sm font-semibold mb-1">
      Message</label>
    <textarea rows="3" placeholder="Your message..."
      class="w-full border border-gray-300 rounded-lg
      px-3 py-2 text-sm"></textarea>
  </div>
  <button type="submit" class="w-full bg-blue-600
    text-white py-2 rounded-lg font-semibold text-sm">
    Send Message</button>
</form>`;

  const footerCode = `<footer class="bg-gray-100 py-8">
  <div class="container mx-auto px-4 flex flex-col
    sm:flex-row gap-8 justify-between">
    <div>
      <h3 class="font-bold mb-2">Brand</h3>
      <p class="text-gray-600 text-sm">Building tools
        for the modern web.</p>
    </div>
    <div>
      <h4 class="font-semibold text-sm mb-2">Product</h4>
      <nav class="flex flex-col gap-1">
        <a href="#" class="text-gray-600 text-sm
          hover:text-gray-900">Features</a>
        <a href="#" class="text-gray-600 text-sm
          hover:text-gray-900">Pricing</a>
        <a href="#" class="text-gray-600 text-sm
          hover:text-gray-900">Changelog</a>
      </nav>
    </div>
    <div>
      <h4 class="font-semibold text-sm mb-2">Company</h4>
      <nav class="flex flex-col gap-1">
        <a href="#" class="text-gray-600 text-sm
          hover:text-gray-900">About</a>
        <a href="#" class="text-gray-600 text-sm
          hover:text-gray-900">Blog</a>
        <a href="#" class="text-gray-600 text-sm
          hover:text-gray-900">Contact</a>
      </nav>
    </div>
    <div>
      <h4 class="font-semibold text-sm mb-2">Legal</h4>
      <nav class="flex flex-col gap-1">
        <a href="#" class="text-gray-600 text-sm
          hover:text-gray-900">Privacy</a>
        <a href="#" class="text-gray-600 text-sm
          hover:text-gray-900">Terms</a>
      </nav>
    </div>
  </div>
</footer>`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-4 max-w-prose py-8">
        <h1 className="text-3xl font-bold mb-4">Examples</h1>
        <p className="text-gray-600 mb-8">
          Ready-to-use patterns built entirely with The New CSS utility classes. Each example includes
          the source HTML and a live rendered preview so you can see the result right away. Copy the
          code, paste it into your project, and customize to fit your needs. For full details on
          individual utilities, visit the{' '}
          <a href="/docs/getting-started" className="text-blue-600 underline hover:no-underline">documentation</a>.
        </p>

        {/* 1. Card Component */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Card Component</h2>
          <p className="text-gray-600 mb-4">
            Cards are one of the most common UI patterns. This example uses{' '}
            <a href="/docs/spacing" className="text-blue-600 underline hover:no-underline">padding</a>,{' '}
            <a href="/docs/borders" className="text-blue-600 underline hover:no-underline">rounded corners</a>, and{' '}
            <a href="/docs/effects" className="text-blue-600 underline hover:no-underline">shadow</a> utilities
            to create a clean content block suitable for blog posts, product listings, or feature highlights.
          </p>
          <div className="border border-gray-200 rounded-lg p-6 mb-3">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Card Title</h3>
              <p className="text-gray-600 text-sm mb-4">
                A simple card with padding, rounded corners, and a subtle shadow. Great for
                displaying content blocks.
              </p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Read more</a>
            </div>
          </div>
          <CodeBlock code={cardCode}>{cardCode}</CodeBlock>
        </section>

        {/* 2. Navigation Bar */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Navigation Bar</h2>
          <p className="text-gray-600 mb-4">
            A sticky header that stays at the top of the viewport as the user scrolls.
            Built with{' '}
            <a href="/docs/flexbox" className="text-blue-600 underline hover:no-underline">flexbox</a> utilities
            for alignment and{' '}
            <a href="/docs/layout-utilities" className="text-blue-600 underline hover:no-underline">layout utilities</a>{' '}
            for sticky positioning. The logo sits on the left while navigation links and a call-to-action
            button align to the right.
          </p>
          <div className="border border-gray-200 rounded-lg p-6 mb-3">
            <header className="bg-gray-50 shadow-sm rounded-lg">
              <nav className="px-4 py-3 flex items-center justify-between">
                <span className="font-bold text-lg">Brand</span>
                <div className="flex items-center gap-6">
                  <span className="text-gray-600 text-sm">Home</span>
                  <span className="text-gray-600 text-sm">Features</span>
                  <span className="text-gray-600 text-sm">Pricing</span>
                  <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-semibold">Sign Up</span>
                </div>
              </nav>
            </header>
          </div>
          <CodeBlock code={navCode}>{navCode}</CodeBlock>
        </section>

        {/* 3. Hero Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Hero Section</h2>
          <p className="text-gray-600 mb-4">
            A centered hero section with a bold headline, descriptive subtext, and two call-to-action buttons.
            This pattern uses{' '}
            <a href="/docs/typography" className="text-blue-600 underline hover:no-underline">typography</a> utilities
            for size and weight,{' '}
            <a href="/docs/spacing" className="text-blue-600 underline hover:no-underline">spacing</a> for vertical rhythm,
            and{' '}
            <a href="/docs/colors" className="text-blue-600 underline hover:no-underline">color</a> utilities for the
            primary button. The layout centers automatically with text-center and mx-auto.
          </p>
          <div className="border border-gray-200 rounded-lg p-6 mb-3">
            <section className="py-12 text-center">
              <h3 className="text-4xl font-extrabold tracking-tight mb-4">Build Something Great</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Start your next project with a lightweight utility-first CSS library. No build step required.
              </p>
              <div className="flex gap-4 justify-center">
                <span className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Get Started</span>
                <span className="border border-gray-300 px-6 py-3 rounded-lg font-semibold">Learn More</span>
              </div>
            </section>
          </div>
          <CodeBlock code={heroCode}>{heroCode}</CodeBlock>
        </section>

        {/* 4. Pricing Table */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Pricing Table</h2>
          <p className="text-gray-600 mb-4">
            A three-column pricing layout using the{' '}
            <a href="/docs/grid" className="text-blue-600 underline hover:no-underline">grid</a> system with{' '}
            <a href="/docs/responsive" className="text-blue-600 underline hover:no-underline">responsive</a> breakpoints.
            The featured plan stands out with a thicker colored border. Each card uses consistent
            spacing and{' '}
            <a href="/docs/borders" className="text-blue-600 underline hover:no-underline">border</a> utilities to
            maintain visual hierarchy.
          </p>
          <div className="border border-gray-200 rounded-lg p-6 mb-3">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Free</h3>
                <p className="text-3xl font-extrabold mb-4">$0</p>
                <p className="text-gray-600 text-sm mb-6">For personal projects and experiments.</p>
                <span className="block bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold text-sm">Get Started</span>
              </div>
              <div className="border-2 border-blue-600 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Pro</h3>
                <p className="text-3xl font-extrabold mb-4">$19</p>
                <p className="text-gray-600 text-sm mb-6">For growing teams and startups.</p>
                <span className="block bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm">Upgrade</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Enterprise</h3>
                <p className="text-3xl font-extrabold mb-4">$99</p>
                <p className="text-gray-600 text-sm mb-6">For large organizations with custom needs.</p>
                <span className="block bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold text-sm">Contact Us</span>
              </div>
            </div>
          </div>
          <CodeBlock code={pricingCode}>{pricingCode}</CodeBlock>
        </section>

        {/* 5. Responsive Grid Gallery */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Responsive Grid Gallery</h2>
          <p className="text-gray-600 mb-4">
            A gallery that adapts from a single column on mobile to two columns at the{' '}
            <a href="/docs/responsive" className="text-blue-600 underline hover:no-underline">sm breakpoint</a> and
            three columns at the lg breakpoint. This is one of the most useful{' '}
            <a href="/docs/grid" className="text-blue-600 underline hover:no-underline">grid</a> patterns
            for image galleries, product listings, and portfolio pages. Resize your browser to see
            the layout change.
          </p>
          <div className="border border-gray-200 rounded-lg p-6 mb-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600">Item 1</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600">Item 2</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600">Item 3</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600">Item 4</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600">Item 5</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600">Item 6</div>
            </div>
          </div>
          <CodeBlock code={galleryCode}>{galleryCode}</CodeBlock>
        </section>

        {/* 6. Sidebar Layout */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Sidebar Layout</h2>
          <p className="text-gray-600 mb-4">
            A common application layout with a fixed-width sidebar and a flexible main content area.
            Uses{' '}
            <a href="/docs/flexbox" className="text-blue-600 underline hover:no-underline">flexbox</a> with shrink-0
            on the sidebar so it maintains its width, while flex-1 on the main area lets it fill
            the remaining space. This pattern works well for dashboards, admin panels, and documentation
            sites.
          </p>
          <div className="border border-gray-200 rounded-lg p-6 mb-3">
            <div className="flex gap-6" style={{ minHeight: 200 }}>
              <aside className="shrink-0 bg-gray-100 rounded-lg p-4" style={{ width: 160 }}>
                <h3 className="font-bold text-sm mb-3">Menu</h3>
                <nav className="flex flex-col gap-2">
                  <span className="text-sm text-gray-600">Dashboard</span>
                  <span className="text-sm text-blue-600 font-semibold">Settings</span>
                  <span className="text-sm text-gray-600">Profile</span>
                </nav>
              </aside>
              <main className="flex-1 bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Settings</h3>
                <p className="text-gray-600 text-sm">Main content area that grows to fill the remaining space.</p>
              </main>
            </div>
          </div>
          <CodeBlock code={sidebarCode}>{sidebarCode}</CodeBlock>
        </section>

        {/* 7. Form Layout */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Form Layout</h2>
          <p className="text-gray-600 mb-4">
            A clean contact form with labeled inputs, a textarea, and a submit button. Uses{' '}
            <a href="/docs/sizing" className="text-blue-600 underline hover:no-underline">sizing</a> utilities
            like w-full for full-width inputs,{' '}
            <a href="/docs/borders" className="text-blue-600 underline hover:no-underline">border</a> and rounded-lg
            for styled inputs, and{' '}
            <a href="/docs/spacing" className="text-blue-600 underline hover:no-underline">spacing</a> utilities
            for consistent vertical rhythm between fields.
          </p>
          <div className="border border-gray-200 rounded-lg p-6 mb-3">
            <form className="max-w-sm" onSubmit={undefined}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  readOnly
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">Message</label>
                <textarea
                  rows={3}
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  readOnly
                />
              </div>
              <span className="block w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm text-center">
                Send Message
              </span>
            </form>
          </div>
          <CodeBlock code={formCode}>{formCode}</CodeBlock>
        </section>

        {/* 8. Footer */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Footer</h2>
          <p className="text-gray-600 mb-4">
            A multi-column footer using{' '}
            <a href="/docs/flexbox" className="text-blue-600 underline hover:no-underline">flexbox</a> with
            flex-col on small screens and flex-row at the{' '}
            <a href="/docs/responsive" className="text-blue-600 underline hover:no-underline">sm breakpoint</a>.
            Each column contains a heading and a list of links arranged vertically with flex-col and gap
            utilities. The justify-between class distributes columns evenly across the full width.
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
            <footer className="bg-gray-100 py-8">
              <div className="px-4 flex flex-col sm:flex-row gap-8 justify-between">
                <div>
                  <h3 className="font-bold mb-2">Brand</h3>
                  <p className="text-gray-600 text-sm">Building tools for the modern web.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Product</h4>
                  <nav className="flex flex-col gap-1">
                    <span className="text-gray-600 text-sm">Features</span>
                    <span className="text-gray-600 text-sm">Pricing</span>
                    <span className="text-gray-600 text-sm">Changelog</span>
                  </nav>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Company</h4>
                  <nav className="flex flex-col gap-1">
                    <span className="text-gray-600 text-sm">About</span>
                    <span className="text-gray-600 text-sm">Blog</span>
                    <span className="text-gray-600 text-sm">Contact</span>
                  </nav>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Legal</h4>
                  <nav className="flex flex-col gap-1">
                    <span className="text-gray-600 text-sm">Privacy</span>
                    <span className="text-gray-600 text-sm">Terms</span>
                  </nav>
                </div>
              </div>
            </footer>
          </div>
          <CodeBlock code={footerCode}>{footerCode}</CodeBlock>
        </section>

        {/* Next Steps */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <p className="text-gray-600 mb-4">
            These examples only scratch the surface. Combine utilities to build any layout you need.
            Explore the documentation to learn about every available class:
          </p>
          <ul className="text-gray-600 space-y-2 mb-6" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
            <li><a href="/docs/getting-started" className="text-blue-600 underline hover:no-underline">Getting Started</a> - Installation and basic concepts</li>
            <li><a href="/docs/flexbox" className="text-blue-600 underline hover:no-underline">Flexbox</a> - Direction, alignment, and sizing</li>
            <li><a href="/docs/grid" className="text-blue-600 underline hover:no-underline">Grid</a> - Column templates and spanning</li>
            <li><a href="/docs/responsive" className="text-blue-600 underline hover:no-underline">Responsive</a> - Breakpoints and mobile-first design</li>
            <li><a href="/docs/dark-mode" className="text-blue-600 underline hover:no-underline">Dark Mode</a> - Automatic and manual theme switching</li>
            <li><a href="/docs/customization" className="text-blue-600 underline hover:no-underline">Customization</a> - Override design tokens to match your brand</li>
          </ul>
        </section>
      </div>
    </>
  );
}
