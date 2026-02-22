import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Navigation Addon - Navbar, Tabs, Breadcrumbs, and Pagination',
  description:
    'Navbar, nav tabs, nav pills, breadcrumbs, and pagination components. CSS-only mobile toggle using details/summary.',
  path: '/addons/navigation',
});

const jsonLd = techArticleJsonLd({
  headline: 'Navigation Addon',
  description:
    'Navbar, nav tabs, nav pills, breadcrumbs, and pagination components. CSS-only mobile toggle using details/summary.',
  path: '/addons/navigation',
});

export default function NavigationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Navigation</h1>
      <p className="text-gray-600 mb-6">
        A collection of navigation components including navbar, tabs, pills, breadcrumbs, and pagination.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/navigation</code> addon package.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/navigation">
                npm install @thenewcss/navigation
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/navigation/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/navigation/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Tabs */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Tabs</h2>
      <p className="text-gray-600 mb-4">
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.nav-tabs</code> on a{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.nav</code> for underline-style tab navigation.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <ul className="nav nav-tabs">
          <li><a className="nav-link active" href="#">Active</a></li>
          <li><a className="nav-link" href="#">Link</a></li>
          <li><a className="nav-link" href="#">Another</a></li>
          <li><a className="nav-link disabled" href="#">Disabled</a></li>
        </ul>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<ul class="nav nav-tabs">\n  <li><a class="nav-link active" href="#">Active</a></li>\n  <li><a class="nav-link" href="#">Link</a></li>\n  <li><a class="nav-link disabled" href="#">Disabled</a></li>\n</ul>`}>
          {`<ul class="nav nav-tabs">\n  <li><a class="nav-link active" href="#">Active</a></li>\n  <li><a class="nav-link" href="#">Link</a></li>\n  <li><a class="nav-link disabled" href="#">Disabled</a></li>\n</ul>`}
        </CodeBlock>
      </div>

      {/* Pills */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Pills</h2>
      <p className="text-gray-600 mb-4">
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.nav-pills</code> for pill-shaped
        active state indicators.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <ul className="nav nav-pills">
          <li><a className="nav-link active" href="#">Active</a></li>
          <li><a className="nav-link" href="#">Link</a></li>
          <li><a className="nav-link" href="#">Another</a></li>
        </ul>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<ul class="nav nav-pills">\n  <li><a class="nav-link active" href="#">Active</a></li>\n  <li><a class="nav-link" href="#">Link</a></li>\n</ul>`}>
          {`<ul class="nav nav-pills">\n  <li><a class="nav-link active" href="#">Active</a></li>\n  <li><a class="nav-link" href="#">Link</a></li>\n</ul>`}
        </CodeBlock>
      </div>

      {/* Navbar */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Navbar</h2>
      <p className="text-gray-600 mb-4">
        A responsive navigation bar. Uses native{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;details&gt;/&lt;summary&gt;</code> for
        CSS-only mobile toggle.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <nav className="navbar">
          <a className="navbar-brand" href="#">Brand</a>
          <details className="navbar-toggle">
            <summary aria-label="Toggle navigation">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </summary>
            <div className="navbar-collapse">
              <ul className="navbar-nav">
                <li><a className="nav-link active" href="#">Home</a></li>
                <li><a className="nav-link" href="#">Features</a></li>
                <li><a className="nav-link" href="#">Pricing</a></li>
              </ul>
            </div>
          </details>
        </nav>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<nav class="navbar">\n  <a class="navbar-brand" href="#">Brand</a>\n  <details class="navbar-toggle">\n    <summary aria-label="Toggle navigation">☰</summary>\n    <div class="navbar-collapse">\n      <ul class="navbar-nav">\n        <li><a class="nav-link active" href="#">Home</a></li>\n        <li><a class="nav-link" href="#">Features</a></li>\n      </ul>\n    </div>\n  </details>\n</nav>`}>
          {`<nav class="navbar">\n  <a class="navbar-brand" href="#">Brand</a>\n  <details class="navbar-toggle">\n    <summary aria-label="Toggle navigation">☰</summary>\n    <div class="navbar-collapse">\n      <ul class="navbar-nav">\n        <li><a class="nav-link active" href="#">Home</a></li>\n        <li><a class="nav-link" href="#">Features</a></li>\n      </ul>\n    </div>\n  </details>\n</nav>`}
        </CodeBlock>
      </div>

      {/* Breadcrumb */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Breadcrumb</h2>
      <p className="text-gray-600 mb-4">
        Indicate the current page&#39;s location within a navigational hierarchy using separators.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active">Data</li>
          </ol>
        </nav>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<nav>\n  <ol class="breadcrumb">\n    <li class="breadcrumb-item"><a href="#">Home</a></li>\n    <li class="breadcrumb-item"><a href="#">Library</a></li>\n    <li class="breadcrumb-item active">Data</li>\n  </ol>\n</nav>`}>
          {`<nav>\n  <ol class="breadcrumb">\n    <li class="breadcrumb-item"><a href="#">Home</a></li>\n    <li class="breadcrumb-item"><a href="#">Library</a></li>\n    <li class="breadcrumb-item active">Data</li>\n  </ol>\n</nav>`}
        </CodeBlock>
      </div>

      {/* Pagination */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Pagination</h2>
      <p className="text-gray-600 mb-4">
        Page navigation with active and disabled states.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <ul className="pagination">
          <li className="page-item disabled"><a className="page-link" href="#">&laquo;</a></li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
        </ul>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<ul class="pagination">\n  <li class="page-item disabled"><a class="page-link" href="#">«</a></li>\n  <li class="page-item active"><a class="page-link" href="#">1</a></li>\n  <li class="page-item"><a class="page-link" href="#">2</a></li>\n  <li class="page-item"><a class="page-link" href="#">3</a></li>\n  <li class="page-item"><a class="page-link" href="#">»</a></li>\n</ul>`}>
          {`<ul class="pagination">\n  <li class="page-item disabled"><a class="page-link" href="#">«</a></li>\n  <li class="page-item active"><a class="page-link" href="#">1</a></li>\n  <li class="page-item"><a class="page-link" href="#">2</a></li>\n  <li class="page-item"><a class="page-link" href="#">3</a></li>\n  <li class="page-item"><a class="page-link" href="#">»</a></li>\n</ul>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Nav</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.nav</code></td>
              <td>Flex container for navigation links.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.nav-link</code></td>
              <td>Navigation link with hover/active/disabled states.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.nav-tabs</code></td>
              <td>Tab-style nav with underline active indicator.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.nav-pills</code></td>
              <td>Pill-style nav with rounded active background.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Navbar</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.navbar</code></td>
              <td>Responsive navigation bar with flex layout.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.navbar-brand</code></td>
              <td>Brand link/text with bold styling.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.navbar-nav</code></td>
              <td>Navigation list inside navbar.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.navbar-toggle</code></td>
              <td>CSS-only mobile toggle using details/summary.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.navbar-collapse</code></td>
              <td>Collapsible content area that shows/hides on mobile.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.navbar-dark</code></td>
              <td>Dark color scheme with light text.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Breadcrumb &amp; Pagination</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.breadcrumb</code></td>
              <td>Flex container for breadcrumb items.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.breadcrumb-item</code></td>
              <td>Individual breadcrumb with &quot;/&quot; separator via ::before.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.pagination</code></td>
              <td>Flex container for page links.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.page-item</code></td>
              <td>Pagination item wrapper with active/disabled states.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.page-link</code></td>
              <td>Clickable page link with border and hover styles.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
