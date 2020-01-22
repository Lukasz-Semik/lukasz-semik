import React from 'react';
import { useDispatch } from 'react-redux';
import { times } from 'lodash';

import { setUnderwaterStarter } from 'src/store/underwater/actions';

import { DropsStage } from '../../Drop/DropsStage/DropsStage';
import { Drop } from '../../Drop/Drop';
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
