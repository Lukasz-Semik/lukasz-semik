export interface ColorProps {
  mainColor: string;
}

export const getTransition = (key: 'color' | 'background-color') =>
  `2s ${key} ease`;
