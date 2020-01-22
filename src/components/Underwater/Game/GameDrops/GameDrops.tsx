import React from 'react';
import { useDispatch } from 'react-redux';
import { times } from 'lodash';

import { addScore, substractHealthPoints } from 'src/store/underwater/actions';
import { useGetIsGamePaused } from 'src/store/underwater/selectors';

import { DropsStage } from '../../Drop/DropsStage/DropsStage';
import { Drop } from '../../Drop/Drop';
import { Satellites } from '../../Drop/Satellites/Satellites';

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
      {({ windowWidth, windowHeight, isWindowFocused }) => {
        const isPaused = !isWindowFocused || isGamePaused;

        return (
          <>
            {times(40, index => (
              <Drop
                key={index}
                onClick={() => dispatch(addScore(1))}
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                isPaused={isPaused}
                onSwimEnd={onSwimEnd}
                isFullyVisible
                hasIndicator
                satellites={
                  <Satellites
                    isPaused={isPaused}
                    onClick={(value: number) => dispatch(addScore(value))}
                    hasIndicator
                  />
                }
              />
            ))}
          </>
        );
      }}
    </DropsStage>
  );
};
