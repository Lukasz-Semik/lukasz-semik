import React, { useMemo } from 'react';
import { times, random } from 'lodash';

import { Shell } from './Shell';

export const ShellGroup = () => {
  const qty = useMemo(() => random(1, 3), []);

  return (
    <>
      {times(qty, i => (
        <Shell key={`grass-${i}`} />
      ))}
    </>
  );
};
