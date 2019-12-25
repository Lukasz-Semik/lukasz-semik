import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

// @ts-ignore TODO: resolve problem with imports of svg
import Fish from 'src/assets/fish.svg';
import styles from 'src/styles';
import { HEALTH_POINTS_STARTER } from 'src/constants/underwater';

const fishWidth = 40;

const getPosition = (position?: number) => {
  if (!position) {
    return 0;
  }

  if (position < 90) {
    return `${position}%`;
  }

  return `right: calc(100% - ${rem(fishWidth)})`;
};

const Wrapper = styled.div<{ fishPosition: number }>`
  position: absolute;
  top: ${rem(20)};
  left: ${rem(68)};
  width: 70%;

  svg {
    position: absolute;
    top: 50%;
    right: ${({ fishPosition }) => getPosition(fishPosition)};
    width: ${rem(fishWidth)};
    height: 100%;
    transform: translateY(-50%);
    transition: right 0.3s linear;
  }
`;

const Bar = styled.div<{ isWarning: boolean; isDanger: boolean }>`
  position: relative;
  top: ${rem(10)};
  height: ${rem(10)};
  border-radius: ${rem(19)};
  background-color: ${styles.colors.hpGreen};
  opacity: 0.6;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;

  ${({ isWarning }) =>
    isWarning && `background-color: ${styles.colors.hpYellow}`};
  ${({ isDanger }) => isDanger && `background-color: ${styles.colors.hpRed}`};
`;

interface Props {
  healthPoints: number;
}

export const HealthBar = ({ healthPoints }: Props) => {
  const healthDiff = HEALTH_POINTS_STARTER - healthPoints;

  const position = (healthDiff * 100) / HEALTH_POINTS_STARTER;
  const isDanger = healthDiff >= 60;
  const isWarning = healthDiff >= 30;

  return (
    <Wrapper fishPosition={position}>
      <Fish />
      <Bar isWarning={isWarning} isDanger={isDanger} />
    </Wrapper>
  );
};