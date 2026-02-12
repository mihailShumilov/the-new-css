'use client';

import { usePathname } from 'next/navigation';

const labels: Record<string, string> = {
  docs: 'Docs',
  'getting-started': 'Getting Started',
  'layout-utilities': 'Layout',
  flexbox: 'Flexbox',
  grid: 'Grid',
  spacing: 'Spacing',
  sizing: 'Sizing',
  typography: 'Typography',
  colors: 'Colors',
  borders: 'Borders',
  effects: 'Effects',
  responsive: 'Responsive',
  'dark-mode': 'Dark Mode',
  customization: 'Customization',
  examples: 'Examples',
  compare: 'Compare',
  faq: 'FAQ',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => ({
    label: labels[seg] || seg,
    href: '/' + segments.slice(0, i + 1).join('/'),
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thenewcss.com' },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.label,
        item: `https://thenewcss.com${c.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <ol className="flex flex-wrap gap-1">
          <li>
            <a href="/" className="hover:text-blue-600">Home</a>
            <span className="mx-1">/</span>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={crumb.href}>
              {i < crumbs.length - 1 ? (
                <>
                  <a href={crumb.href} className="hover:text-blue-600">{crumb.label}</a>
                  <span className="mx-1">/</span>
                </>
              ) : (
                <span className="text-gray-900 font-medium">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
