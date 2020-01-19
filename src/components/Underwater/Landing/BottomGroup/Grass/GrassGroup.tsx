import React from 'react';
import { times } from 'lodash';

import { Grass } from './Grass';

export const GrassGroup = () => {
  return (
    <>
      {times(3, i => (
        <Grass key={`grass-${i}`} />
      ))}
    </>
  );
};
