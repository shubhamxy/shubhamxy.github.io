// Typography tokens for architectural portfolio
// Editorial, calm, professional typography system

export const typography = {
  // Font families - editorial style
  fontFamily: {
    // Display font for headlines - elegant serif
    display: '"Cormorant Garamond", Georgia, serif',
    // Body font - clean sans-serif
    body: '"Inter", system-ui, sans-serif',
    // Mono for technical details
    mono: '"JetBrains Mono", monospace',
  },

  // Font sizes with line heights
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.75rem' }],
    lg: ['1.125rem', { lineHeight: '1.875rem' }],
    xl: ['1.25rem', { lineHeight: '2rem' }],
    '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.375rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
    '5xl': ['3rem', { lineHeight: '1.15' }],
    '6xl': ['3.75rem', { lineHeight: '1.1' }],
    '7xl': ['4.5rem', { lineHeight: '1.05' }],
    '8xl': ['6rem', { lineHeight: '1' }],
    '9xl': ['8rem', { lineHeight: '1' }],
  },

  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

export type TypographyToken = typeof typography

