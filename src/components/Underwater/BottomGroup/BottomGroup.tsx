import React from 'react';
import { Container } from '@inlet/react-pixi';
import { times } from 'lodash';

import { BottomStage } from './BottomStage/BottomStage';
import { GrassGroup } from './Grass/GrassGroup';
import { Coral } from './Coral/Coral';
import { ShellGroup } from './Shell/ShellGroup';
import { Star } from './Star/Star';

export const BottomGroup = () => (
  <BottomStage>
    {({ groupsQty, groupWidth }) => (
      <>
        {times(groupsQty, i => (
          <Container x={i * groupWidth} key={`stage-${i}`} width={groupWidth}>
            <ShellGroup stageWidth={groupWidth} />
            <Star stageWidth={groupWidth} />
            <Coral stageWidth={groupWidth} />
            <GrassGroup stageWidth={groupWidth} />
          </Container>
        ))}
      </>
    )}
  </BottomStage>
);
