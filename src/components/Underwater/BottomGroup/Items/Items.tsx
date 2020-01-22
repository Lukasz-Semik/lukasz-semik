import React, { useMemo } from 'react';
import { Sprite } from '@inlet/react-pixi';
import { sortBy, random } from 'lodash';

import { useItems } from './useItems';

interface Props {
  groupIndex: number;
  groupWidth: number;
  groupHeight: number;
}

export const Items = ({ groupIndex, groupWidth, groupHeight }: Props) => {
  const commonAttrs = { groupWidth, groupHeight };
  const corals = useItems({
    ...commonAttrs,
    min: 1,
    max: 2,
    widths: [90, 110],
    heights: [60, 80],
    getImage: () => 'underwater/coral.png',
  });

  const grass = useItems({
    ...commonAttrs,
    min: 8,
    max: 12,
    widths: [80, 120],
    heights: [40, 80],
    getImage: () => 'underwater/grass.png',
  });

  const stars = useItems({
    ...commonAttrs,
    min: 1,
    max: 2,
    widths: [30, 50],
    heights: [30, 50],
    getImage: () => 'underwater/star.png',
    hasDoubledY: true,
  });

  const shells = useItems({
    ...commonAttrs,
    min: 1,
    max: 5,
    widths: [25, 35],
    heights: [25, 35],
    hasDoubledY: true,
    getImage: () => `underwater/shell_${random(1, 4)}.png`,
  });

  const itemsRaw = [...corals, ...grass, ...stars, ...shells];

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
