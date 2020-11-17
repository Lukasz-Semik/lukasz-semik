import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { times } from 'lodash';

import { gameParameters } from 'src/constants/game';
import { useRwdQuery } from 'src/hooks/useMediaQuery';
import { addScore, changeHealthPoints } from 'src/store/underwater/actions';
import {
  useGetHealthPoints,
  useGetIsGamePaused,
} from 'src/store/underwater/selectors';

import { Drop } from '../../Drop/Drop';
import { DropsStage } from '../../Drop/DropsStage/DropsStage';
import { Satellites } from '../../Drop/Satellites/Satellites';
import { HealthPointAdder } from '../HealthPointsAdder/HealthPointsAdder';
import { Obstacles } from '../Obstacles/Obstacles';

export const GameScene = () => {
  const dispatch = useDispatch();
  const isGamePaused = useGetIsGamePaused();
  const healthPoints = useGetHealthPoints();
  const { isMediaMd } = useRwdQuery();

  const onSwimEnd = useCallback(
    (isClicked?: boolean) => {
      if (!isClicked) {
        setTimeout(() => {
          dispatch(
            changeHealthPoints(
              isMediaMd
                ? gameParameters.health.dropSubstractions.easy
                : gameParameters.health.dropSubstractions.hard
            )
          );
        }, 0);
      }
    },
    [dispatch, isMediaMd]
  );

  const onHealthClick = useCallback(() => {
    setTimeout(() => {
      dispatch(changeHealthPoints(gameParameters.health.heartAddings.easy));
    }, 0);
  }, [dispatch]);

  const onObstacleClick = useCallback(() => {
    setTimeout(() => {
      dispatch(
        changeHealthPoints(gameParameters.health.obstacleSubstractions.easy)
      );
    }, 0);
  }, [dispatch]);

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

            {healthPoints <=
              gameParameters.health.heartAdderVisibilityLevel && (
              <>
                {times(4, index => (
                  <HealthPointAdder
                    key={`health-point-adder-${index}`}
                    windowWidth={windowWidth}
                    windowHeight={windowHeight}
                    isGamePaused={isGamePaused}
                    onClick={onHealthClick}
                  />
                ))}
              </>
            )}

            <Obstacles
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              isGamePaused={isGamePaused}
              onClick={onObstacleClick}
            />
          </>
        );
      }}
    </DropsStage>
  );
};
