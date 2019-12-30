import React, { useRef, useEffect, useState } from 'react';
import { times } from 'lodash';
import { Stage, Layer, Rect } from 'react-konva';
import Konva from 'konva';

import { Title } from '../Title/Title';
import { IntroDrop } from '../Drops/IntroDrop/IntroDrop';
import { Starter } from '../Starter/Starter';
// import { IntroDrop } from '../Drop/IntroDrop/IntroDrop';
import { Tester } from './Tester';

interface Props {
  isIntro: boolean;
  isStarter: boolean;
}

export const Landing = ({ isIntro, isStarter }: Props) => {
  return (
    <>
      {/* {times(1, i => (
        <IntroDrop key={`drop-${i}`} />
      ))}
      
      {isIntro && <Title />}
  
      {isStarter && <Starter />} */}
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {times(40, index => (
            <Tester key={index} />
          ))}
        </Layer>
      </Stage>
    </>
  );
};
