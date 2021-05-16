import React from 'react';
import { rem } from 'polished';
import styled, { keyframes } from 'styled-components';

import { appContent } from 'src/constants/content';
import { useView } from 'src/hooks/useView';
import styles from 'src/styles';

import { GoUpButton } from '../GoUpButton/GoUpButton';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  pointer-events: none;
  transform: translate(-50%, -50%);

  button {
    pointer-events: all;
  }
`;

const titleAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1)
  }
`;

const WavingTitle = styled.h2`
  margin: 0;
  margin-bottom: ${rem(120)};
  letter-spacing: 1px;
  text-align: center;
  font-size: ${rem(57)};
  opacity: 0;
  transform: scale(0.9);
  animation: ${titleAnimation} 1s ease-in-out forwards;
  animation-delay: 1s;

  @media ${styles.breakpoints.xsUp} {
    margin-bottom: ${rem(100)};
    font-size: ${rem(93)};
  }

  @media ${styles.breakpoints.mdUp} {
    font-size: ${rem(120)};
  }

  @media ${styles.breakpoints.lgUp} {
    font-size: ${rem(150)};
  }
`;

const hintAnimation = keyframes`
   from {
    opacity: 0;
  }

  to {
    opacity: 0.4;
  }
`;

const Hint = styled.p`
  padding-top: ${rem(15)};
  font-family: ${styles.fonts.standard};
  font-weight: 900;
  font-size: ${rem(14)};
  color: ${styles.colors.black};
  opacity: 0;
  animation: ${hintAnimation} 1s ease-in-out forwards;
  animation-delay: 4s;
  transform: translateY(20%);
`;

export const Title = () => {
  const { goUp } = useView();

  return (
    <Wrapper>
      <WavingTitle>{appContent.underwater.title()}</WavingTitle>

      <GoUpButton onViewGoUp={goUp} />

      <Hint>{appContent.underwater.clickDrop()}</Hint>
    </Wrapper>
  );
};
