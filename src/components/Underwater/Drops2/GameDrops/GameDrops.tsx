import React from 'react';
import { times } from 'lodash';
import { useDispatch } from 'react-redux';

import { substractHealthPoints, addScore } from 'src/store/underwater/actions';

import { DropsStage } from '../DropsStage/DropsStage';
import { Drop } from '../Drop/Drop';

export const GameDrops = () => {
  const dispatch = useDispatch();

  const onSwimEnd = (isClicked?: boolean) => {
    if (!isClicked) {
      dispatch(substractHealthPoints(1));
    }
  };

  return (
    <DropsStage>
      {({ windowWidth, windowHeight }) =>
        times(40, index => (
          <Drop
            key={index}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            onClick={() => dispatch(addScore(1))}
            onSwimEnd={onSwimEnd}
          />
        ))
      }
    </DropsStage>
  );
};
