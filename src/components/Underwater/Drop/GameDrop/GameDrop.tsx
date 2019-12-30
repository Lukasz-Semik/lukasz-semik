import React from 'react';
import { useDispatch } from 'react-redux';

import { substractHealthPoints, addScore } from 'src/store/underwater/actions';

import { DropBase } from '../DropBase/DropBase';
import { PointsIndicator } from '../PointsIndicator/PointsIndicator';

export const GameDrop = () => {
  const dispatch = useDispatch();

  const onSwimEnd = (isClicked?: boolean) => {
    if (!isClicked) {
      dispatch(substractHealthPoints(1));
    }
  };

  const onAddBonusScore = (points: number) => {
    dispatch(addScore(points));
  };

  return (
    <DropBase
      onSwimEnd={onSwimEnd}
      onClick={() => dispatch(addScore(1))}
      onSateliteClick={onAddBonusScore}
      renderIndicator={(value: number) => (
        <PointsIndicator value={`+${value}`} />
      )}
      isFullyVisible
    />
  );
};
