import React from 'react';
import styled from 'styled-components';

import Island from 'src/assets/surface/island-base.svg';
import PalmLeaves from 'src/assets/surface/palm-leaves.svg';
import PalmTrunk from 'src/assets/surface/palm-trunk.svg';
import Sands from 'src/assets/surface/sands.svg';
import styles from 'src/styles';

import { DayOverlay } from './DayOverlay/DayOverlay';

const SurfacePlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(#80deea, #14e3fa 60%);
`;

const Water = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;

  background: radial-gradient(
    ${styles.colors.bgUnderwaterLight},
    ${styles.colors.bgUnderwaterDark} 60%
  );
`;

const IslandWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  width: 30%;
  height: 90px;
  transform: translateX(-50%);
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const PalmWrapper = styled.div`
  position: absolute;
  bottom: 130px;
  left: 50%;
  width: 50px;
  height: 150px;
  transform: translateX(-50%);
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const PalmLeavesWrapper = styled.div`
  position: absolute;
  bottom: 225px;
  left: 51%;
  width: 100px;
  height: 100px;
  transform: translateX(-50%);
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Surface = () => {
  return (
    <SurfacePlaceholder>
      <Water />

      <IslandWrapper>
        <Island />
      </IslandWrapper>
      <IslandWrapper>
        <Sands />
      </IslandWrapper>
      <PalmWrapper>
        <PalmTrunk />
      </PalmWrapper>
      <PalmLeavesWrapper>
        <PalmLeaves />
      </PalmLeavesWrapper>

      <DayOverlay />
    </SurfacePlaceholder>
  );
};
