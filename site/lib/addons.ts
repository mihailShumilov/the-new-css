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
];

export function getAddon(slug: string): Addon | undefined {
  return addons.find((a) => a.slug === slug);
}

export function getAllAddonSlugs(): string[] {
  return addons.map((a) => a.slug);
}
