import React, { useRef, useEffect, useState } from 'react';
import { times } from 'lodash';
import { Stage, Layer, Rect } from 'react-konva';
import Konva from 'konva';

import { Title } from '../Title/Title';
import { IntroDrop } from '../Drops/IntroDrop/IntroDrop';
import { DropsStage } from '../Drops2/DropsStage/DropsStage';
import { Starter } from '../Starter/Starter';
// import { IntroDrop } from '../Drop/IntroDrop/IntroDrop';
import { Tester } from './Tester';
import { Drop } from '../Drops2/Drop/Drop';

interface Props {
  isIntro: boolean;
  isStarter: boolean;
}

export const Landing = ({ isIntro, isStarter }: Props) => {
  return (
    <>
      <DropsStage>
        {times(40, index => (
          <Drop key={index} />
        ))}
      </DropsStage>

      {isIntro && <Title />}

      {isStarter && <Starter />}
    </>
  );
};
