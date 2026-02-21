import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Tables Addon - Striped, Hover, and Responsive',
  description:
    'Styled table classes for The New CSS. Striped, hover, bordered, compact, fixed-layout, responsive wrapper, and cell utility classes.',
  path: '/addons/tables',
});

const jsonLd = techArticleJsonLd({
  headline: 'Tables Addon',
  description:
    'Styled table classes for The New CSS. Striped, hover, bordered, compact, fixed-layout, responsive wrapper, and cell utility classes.',
  path: '/addons/tables',
});

export default function TablesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-4">Tables</h1>

      <p className="text-gray-600 mb-6 leading-relaxed">
        The tables addon provides styled table classes with variants for striped rows, hover
        highlights, bordered cells, compact spacing, fixed layout, responsive horizontal scrolling,
        and cell-level alignment utilities.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/tables">
                npm install @thenewcss/tables
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/tables/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/tables/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Basic Table */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Basic Table</h2>
      <p className="text-gray-600 mb-4">
        Apply <code>.table</code> for full-width styling with consistent padding and bottom borders.
      </p>
      <table className="table mb-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Martin</td>
            <td>Designer</td>
            <td>Active</td>
            <td>Jan 15, 2025</td>
          </tr>
          <tr>
            <td>Bob Chen</td>
            <td>Developer</td>
            <td>Active</td>
            <td>Feb 02, 2025</td>
          </tr>
          <tr>
            <td>Carol Davis</td>
            <td>Manager</td>
            <td>On Leave</td>
            <td>Mar 10, 2025</td>
          </tr>
          <tr>
            <td>Dan Wilson</td>
            <td>QA Engineer</td>
            <td>Active</td>
            <td>Apr 22, 2025</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6">
        <CodeBlock code={`<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Martin</td>
      <td>Designer</td>
      <td>Active</td>
      <td>Jan 15, 2025</td>
    </tr>
    <tr>
      <td>Bob Chen</td>
      <td>Developer</td>
      <td>Active</td>
      <td>Feb 02, 2025</td>
    </tr>
  </tbody>
</table>`}>
          {`<table class="table">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Status</th>\n      <th>Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alice Martin</td>\n      <td>Designer</td>\n      <td>Active</td>\n      <td>Jan 15, 2025</td>\n    </tr>\n    <tr>\n      <td>Bob Chen</td>\n      <td>Developer</td>\n      <td>Active</td>\n      <td>Feb 02, 2025</td>\n    </tr>\n  </tbody>\n</table>`}
        </CodeBlock>
      </div>

      {/* Striped Table */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Striped Table</h2>
      <p className="text-gray-600 mb-4">
        Add <code>.table-striped</code> for alternating row backgrounds on even rows.
      </p>
      <table className="table table-striped mb-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Martin</td>
            <td>Designer</td>
            <td>Active</td>
            <td>Jan 15, 2025</td>
          </tr>
          <tr>
            <td>Bob Chen</td>
            <td>Developer</td>
            <td>Active</td>
            <td>Feb 02, 2025</td>
          </tr>
          <tr>
            <td>Carol Davis</td>
            <td>Manager</td>
            <td>On Leave</td>
            <td>Mar 10, 2025</td>
          </tr>
          <tr>
            <td>Dan Wilson</td>
            <td>QA Engineer</td>
            <td>Active</td>
            <td>Apr 22, 2025</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6">
        <CodeBlock code={`<table class="table table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Alice Martin</td><td>Designer</td><td>Active</td><td>Jan 15, 2025</td></tr>
    <tr><td>Bob Chen</td><td>Developer</td><td>Active</td><td>Feb 02, 2025</td></tr>
    <tr><td>Carol Davis</td><td>Manager</td><td>On Leave</td><td>Mar 10, 2025</td></tr>
  </tbody>
</table>`}>
          {`<table class="table table-striped">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Status</th>\n      <th>Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice Martin</td><td>Designer</td><td>Active</td><td>Jan 15, 2025</td></tr>\n    <tr><td>Bob Chen</td><td>Developer</td><td>Active</td><td>Feb 02, 2025</td></tr>\n    <tr><td>Carol Davis</td><td>Manager</td><td>On Leave</td><td>Mar 10, 2025</td></tr>\n  </tbody>\n</table>`}
        </CodeBlock>
      </div>

      {/* Hover Table */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Hover Table</h2>
      <p className="text-gray-600 mb-4">
        Add <code>.table-hover</code> to highlight rows on hover.
      </p>
      <table className="table table-hover mb-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Martin</td>
            <td>Designer</td>
            <td>Active</td>
            <td>Jan 15, 2025</td>
          </tr>
          <tr>
            <td>Bob Chen</td>
            <td>Developer</td>
            <td>Active</td>
            <td>Feb 02, 2025</td>
          </tr>
          <tr>
            <td>Carol Davis</td>
            <td>Manager</td>
            <td>On Leave</td>
            <td>Mar 10, 2025</td>
          </tr>
          <tr>
            <td>Dan Wilson</td>
            <td>QA Engineer</td>
            <td>Active</td>
            <td>Apr 22, 2025</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6">
        <CodeBlock code={`<table class="table table-hover">
  ...
</table>`}>
          {`<table class="table table-hover">\n  ...\n</table>`}
        </CodeBlock>
      </div>

      {/* Bordered Table */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Bordered Table</h2>
      <p className="text-gray-600 mb-4">
        Add <code>.table-bordered</code> for borders on the table and all cells.
      </p>
      <table className="table table-bordered mb-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Martin</td>
            <td>Designer</td>
            <td>Active</td>
            <td>Jan 15, 2025</td>
          </tr>
          <tr>
            <td>Bob Chen</td>
            <td>Developer</td>
            <td>Active</td>
            <td>Feb 02, 2025</td>
          </tr>
          <tr>
            <td>Carol Davis</td>
            <td>Manager</td>
            <td>On Leave</td>
            <td>Mar 10, 2025</td>
          </tr>
          <tr>
            <td>Dan Wilson</td>
            <td>QA Engineer</td>
            <td>Active</td>
            <td>Apr 22, 2025</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6">
        <CodeBlock code={`<table class="table table-bordered">
  ...
</table>`}>
          {`<table class="table table-bordered">\n  ...\n</table>`}
        </CodeBlock>
      </div>

      {/* Compact Table */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Compact Table</h2>
      <p className="text-gray-600 mb-4">
        Add <code>.table-compact</code> to reduce cell padding for denser data display.
      </p>
      <table className="table table-compact mb-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Martin</td>
            <td>Designer</td>
            <td>Active</td>
            <td>Jan 15, 2025</td>
          </tr>
          <tr>
            <td>Bob Chen</td>
            <td>Developer</td>
            <td>Active</td>
            <td>Feb 02, 2025</td>
          </tr>
          <tr>
            <td>Carol Davis</td>
            <td>Manager</td>
            <td>On Leave</td>
            <td>Mar 10, 2025</td>
          </tr>
          <tr>
            <td>Dan Wilson</td>
            <td>QA Engineer</td>
            <td>Active</td>
            <td>Apr 22, 2025</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6">
        <CodeBlock code={`<table class="table table-compact">
  ...
</table>`}>
          {`<table class="table table-compact">\n  ...\n</table>`}
        </CodeBlock>
      </div>

      {/* Striped + Hover Combined */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Combined: Striped + Hover</h2>
      <p className="text-gray-600 mb-4">
        Variants compose naturally. Combine <code>.table-striped</code> and{' '}
        <code>.table-hover</code> for striped rows with hover highlights.
      </p>
      <table className="table table-striped table-hover mb-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Martin</td>
            <td>Designer</td>
            <td>Active</td>
            <td>Jan 15, 2025</td>
          </tr>
          <tr>
            <td>Bob Chen</td>
            <td>Developer</td>
            <td>Active</td>
            <td>Feb 02, 2025</td>
          </tr>
          <tr>
            <td>Carol Davis</td>
            <td>Manager</td>
            <td>On Leave</td>
            <td>Mar 10, 2025</td>
          </tr>
          <tr>
            <td>Dan Wilson</td>
            <td>QA Engineer</td>
            <td>Active</td>
            <td>Apr 22, 2025</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6">
        <CodeBlock code={`<table class="table table-striped table-hover">
  ...
</table>`}>
          {`<table class="table table-striped table-hover">\n  ...\n</table>`}
        </CodeBlock>
      </div>

      {/* Responsive Table */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Responsive Table</h2>
      <p className="text-gray-600 mb-4">
        Wrap a table in a <code>.table-responsive</code> container for horizontal scrolling on
        narrow viewports.
      </p>
      <div className="table-responsive mb-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Location</th>
              <th>Status</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td className="cell-nowrap">Alice Martin</td>
              <td className="cell-nowrap">alice@example.com</td>
              <td>Designer</td>
              <td>Product</td>
              <td>New York</td>
              <td>Active</td>
              <td className="cell-nowrap">Jan 15, 2025</td>
            </tr>
            <tr>
              <td>002</td>
              <td className="cell-nowrap">Bob Chen</td>
              <td className="cell-nowrap">bob@example.com</td>
              <td>Developer</td>
              <td>Engineering</td>
              <td>San Francisco</td>
              <td>Active</td>
              <td className="cell-nowrap">Feb 02, 2025</td>
            </tr>
            <tr>
              <td>003</td>
              <td className="cell-nowrap">Carol Davis</td>
              <td className="cell-nowrap">carol@example.com</td>
              <td>Manager</td>
              <td>Operations</td>
              <td>Chicago</td>
              <td>On Leave</td>
              <td className="cell-nowrap">Mar 10, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Department</th>
        <th>Location</th>
        <th>Status</th>
        <th>Start Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td class="cell-nowrap">Alice Martin</td>
        <td class="cell-nowrap">alice@example.com</td>
        <td>Designer</td>
        <td>Product</td>
        <td>New York</td>
        <td>Active</td>
        <td class="cell-nowrap">Jan 15, 2025</td>
      </tr>
    </tbody>
  </table>
</div>`}>
          {`<div class="table-responsive">\n  <table class="table table-bordered">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th>Department</th>\n        <th>Location</th>\n        <th>Status</th>\n        <th>Start Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>001</td>\n        <td class="cell-nowrap">Alice Martin</td>\n        <td class="cell-nowrap">alice@example.com</td>\n        <td>Designer</td>\n        <td>Product</td>\n        <td>New York</td>\n        <td>Active</td>\n        <td class="cell-nowrap">Jan 15, 2025</td>\n      </tr>\n    </tbody>\n  </table>\n</div>`}
        </CodeBlock>
      </div>

      {/* Cell Utilities */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Cell Utilities</h2>
      <p className="text-gray-600 mb-4">
        Apply cell utility classes directly to <code>th</code> or <code>td</code> elements for
        alignment, wrapping, and truncation control.
      </p>
      <table className="table table-bordered mb-3">
        <thead>
          <tr>
            <th>Product</th>
            <th className="cell-center">Quantity</th>
            <th className="cell-right">Price</th>
            <th className="cell-nowrap">Ship Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cell-truncate" style={{ maxWidth: '150px' }}>
              Premium Wireless Bluetooth Headphones with Noise Cancellation
            </td>
            <td className="cell-center cell-middle">42</td>
            <td className="cell-right">$129.99</td>
            <td className="cell-nowrap">Jan 15, 2025</td>
          </tr>
          <tr>
            <td className="cell-truncate" style={{ maxWidth: '150px' }}>
              Ergonomic Mechanical Keyboard with Cherry MX Blue Switches
            </td>
            <td className="cell-center cell-middle">18</td>
            <td className="cell-right">$89.50</td>
            <td className="cell-nowrap">Feb 02, 2025</td>
          </tr>
          <tr>
            <td className="cell-truncate" style={{ maxWidth: '150px' }}>
              Ultra-Slim USB-C Docking Station with Dual Monitor Support
            </td>
            <td className="cell-center cell-middle">7</td>
            <td className="cell-right">$249.00</td>
            <td className="cell-nowrap">Mar 10, 2025</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6">
        <CodeBlock code={`<table class="table table-bordered">
  <thead>
    <tr>
      <th>Product</th>
      <th class="cell-center">Quantity</th>
      <th class="cell-right">Price</th>
      <th class="cell-nowrap">Ship Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="cell-truncate" style="max-width: 150px">
        Premium Wireless Bluetooth Headphones...
      </td>
      <td class="cell-center cell-middle">42</td>
      <td class="cell-right">$129.99</td>
      <td class="cell-nowrap">Jan 15, 2025</td>
    </tr>
  </tbody>
</table>`}>
          {`<table class="table table-bordered">\n  <thead>\n    <tr>\n      <th>Product</th>\n      <th class="cell-center">Quantity</th>\n      <th class="cell-right">Price</th>\n      <th class="cell-nowrap">Ship Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class="cell-truncate" style="max-width: 150px">\n        Premium Wireless Bluetooth Headphones...\n      </td>\n      <td class="cell-center cell-middle">42</td>\n      <td class="cell-right">$129.99</td>\n      <td class="cell-nowrap">Jan 15, 2025</td>\n    </tr>\n  </tbody>\n</table>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      {/* Base */}
      <h3 className="font-semibold mt-6 mb-3">Base</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.table</code></td>
              <td>Width 100%, border-collapse, font-size 0.875rem, text-align start. <code>th</code> gets font-weight 600, padding 0.75rem/1rem, border-bottom 2px gray-200. <code>td</code> gets padding 0.75rem/1rem, border-bottom 1px gray-200.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Variants */}
      <h3 className="font-semibold mt-6 mb-3">Variants</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.table-striped</code></td>
              <td>Even rows get a gray-50 background</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.table-hover</code></td>
              <td>Rows get a gray-100 background on hover</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.table-bordered</code></td>
              <td>1px gray-200 border on the table and all cells</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.table-compact</code></td>
              <td>Reduced cell padding (0.5rem/0.75rem)</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.table-fixed</code></td>
              <td>Sets table-layout to fixed for equal-width columns</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Responsive */}
      <h3 className="font-semibold mt-6 mb-3">Responsive</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.table-responsive</code></td>
              <td>Overflow-x auto wrapper for horizontal scrolling on narrow viewports</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cell Utilities Reference */}
      <h3 className="font-semibold mt-6 mb-3">Cell Utilities</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.cell-nowrap</code></td>
              <td>Prevents text wrapping inside the cell</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.cell-truncate</code></td>
              <td>Truncates overflowing text with an ellipsis (max-width 0, overflow hidden)</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.cell-center</code></td>
              <td>Centers text horizontally (text-align center)</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.cell-right</code></td>
              <td>Right-aligns text (text-align end)</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.cell-middle</code></td>
              <td>Vertically centers cell content (vertical-align middle)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
