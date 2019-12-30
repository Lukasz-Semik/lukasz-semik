import React from 'react';
import { useDispatch } from 'react-redux';

import { substractHealthPoints, addScore } from 'src/store/underwater/actions';

import { DropBase } from '../DropBase/DropBase';

export const GameDrop = () => {
  const dispatch = useDispatch();

  const onSwimEnd = (isClicked?: boolean) => {
    if (!isClicked) {
      dispatch(substractHealthPoints(1));
    }
  };

  return (
    <DropBase
      onSwimEnd={onSwimEnd}
      onClick={() => dispatch(addScore(1))}
      isFullyVisible
    />
  );
};
