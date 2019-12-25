import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

// @ts-ignore TODO: resolve problem with imports of svg
import Fish from 'src/assets/fish.svg';
import styles from 'src/styles';

const Wrapper = styled.div<{ fishPosition: number }>`
  position: absolute;
  top: ${rem(20)};
  left: ${rem(68)};
  width: 70%;

  svg {
    position: absolute;
    top: 50%;
    right: ${({ fishPosition }) => (fishPosition ? `${fishPosition}%` : 0)};
    width: ${rem(40)};
    height: 100%;
    transform: translateY(-50%);
    transition: right 0.3s linear;
  }
`;

const Bar = styled.div`
  position: relative;
  top: ${rem(10)};
  height: ${rem(10)};
  border-radius: ${rem(19)};
  background-color: ${styles.colors.hpGreen};
  opacity: 0.6;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
`;

export const HealthBar = ({ healthPoints }) => {
  const position = 100 - healthPoints;

  return (
    <Wrapper fishPosition={position}>
      <Fish />
      <Bar />
    </Wrapper>
  );
};
