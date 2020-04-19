import { useMemo } from 'react';
import { random } from 'lodash';

import { useRwdQuery } from 'src/hooks/useMediaQuery';

const sides = ['l', 'r'];

interface Props {
  name: string;
  sizes: number[][];
}
export const useItem = ({ name, sizes }: Props) => {
  const { isMediaMd } = useRwdQuery();
  const isSmall = !isMediaMd;

  const [width, height] = sizes[isSmall ? 0 : 1];
  const side = useMemo(() => sides[random(0, 1)], []);
  const path = `underwater/obstacles/${name}_${side}.png`;

  return {
    path,
    width,
    height,
  };
};
