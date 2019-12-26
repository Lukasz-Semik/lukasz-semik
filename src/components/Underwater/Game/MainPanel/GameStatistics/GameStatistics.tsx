import React from 'react';
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

export const GameStatistics = () => {
  return (
    <Wrapper>
      <Diamond />
      <Counter>x 1</Counter>
    </Wrapper>
  );
};
