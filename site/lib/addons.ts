export interface Addon {
  slug: string;
  name: string;
  npmName: string;
  description: string;
  shortDescription: string;
  size: string;
  classes: string[];
  category: 'components' | 'utilities';
}

export const addons: Addon[] = [
  {
    slug: 'buttons',
    name: 'Buttons',
    npmName: '@thenewcss/buttons',
    description:
      'A complete button component system with sizes, colors, outline/ghost/link styles, loading states with spinner animation, and button groups.',
    shortDescription: 'Buttons with sizes, colors, and states',
    size: '~3KB',
    classes: ['.btn', '.btn-primary', '.btn-outline', '.btn-ghost', '.btn-loading', '.btn-group'],
    category: 'components',
  },
  {
    slug: 'badges',
    name: 'Badges',
    npmName: '@thenewcss/badges',
    description:
      'Pill-shaped badges and rectangular tags for status indicators, labels, and categorization. Includes color variants, outline/dot styles, and tag lists.',
    shortDescription: 'Badges, tags, and status indicators',
    size: '~2KB',
    classes: ['.badge', '.badge-primary', '.badge-outline', '.badge-dot', '.tag', '.tag-list'],
    category: 'components',
  },
  {
    slug: 'cards',
    name: 'Cards',
    npmName: '@thenewcss/cards',
    description:
      'Flexible card components with header, body, footer, and image sections. Includes hover effects, horizontal layout, compact mode, and padding modifiers.',
    shortDescription: 'Cards with sections, effects, and layouts',
    size: '~2KB',
    classes: ['.card', '.card-header', '.card-body', '.card-hover', '.card-horizontal', '.card-flat'],
    category: 'components',
  },
  {
    slug: 'tables',
    name: 'Tables',
    npmName: '@thenewcss/tables',
    description:
      'Styled table components with striped rows, hover highlights, bordered cells, compact mode, fixed layout, responsive wrapper, and cell alignment utilities.',
    shortDescription: 'Styled tables with variants and cell utilities',
    size: '~2KB',
    classes: ['.table', '.table-striped', '.table-hover', '.table-bordered', '.table-responsive', '.cell-truncate'],
    category: 'components',
  },
  {
    slug: 'colors-extended',
    name: 'Colors Extended',
    npmName: '@thenewcss/colors-extended',
    description:
      '13 additional color palettes (indigo, violet, slate, emerald, cyan, rose, amber, lime, fuchsia, sky, stone, zinc, neutral) with full 11-shade ranges, utility classes for text/bg/border/gradient, hover variants, and dark mode support.',
    shortDescription: '13 color palettes with utility classes',
    size: '~15KB',
    classes: ['.text-indigo-600', '.bg-rose-500', '.border-emerald-200', '.from-cyan-500', '.to-violet-500'],
    category: 'utilities',
  },
  {
    slug: 'typography-extended',
    name: 'Typography Extended',
    npmName: '@thenewcss/typography-extended',
    description:
      'Extended typography with display sizes (5xl-9xl), gradient text utility, a prose class for rich text/markdown content auto-styling, and text-pretty for improved wrapping.',
    shortDescription: 'Display sizes, prose formatting, gradient text',
    size: '~5KB',
    classes: ['.text-5xl', '.text-9xl', '.text-gradient', '.prose', '.text-pretty'],
    category: 'utilities',
  },
  {
    slug: 'forms',
    name: 'Forms',
    npmName: '@thenewcss/forms',
    description:
      'Styled form controls with custom inputs, selects, checkboxes, radios, switches, range sliders, input groups, floating labels, validation states, and size variants.',
    shortDescription: 'Styled inputs, selects, checkboxes, and validation',
    size: '~4KB',
    classes: ['.form-control', '.form-select', '.form-check', '.form-switch', '.input-group', '.form-floating'],
    category: 'components',
  },
  {
    slug: 'alerts',
    name: 'Alerts',
    npmName: '@thenewcss/alerts',
    description:
      'Alert boxes with info, success, warning, and danger color variants. Includes a reusable close button and dismissible alert pattern.',
    shortDescription: 'Alert boxes with color variants and close button',
    size: '~2KB',
    classes: ['.alert', '.alert-info', '.alert-success', '.alert-warning', '.alert-danger', '.btn-close'],
    category: 'components',
  },
  {
    slug: 'navigation',
    name: 'Navigation',
    npmName: '@thenewcss/navigation',
    description:
      'Navbar, nav tabs, nav pills, breadcrumbs, and pagination in one package. CSS-only mobile toggle using details/summary.',
    shortDescription: 'Navbar, tabs, pills, breadcrumbs, and pagination',
    size: '~4KB',
    classes: ['.navbar', '.nav-tabs', '.nav-pills', '.breadcrumb', '.pagination', '.page-link'],
    category: 'components',
  },
  {
    slug: 'list-group',
    name: 'List Group',
    npmName: '@thenewcss/list-group',
    description:
      'List group component with actionable items, flush variant, numbered lists, and color variants for primary, success, warning, and danger states.',
    shortDescription: 'List groups with actions and color variants',
    size: '~2KB',
    classes: ['.list-group', '.list-group-item', '.list-group-item-action', '.list-group-flush', '.list-group-numbered'],
    category: 'components',
  },
  {
    slug: 'progress',
    name: 'Progress',
    npmName: '@thenewcss/progress',
    description:
      'Progress bars with striped and animated variants, border and grow spinners, and placeholder skeleton loaders with glow and wave animations.',
    shortDescription: 'Progress bars, spinners, and skeleton loaders',
    size: '~3KB',
    classes: ['.progress-bar', '.progress-bar-striped', '.spinner-border', '.spinner-grow', '.placeholder', '.placeholder-wave'],
    category: 'components',
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    npmName: '@thenewcss/accordion',
    description:
      'CSS-only accordion using native details/summary elements. Custom chevron indicator, smooth transitions, flush variant, and exclusive mode via HTML name attribute.',
    shortDescription: 'CSS-only collapsible accordion panels',
    size: '~2KB',
    classes: ['.accordion', '.accordion-item', '.accordion-header', '.accordion-body', '.accordion-flush'],
    category: 'components',
  },
  {
    slug: 'modal',
    name: 'Modal',
    npmName: '@thenewcss/modal',
    description:
      'Modal dialogs and offcanvas panels using native dialog element. Built-in backdrop, focus trap, Escape key, and size variants including fullscreen.',
    shortDescription: 'Modal dialogs and offcanvas slide-in panels',
    size: '~3KB',
    classes: ['.modal', '.modal-header', '.modal-body', '.modal-footer', '.offcanvas', '.offcanvas-start'],
    category: 'components',
  },
  {
    slug: 'helpers',
    name: 'Helpers',
    npmName: '@thenewcss/helpers',
    description:
      'Miscellaneous utility helpers including clearfix, aspect ratios, stacks, stretched link, vertical rule, focus ring, object-fit, float, and vertical alignment.',
    shortDescription: 'Clearfix, ratios, stacks, object-fit, and more',
    size: '~2KB',
    classes: ['.ratio-16x9', '.vstack', '.hstack', '.stretched-link', '.object-cover', '.focus-ring'],
    category: 'utilities',
  },
];

export function getAddon(slug: string): Addon | undefined {
  return addons.find((a) => a.slug === slug);
}

export function getAllAddonSlugs(): string[] {
  return addons.map((a) => a.slug);
}
