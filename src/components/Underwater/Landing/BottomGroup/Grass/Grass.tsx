import React, { useMemo } from 'react';
import { Sprite } from '@inlet/react-pixi';
import { random } from 'lodash';

import { Props } from '../types';

export const Grass = ({ stageWidth }: Props) => {
  const x = useMemo(() => random(5, stageWidth), [stageWidth]);
  const y = useMemo(() => random(210, 300), []);
  const width = useMemo(() => random(40, 80), []);
  const height = useMemo(() => random(80, 160), []);
  const alpha = useMemo(() => random(0.6, 0.8, true), []);

  return (
    <Sprite
      image="underwater/grass.png"
      width={width}
      height={height}
      x={x}
      y={y}
      anchor={[0, 1]}
      alpha={alpha}
      interactive={false}
    />
  );
};
