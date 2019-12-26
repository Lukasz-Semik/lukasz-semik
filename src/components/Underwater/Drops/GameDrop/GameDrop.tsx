import React from 'react';
import { useDispatch } from 'react-redux';
import { substractHealthPoints, addScore } from 'src/store/underwater/actions';

import { useDrop } from '../Drop/useDrop';
import { Drop } from '../Drop/Drop';

export const GameDrop = () => {
  const { isPreparingDrop, prepareDrop, dropSize } = useDrop();
  const dispatch = useDispatch();

  const onResetDrop = (isClicked?: boolean) => {
    if (!isClicked) {
      dispatch(substractHealthPoints(5));
    }

    prepareDrop();
  };

  return !isPreparingDrop ? (
    <Drop
      resetDrop={onResetDrop}
      onDropClick={() => {
        dispatch(addScore(1));
      }}
      dropSize={dropSize}
      maxOpacity={1}
    />
  ) : null;
};
