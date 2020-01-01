import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';
import styles from 'src/styles';

const animation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-300%);
  }
`;

const Wrapper = styled.span.attrs({ 'data-test': 'points-indicator' })`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${rem(30)};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  color: ${styles.colors.hpGreen};
  animation: ${animation} 1s forwards;
`;

interface Props {
  value: string;
}

export const PointsIndicator = ({ value }: Props) => {
  return <Wrapper>{value}</Wrapper>;
};
