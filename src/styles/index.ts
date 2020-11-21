import { darken, rgba } from 'polished';

import { breakpoints } from './constants';

const styles = {
  colors: {
    bgUnderwaterDark: '#0ed2f7',
    bgUnderwaterLight: '#1bfcf0',
    hpGreen: '#42f47a',
    hpYellow: '#fbff16',
    hpRed: '#ef2828',
    darkViolet: '#7f00ff',
    violet: '#9746ac',
    violetGradient: 'linear-gradient(to right, #e06bf0, #a34ef8)',
    goldLight: '#facc6b',
    goldDark: darken('0.1', '#ad7f00'),
    grey: 'grey',
    greyAlpha: rgba(170, 170, 170, 0.8),
    black: '#000',
    white: '#fff',
  },
  shadows: {
    textBasic: '1px 1px rgba(0, 0, 0, 0.3)',
  },
  fonts: {
    uniq: `'Caveat Brush', cursive`,
    standard: `'Lato', sans-serif`,
  },
  breakpoints,
};

export type Styles = typeof styles;
export default styles;
