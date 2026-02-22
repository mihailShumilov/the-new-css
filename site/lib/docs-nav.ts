export interface NavSection {
  title: string;
  items: { label: string; href: string }[];
}

export const docsNav: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Installation', href: '/docs/getting-started' },
    ],
  },
  {
    title: 'Utilities',
    items: [
      { label: 'Layout', href: '/docs/layout-utilities' },
      { label: 'Flexbox', href: '/docs/flexbox' },
      { label: 'Grid', href: '/docs/grid' },
      { label: 'Spacing', href: '/docs/spacing' },
      { label: 'Sizing', href: '/docs/sizing' },
      { label: 'Typography', href: '/docs/typography' },
      { label: 'Colors', href: '/docs/colors' },
      { label: 'Borders', href: '/docs/borders' },
      { label: 'Effects', href: '/docs/effects' },
      { label: 'Responsive', href: '/docs/responsive' },
      { label: 'Dark Mode', href: '/docs/dark-mode' },
      { label: 'Customization', href: '/docs/customization' },
    ],
  },
  {
    title: 'Addons',
    items: [
      { label: 'Overview', href: '/addons' },
      { label: 'Buttons', href: '/addons/buttons' },
      { label: 'Badges', href: '/addons/badges' },
      { label: 'Cards', href: '/addons/cards' },
      { label: 'Tables', href: '/addons/tables' },
      { label: 'Colors Extended', href: '/addons/colors-extended' },
      { label: 'Typography Extended', href: '/addons/typography-extended' },
      { label: 'Forms', href: '/addons/forms' },
      { label: 'Alerts', href: '/addons/alerts' },
      { label: 'Navigation', href: '/addons/navigation' },
      { label: 'List Group', href: '/addons/list-group' },
      { label: 'Progress', href: '/addons/progress' },
      { label: 'Accordion', href: '/addons/accordion' },
      { label: 'Modal', href: '/addons/modal' },
      { label: 'Helpers', href: '/addons/helpers' },
    ],
  },
];
