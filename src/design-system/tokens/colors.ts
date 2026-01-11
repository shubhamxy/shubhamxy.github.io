// Color tokens for architectural portfolio
// Neutral grayscale base with single muted accent

export const colors = {
  // Neutral grayscale - primary palette
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },

  // Warm stone tones - for architectural warmth
  stone: {
    50: '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    300: '#D6D3D1',
    400: '#A8A29E',
    500: '#78716C',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
    900: '#1C1917',
  },

  // Accent color - muted terracotta/clay
  accent: {
    light: '#C4A77D',
    DEFAULT: '#8B7355',
    dark: '#5C4D3C',
  },

  // Semantic colors
  background: {
    primary: '#FAFAF9',
    secondary: '#F5F5F4',
    inverse: '#1C1917',
  },

  text: {
    primary: '#1C1917',
    secondary: '#57534E',
    tertiary: '#78716C',
    inverse: '#FAFAF9',
  },

  border: {
    light: '#E7E5E4',
    DEFAULT: '#D6D3D1',
    dark: '#A8A29E',
  },
} as const

export type ColorToken = typeof colors

