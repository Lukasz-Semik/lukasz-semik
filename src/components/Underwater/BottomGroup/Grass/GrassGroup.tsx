import React from 'react';
import { times } from 'lodash';

import { Grass } from './Grass';
import { Props } from '../types';

export const GrassGroup = ({ stageWidth }: Props) => (
  <>
    {times(3, i => (
      <Grass stageWidth={stageWidth} key={`grass-${i}`} />
    ))}
  </>
);
