import React from 'react';
import { useDispatch } from 'react-redux';

import { setUnderwaterStarter } from 'src/store/underwater/actions';

import { useDrop } from '../Drop/useDrop';
import { Drop } from '../Drop/Drop';

export const IntroDrop = () => {
  const dispatch = useDispatch();

  const { isPreparingDrop, prepareDrop, dropSize, maxOpacity } = useDrop();

  return !isPreparingDrop ? (
    <Drop
      resetDrop={prepareDrop}
      onDropClick={() => {
        dispatch(setUnderwaterStarter());
      }}
      dropSize={dropSize}
      maxOpacity={maxOpacity}
    />
  ) : null;
};
