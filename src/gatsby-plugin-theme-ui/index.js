/**
 * Theme
 * @link https://theme-ui.com
 */

export const colors = {
  background: `#eaebeb`,
  bluePint: `#344abf`,
  green: `#5bc0be`,
  blue: `#4834C0`,
  red: `#ff2b4a`,
  fushia: `#ff196b`,
  saumon: `#ffa5b9`,
  marine: `#060c1d`,
  white: `#fff`,
  pink: `#ff9ad6`,
  darkBlue: `#111447`
}

export const fonts = {
  makina: `'Kohne Makina Regular', Arial, sans-serif`,
  heading: `'Playfair Display', Georgia, serif`,
  body: `'Roboto', Arial, sans-serif`
}

export const buttons = {
  red: {
    color: colors.white,
    backgroundColor: colors.fushia
  },
  blue: {
    color: colors.white,
    backgroundColor: colors.blue
  }
}

export const breakpoints = ['640px', '832px', '960px']

export const sizes = {
  small: 750,
  medium: 1000,
  large: 1250
}

export const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
}

// Shortcut
const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
}

export const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    fontSize: [1, 1, 2],
    overflowX: 'hidden'
  },
  h1: {
    ...heading,
    fontSize: [5, 5, 6]
  },
  h2: {
    ...heading,
    fontSize: [4, 4, 5]
  },
  h3: {
    ...heading,
    fontSize: [3, 3, 4]
  },
  h4: {
    ...heading,
    fontSize: [2, 2, 3]
  },
  h5: {
    ...heading,
    fontSize: [1, 1, 2]
  },
  h6: {
    ...heading,
    fontSize: [0, 0, 1]
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit'
    }
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  }
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    solid: 1,
    body: 1.5,
    heading: 1.125
  },
  colors,
  mediaQueries,
  sizes,
  breakpoints,
  buttons,
  fonts,
  styles
}
