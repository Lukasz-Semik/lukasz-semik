import React, { useMemo } from 'react';
import { Sprite } from '@inlet/react-pixi';
import { sortBy, random } from 'lodash';

import { useRwdQuery } from 'src/hooks/useMediaQuery';

import { useItems } from './useItems';

interface Props {
  groupIndex: number;
  groupWidth: number;
  groupHeight: number;
}

export const Items = ({ groupIndex, groupWidth, groupHeight }: Props) => {
  const { isMediaMd } = useRwdQuery();
  const isSmall = !isMediaMd;

  const commonAttrs = { groupWidth, groupHeight };
  const corals = useItems({
    ...commonAttrs,
    min: 1,
    max: 2,
    widths: isSmall ? [50, 80] : [90, 110],
    heights: isSmall ? [30, 50] : [60, 80],
    getImage: () => 'underwater/coral.png',
  });

  const grass = useItems({
    ...commonAttrs,
    min: 5,
    max: 8,
    // min: 8,
    // max: 12
    widths: isSmall ? [40, 80] : [80, 120],
    heights: isSmall ? [30, 60] : [40, 80],
    getImage: () => 'underwater/grass.png',
  });

  const ice = useItems({
    ...commonAttrs,
    min: 1,
    max: 2,
    widths: isSmall ? [40, 60] : [60, 80],
    heights: isSmall ? [40, 60] : [60, 80],
    getImage: () => `underwater/ice_${random(1, 3)}.png`,
  });

  const stones = useItems({
    ...commonAttrs,
    min: 1,
    max: 2,
    widths: isSmall ? [40, 60] : [50, 70],
    heights: isSmall ? [40, 60] : [50, 70],
    getImage: () => `underwater/stone_${random(1, 2)}.png`,
  });

  const stars = useItems({
    ...commonAttrs,
    min: 1,
    max: 2,
    widths: isSmall ? [20, 40] : [30, 50],
    heights: isSmall ? [20, 40] : [30, 50],
    getImage: () => 'underwater/star.png',
    hasDoubledY: true,
  });

  const shells = useItems({
    ...commonAttrs,
    min: 1,
    max: 5,
    widths: isSmall ? [20, 30] : [25, 35],
    heights: isSmall ? [20, 30] : [25, 35],
    hasDoubledY: true,
    getImage: () => `underwater/shell_${random(1, 4)}.png`,
  });

  const itemsRaw = [
    ...corals,
    ...grass,
    ...ice,
    ...stones,
    ...stars,
    ...shells,
  ];

  const items = useMemo(() => sortBy(itemsRaw, item => item.y), [itemsRaw]);

  return (
    <>
      {items.map((item, index) => (
        <Sprite
          // eslint-disable-next-line react/no-array-index-key
          key={`bottom-item-${groupIndex}-${index}`}
          anchor={[0, 1]}
          interactive={false}
          {...item}
        />
      ))}
    </>
  );
};
