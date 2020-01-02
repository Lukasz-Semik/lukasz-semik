import React from 'react';
import { times } from 'lodash';
import { useDispatch } from 'react-redux';

import { setUnderwaterStarter } from 'src/store/underwater/actions';

import { DropsStage } from '../DropsStage/DropsStage';
import { Drop } from '../Drop/Drop';

export const LandingDrops = () => {
  const dispatch = useDispatch();

  return (
    <DropsStage>
      {({ windowWidth, windowHeight }) =>
        times(40, index => (
          <Drop
            key={index}
            windowWidth={windowWidth}
            windowHeight={windowHeight}
            onClick={() => dispatch(setUnderwaterStarter())}
          />
        ))
      }
    </DropsStage>
  );
};
