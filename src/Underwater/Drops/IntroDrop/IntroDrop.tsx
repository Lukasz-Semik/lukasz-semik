import React from 'react';

import { useUnderwaterState } from 'src/Underwater/underwaterState';
import useDrop from '../Drop/useDrop';
import Drop from '../Drop/Drop';

const IntroDrop = () => {
  const { setUnderwaterStarter } = useUnderwaterState();

  const { isPreparingDrop, prepareDrop, dropSize, maxOpacity } = useDrop();

  return !isPreparingDrop ? (
    <Drop
      resetDrop={prepareDrop}
      onDropClick={() => {
        setUnderwaterStarter();
      }}
      dropSize={dropSize}
      maxOpacity={maxOpacity}
    />
  ) : null;
};

export default IntroDrop;
