import { useMemo } from 'react';

import { useItem } from './useItem';

const getName = (prefix: string, suffix: string) => `${prefix}_${suffix}`;

const sharkSizes = [
  [60, 35],
  [120, 70],
];

const fishSizes = [
  [50, 50],
  [80, 80],
];

export const useItems = () => {
  const shark1 = useItem({
    name: getName('shark', '1'),
    sizes: sharkSizes,
  });
  const shark2 = useItem({
    name: getName('shark', '2'),
    sizes: sharkSizes,
  });
  const shark3 = useItem({
    name: getName('shark', '3'),
    sizes: sharkSizes,
  });

  const fish1 = useItem({
    name: getName('fish', '1'),
    sizes: fishSizes,
  });

  const fish2 = useItem({
    name: getName('fish', '2'),
    sizes: fishSizes,
  });

  const squid = useItem({
    name: 'squid',
    sizes: [
      [30, 70],
      [40, 120],
    ],
  });

  const fishWide = useItem({
    name: 'fish_wide',
    sizes: [
      [80, 40],
      [120, 60],
    ],
  });

  const obstacles = useMemo(
    () => [shark1, shark2, shark3, fish1, fish2, squid, fishWide],
    [shark1, shark2, shark3, fish1, fish2, squid, fishWide]
  );

  const preparedObstacles = useMemo(
    () => [...obstacles, ...obstacles, ...obstacles],
    [obstacles]
  );
  return preparedObstacles;
};
