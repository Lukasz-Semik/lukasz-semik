import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import Board from 'src/assets/underwater/board.svg';
import {
  useGetHealthPoints,
  useGetScore,
} from 'src/store/underwater/selectors';
import styles from 'src/styles';
import { SlidingInBouncingElement } from 'src/components/Elements';

import { Pause } from '../Pause/Pause';
import { GameStatistics } from './GameStatistics/GameStatistics';
import { HealthBar } from './HealtBar/HealthBar';

const Wrapper = styled(SlidingInBouncingElement)`
  top: ${rem(10)};
`;

const Panel = styled.div`
  width: ${rem(250)};
  height: ${rem(100)};

  @media ${styles.breakpoints.smUp} {
    width: ${rem(300)};
  }

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface Props {
  resetDrops: () => void;
}

export const MainPanel = ({ resetDrops }: Props) => {
  const healthPoints = useGetHealthPoints();
  const score = useGetScore();
  const isGameOver = healthPoints <= 0;

  return (
    <Wrapper position="left">
      <Panel>
        <Board />

        <InnerWrapper>
          <Pause resetDrops={resetDrops} isGameOver={isGameOver} />

          <HealthBar healthPoints={healthPoints} />

          <GameStatistics score={score} />
        </InnerWrapper>
      </Panel>
    </Wrapper>
  );
};
