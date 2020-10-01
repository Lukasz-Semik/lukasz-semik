import React from 'react';
import { rem } from 'polished';
import styled, { keyframes } from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { styleOverlay } from 'src/styles/helpers';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

const lineAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
`;

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

const Line = styled.div`
  width: ${rem(40)};
  height: ${rem(2)};
  margin: ${rem(20)} auto ${rem(25)} auto;
  background-color: ${styles.colors.grey};
  animation: ${lineAnimation} 0.5s ease forwards;
  animation-delay: 1s;
  transform: scaleX(0);

  @media ${breakpoints.smUp} {
    width: ${rem(60)};
    height: ${rem(3)};
    margin: ${rem(20)} auto ${rem(25)} auto;
    font-size: ${rem(15)};
  }
`;

export const Main = () => {
  return (
    <MountingOpacityWrapper duration={1}>
      <Wrapper>
        <InnerWrapper>
          <Title>Łukasz Semik</Title>

          <Line />

          <Description>Software Engineer</Description>
        </InnerWrapper>
      </Wrapper>
    </MountingOpacityWrapper>
  );
};
