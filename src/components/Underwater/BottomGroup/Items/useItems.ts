import { times, random } from 'lodash';
import { useMemo } from 'react';

interface Attributes {
  groupWidth: number;
  groupHeight: number;
  widths: [number, number];
  heights: [number, number];
  getImage: () => string;
  hasDoubledY?: boolean;
}

const generateAttributes = ({
  groupWidth,
  groupHeight,
  heights,
  widths,
  getImage,
  hasDoubledY = false,
}: Attributes) => {
  const width = random(...widths);
  const height = random(...heights);

  return {
    image: getImage(),
    width,
    height,
    x: random(0, groupWidth - width),
    y: random(hasDoubledY ? height * 2 : height + 10, groupHeight + 10),
  };
};

interface Args extends Attributes {
  min: number;
  max: number;
}

export const useItems = ({ min, max, ...attributes }: Args) => {
  const items = times(max, () => generateAttributes(attributes));

  const qty = random(min, items.length);

  return useMemo(() => items.slice(0, qty), [items, qty]);
};
