import React from 'react';

import { useUnderwaterState } from 'src/Underwater/underwaterState';
import useDrop from '../Drop/useDrop';
import Drop from '../Drop/Drop';

const IntroDrop = () => {
  const { getIsUnderwaterLoader, setUnderwaterStarter } = useUnderwaterState();
  const isGameLoading = getIsUnderwaterLoader();

  const { isPreparingDrop, prepareDrop, dropSize, maxOpacity } = useDrop(
    isGameLoading
  );

  return !isPreparingDrop ? (
    <Drop
      resetDrop={prepareDrop}
      onDropClick={() => {
        setUnderwaterStarter();
      }}
      isForcedToHide={isGameLoading}
      dropSize={dropSize}
      maxOpacity={maxOpacity}
    />
  ) : null;
};

export default IntroDrop;
