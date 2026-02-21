import Link from 'next/link';
import { docMeta, techArticleJsonLd } from '@/lib/seo';
import { addons } from '@/lib/addons';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Addons',
  description:
    'Official addon packages for The New CSS. Buttons, badges, cards, tables, extended colors, and typography. Install individually via npm or CDN.',
  path: '/addons',
});

const jsonLd = techArticleJsonLd({
  headline: 'The New CSS Addons',
  description:
    'Official addon packages for The New CSS. Buttons, badges, cards, tables, extended colors, and typography.',
  path: '/addons',
});

const componentAddons = addons.filter((a) => a.category === 'components');
const utilityAddons = addons.filter((a) => a.category === 'utilities');

export default function AddonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-4">Addons</h1>

      <p className="text-gray-600 mb-4 leading-relaxed">
        Addons extend The New CSS with components and utilities that go beyond the core library.
        Each addon is a standalone npm package you can install individually — pick only what you need.
      </p>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-8">
        <p className="text-blue-800 text-sm font-medium">
          The core library stays under 5KB gzipped. Addons let you add buttons, cards, tables, and
          more without bloating the base bundle.
        </p>
      </div>

      {/* Quick install */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <p className="text-gray-600 mb-4">
        Install any addon via npm or load it from a CDN. Each addon works alongside the core
        library and uses the same design tokens.
      </p>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/buttons @thenewcss/cards">
                npm install @thenewcss/buttons @thenewcss/cards
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/buttons/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/buttons/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Component Addons */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Components</h2>
      <p className="text-gray-600 mb-6">
        Pre-built UI components styled with the core design tokens.
      </p>
      <div className="grid gap-4 mb-8">
        {componentAddons.map((addon) => (
          <Link
            key={addon.slug}
            href={`/addons/${addon.slug}`}
            className="block p-5 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-lg">{addon.name}</h3>
              <span className="badge badge-sm">{addon.size}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{addon.description}</p>
            <div className="flex flex-wrap gap-2">
              {addon.classes.map((cls) => (
                <code key={cls} className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-700">
                  {cls}
                </code>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Utility Addons */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Utilities</h2>
      <p className="text-gray-600 mb-6">
        Extended design tokens and utility classes for colors and typography.
      </p>
      <div className="grid gap-4 mb-8">
        {utilityAddons.map((addon) => (
          <Link
            key={addon.slug}
            href={`/addons/${addon.slug}`}
            className="block p-5 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-lg">{addon.name}</h3>
              <span className="badge badge-sm">{addon.size}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{addon.description}</p>
            <div className="flex flex-wrap gap-2">
              {addon.classes.map((cls) => (
                <code key={cls} className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-700">
                  {cls}
                </code>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* All addons table */}
      <h2 className="text-xl font-semibold mt-10 mb-4">All Addons</h2>
      <div className="table-responsive mb-8">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Package</th>
              <th>Description</th>
              <th className="cell-right">Size</th>
            </tr>
          </thead>
          <tbody>
            {addons.map((addon) => (
              <tr key={addon.slug}>
                <td>
                  <Link href={`/addons/${addon.slug}`} className="text-blue-600 font-medium underline hover:no-underline">
                    {addon.npmName}
                  </Link>
                </td>
                <td className="text-gray-600">{addon.shortDescription}</td>
                <td className="cell-right cell-nowrap">{addon.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
