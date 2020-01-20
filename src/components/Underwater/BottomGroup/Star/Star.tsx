import React, { useMemo } from 'react';
import { Sprite } from '@inlet/react-pixi';
import { random } from 'lodash';

import { Props } from '../types';

export const Star = ({ stageWidth }: Props) => {
  const width = useMemo(() => random(30, 50), []);
  const height = useMemo(() => random(30, 50), []);
  const x = useMemo(() => random(0, stageWidth - width), [stageWidth, width]);
  const y = useMemo(() => random(200, 250), []);

  return (
    <Sprite
      image="underwater/star.png"
      width={width}
      height={height}
      x={x}
      y={y}
      rotation={10}
      anchor={[0, 1]}
      interactive={false}
    />
  );
};
