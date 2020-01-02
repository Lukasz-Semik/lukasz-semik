import React from 'react';
import { times } from 'lodash';

import { Title } from '../Title/Title';
import { DropsStage } from '../Drops2/DropsStage/DropsStage';
import { Starter } from '../Starter/Starter';
import { Drop } from '../Drops2/Drop/Drop';

interface Props {
  isIntro: boolean;
  isStarter: boolean;
}

export const Landing = ({ isIntro, isStarter }: Props) => {
  return (
    <>
      <DropsStage>
        {({ windowWidth, windowHeight }) =>
          times(40, index => (
            <Drop
              key={index}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
            />
          ))
        }
      </DropsStage>

      {isIntro && <Title />}

      {isStarter && <Starter />}
    </>
  );
};
