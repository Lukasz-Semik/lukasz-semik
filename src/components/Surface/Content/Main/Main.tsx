import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { styleOverlay } from 'src/styles/helpers';
import { AnimatedLine } from 'src/components/Elements/AnimatedLine/AnimatedLine';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

const Wrapper = styled.div`
  ${styleOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const InnerWrapper = styled.div`
  transform: translateY(-${rem(100)});

  @media ${breakpoints.smUp} {
    transform: translateY(-${rem(70)});
  }
`;

const Title = styled.h3`
  font-size: ${rem(35)};
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  letter-spacing: 1px;
  color: ${styles.colors.grey};

  @media ${breakpoints.smUp} {
    font-size: ${rem(50)};
  }
`;

const Description = styled.h2`
  font-size: ${rem(12)};
  text-align: center;
  text-transform: uppercase;
  color: ${styles.colors.grey};

  @media ${breakpoints.smUp} {
    font-size: ${rem(15)};
  }
`;

export const Main = () => {
  return (
    <MountingOpacityWrapper duration={1}>
      <Wrapper>
        <InnerWrapper>
          <Title>Łukasz Semik</Title>

          <AnimatedLine />

          <Description>Software Engineer</Description>
        </InnerWrapper>
      </Wrapper>
    </MountingOpacityWrapper>
  );
};
