import { rem } from 'polished';
import React from 'react';

import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';
import { styleOverlay } from 'src/styles/helpers';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${styleOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const Title = styled.div`
  font-size: ${rem(40)};
`;

export const Stack = () => {
  return (
    <MountingOpacityWrapper duration={3}>
      <Wrapper>
        <Title>Frontend - commercial experience</Title>
      </Wrapper>
    </MountingOpacityWrapper>
  );
};
