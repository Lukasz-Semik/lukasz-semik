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
  transform: translateY(-${rem(70)});
`;

const Name = styled.h2`
  margin-bottom: ${rem(20)};
  font-family: ${styles.fonts.uniq};
  font-size: ${rem(40)};
  letter-spacing: 2px;
  text-align: center;

  @media ${breakpoints.smUp} {
    font-size: ${rem(80)};
  }
`;

const Subtitle = styled.h3`
  font-size: ${rem(15)};
  text-transform: uppercase;
  text-align: center;
  color: ${styles.colors.grey};

  @media ${breakpoints.smUp} {
    font-size: ${rem(20)};
  }
`;

const Description = styled.p`
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
  margin: ${rem(10)} auto ${rem(15)} auto;
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
    <Wrapper>
      <InnerWrapper>
        <MountingOpacityWrapper duration={1}>
          <Name>Łukasz Semik</Name>
          <Subtitle>Software Engineer</Subtitle>

          <Line />

          <Description>Web Development</Description>
        </MountingOpacityWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
