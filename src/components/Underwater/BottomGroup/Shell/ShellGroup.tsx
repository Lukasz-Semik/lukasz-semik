import React, { useMemo } from 'react';
import { times, random } from 'lodash';

import { Shell } from './Shell';
import { Props } from '../types';

export const ShellGroup = ({ stageWidth }: Props) => {
  const qty = useMemo(() => random(1, 3), []);

  return (
    <>
      {times(qty, i => (
        <Shell stageWidth={stageWidth} key={`grass-${i}`} />
      ))}
    </>
  );
};
