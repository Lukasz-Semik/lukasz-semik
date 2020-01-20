import React, { useMemo } from 'react';
import { Sprite } from '@inlet/react-pixi';
import { random } from 'lodash';

import { Props } from '../types';

export const Shell = ({ stageWidth }: Props) => {
  const index = useMemo(() => random(1, 5), []);
  const width = useMemo(() => random(35, 40), []);
  const height = useMemo(() => random(35, 40), []);
  const x = useMemo(() => random(0, stageWidth - width), [stageWidth, width]);
  const y = useMemo(() => random(200, 250), []);
  const rotation = useMemo(() => random(0, 180), []);

  return (
    <Sprite
      image={`underwater/shell_${index}.png`}
      width={width}
      height={height}
      x={x}
      y={y}
      anchor={[0, 1]}
      rotation={rotation}
      interactive={false}
    />
  );
};
