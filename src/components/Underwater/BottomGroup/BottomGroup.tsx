import React, { memo } from 'react';
import { Container } from '@inlet/react-pixi';
import times from 'lodash/times';

import { BottomStage } from './BottomStage/BottomStage';
import { Items } from './Items/Items';

export const BottomGroup = memo(() => (
  <BottomStage>
    {({ groupsQty, groupWidth, groupHeight }) => (
      <>
        {times(groupsQty, i => (
          <Container x={i * groupWidth} key={`stage-${i}`} width={groupWidth}>
            <Items
              groupWidth={groupWidth}
              groupHeight={groupHeight}
              groupIndex={i}
            />
          </Container>
        ))}
      </>
    )}
  </BottomStage>
));
