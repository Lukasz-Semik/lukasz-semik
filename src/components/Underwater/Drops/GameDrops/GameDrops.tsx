import React from 'react';
import { useDispatch } from 'react-redux';
import { times } from 'lodash';

import { addScore, substractHealthPoints } from 'src/store/underwater/actions';
import { useGetIsGamePaused } from 'src/store/underwater/selectors';

import { DropsStage } from '../DropsStage/DropsStage';
import { Drop } from '../Drop/Drop';

export const GameDrops = () => {
  const dispatch = useDispatch();
  const isGamePaused = useGetIsGamePaused();

  const onSwimEnd = (isClicked?: boolean) => {
    if (!isClicked) {
      setTimeout(() => {
        dispatch(substractHealthPoints(1));
      }, 0);
    }
  };

  return (
    <DropsStage>
      {({ windowWidth, windowHeight, isWindowFocused }) => (
        <>
          {times(40, index => (
            <Drop
              key={index}
              onClick={() => dispatch(addScore(1))}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              isPaused={!isWindowFocused || isGamePaused}
              onSwimEnd={onSwimEnd}
              isFullyVisible
            />
          ))}
        </>
      )}
    </DropsStage>
  );
};
