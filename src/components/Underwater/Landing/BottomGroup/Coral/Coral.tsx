import React, { useMemo } from 'react';
import { Sprite } from '@inlet/react-pixi';
import { random } from 'lodash';

import { Props } from '../types';

export const Coral = ({ stageWidth }: Props) => {
  const x = useMemo(() => random(5, stageWidth), [stageWidth]);
  const y = useMemo(() => random(210, 300), []);
  const width = useMemo(() => random(90, 110), []);
  const height = useMemo(() => random(60, 80), []);

  return (
    <Sprite
      image="underwater/coral.png"
      width={width}
      height={height}
      x={x}
      y={y}
      anchor={[0, 1]}
      interactive={false}
    />
  );
};
