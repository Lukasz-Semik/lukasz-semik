import type { Styles } from 'src/styles';

export interface ColorProps {
  mainColor: ValueOf<Styles['colors']>;
}

export const getTransition = (key: 'color' | 'background-color') =>
  `2s ${key} ease`;
