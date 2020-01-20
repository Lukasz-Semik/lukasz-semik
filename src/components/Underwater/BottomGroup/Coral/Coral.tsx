import React, { useMemo } from 'react';
import { Sprite } from '@inlet/react-pixi';
import { random } from 'lodash';

import { Props } from '../types';

export const Coral = ({ stageWidth }: Props) => {
  const width = useMemo(() => random(90, 110), []);
  const height = useMemo(() => random(60, 80), []);
  const x = useMemo(() => random(0, stageWidth - width), [stageWidth, width]);
  const y = useMemo(() => random(210, 300), []);

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
