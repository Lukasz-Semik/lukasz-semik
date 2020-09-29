import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import PalmLeaves from 'src/assets/surface/palm-leaves.svg';
import PalmTrunk from 'src/assets/surface/palm-trunk.svg';
import { svgDimensions } from 'src/styles/helpers';

import { Coconuts } from './Coconuts/Coconuts';
import { WindWrapper } from './WindWrapper';

const PalmTrunkWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 50px;
  height: 150px;
  transform: translateX(-50%);
  ${svgDimensions};
`;

const PalmLeavesWrapper = styled.div`
  position: absolute;
  top: ${rem(20)};
  left: ${rem(52)};
  width: ${rem(100)};
  height: ${rem(100)};
  pointer-events: none;
  transform: translateX(-50%);
  ${svgDimensions};

  * {
    pointer-events: none;
  }
`;

export const Palm = () => {
  return (
    <>
      <WindWrapper>
        <PalmTrunkWrapper>
          <PalmTrunk />
        </PalmTrunkWrapper>
      </WindWrapper>

      <Coconuts />

      <WindWrapper>
        <PalmLeavesWrapper>
          <PalmLeaves />
        </PalmLeavesWrapper>
      </WindWrapper>
    </>
  );
};
