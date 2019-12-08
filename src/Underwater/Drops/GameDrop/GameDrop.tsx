import React from 'react';

import useDrop from '../Drop/useDrop';
import Drop from '../Drop/Drop';

const GameDrop = () => {
  const { isPreparingDrop, prepareDrop, dropSize } = useDrop();

  return !isPreparingDrop ? (
    <Drop
      resetDrop={prepareDrop}
      onDropClick={() => {
        console.log('clicked');
      }}
      dropSize={dropSize}
      maxOpacity={1}
    />
  ) : null;
};

export default GameDrop;
