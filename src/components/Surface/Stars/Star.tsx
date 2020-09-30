import React, { useMemo } from 'react';
import { random } from 'lodash';
import styled from 'styled-components';

import styles from 'src/styles';

interface ElementProps {
  topPosition: number;
  leftPosition: number;
  isVisible: boolean;
}

const Element = styled.div.attrs(
  ({ topPosition, leftPosition }: ElementProps) => ({
    style: {
      top: `${topPosition}px`,
      left: `${leftPosition}px`,
    },
  })
)<ElementProps>`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: ${styles.colors.white};
  border-radius: 50%;
  pointer-events: none;
  opacity: ${({ isVisible }) => (isVisible ? 0.2 : 0)};
  transition: opacity 2s ease;
`;

interface Props {
  windowWidth: number;
  windowHeight: number;
  isVisible: boolean;
}

export const Star = ({ windowWidth, windowHeight, isVisible }: Props) => {
  const top = useMemo(() => random(0, windowHeight * 0.6 || 0), [windowHeight]);

  const left = useMemo(() => random(0, windowWidth || 0), [windowWidth]);

  return (
    <Element isVisible={isVisible} topPosition={top} leftPosition={left} />
  );
};
