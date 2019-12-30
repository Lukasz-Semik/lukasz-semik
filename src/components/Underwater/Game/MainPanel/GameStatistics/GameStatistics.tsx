import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import styles from 'src/styles';

const Wrapper = styled.div`
  position: absolute;
  top: ${rem(50)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
`;

const Diamond = styled.div`
  width: ${rem(22)};
  height: ${rem(22)};
  margin-right: ${rem(10)};
  background: ${styles.colors.darkViolet};
  background: ${styles.colors.violetGradient};
  border: 4px solid ${styles.colors.violet};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  transform: rotateZ(45deg);
`;

const Counter = styled.span`
  font-size: ${rem(25)};
  color: ${styles.colors.goldDark};
`;

const Value = styled.span<{ isAdding: boolean }>`
  display: inline-block;
  transform: ${({ isAdding }) => `scale(${isAdding ? 1.5 : 1})`};
  transition: transform 0.2s ease;
`;

interface Props {
  score: number;
}

export const GameStatistics = ({ score }: Props) => {
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (score) {
      setIsAdding(true);
    }
  }, [score]);

  return (
    <Wrapper>
      <Diamond />
      <Counter onTransitionEnd={() => setIsAdding(false)}>
        x <Value isAdding={isAdding}>{score}</Value>
      </Counter>
    </Wrapper>
  );
};
