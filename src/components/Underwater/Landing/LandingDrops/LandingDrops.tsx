import React from 'react';
import { useDispatch } from 'react-redux';
import times from 'lodash/times';

import { setUnderwaterStarter } from 'src/store/underwater/actions';

import { Drop } from '../../Drop/Drop';
import { DropsStage } from '../../Drop/DropsStage/DropsStage';
import { Satellites } from '../../Drop/Satellites/Satellites';

export const LandingDrops = () => {
  const dispatch = useDispatch();

  return (
    <DropsStage>
      {({ windowWidth, windowHeight }) => (
        <>
          {times(40, index => (
            <Drop
              key={index}
              onClick={() => dispatch(setUnderwaterStarter())}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              satellites={<Satellites isPaused={false} />}
            />
          ))}
        </>
      )}
    </DropsStage>
  );
};
