import { darken } from 'polished';

import { breakpoints } from './constants';

const styles = {
  colors: {
    bgUnderwaterDark: '#0ed2f7',
    bgUnderwaterLight: '#1bfcf0',
    dropDark: '#58f1ff',
    dropLight: '#abfffe',
    hpGreen: '#42f47a',
    hpYellow: '#fbff16',
    hpRed: '#ef2828',
    darkViolet: '#7f00ff',
    violet: '#9746ac',
    violetGradient: 'linear-gradient(to right, #e06bf0, #a34ef8)',
    gold: '#ad7f00',
    goldLight: '#facc6b',
    goldDark: darken('0.1', '#ad7f00'),
    grey: 'grey',
    black: '#000',
    white: '#fff',
    blue: '#5457ff',
  },
  shadows: {
    textBasic: '1px 1px rgba(0, 0, 0, 0.3)',
  },
  fonts: {
    standard: `'Nunito', sans-serif`,
    uniq: `'Caveat Brush', cursive`,
  },
  breakpoints,
};

export type Styles = typeof styles;
export default styles;
