import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';

interface ButtonProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  fontSize?: number;
}

const Button = styled.button.attrs({ 'data-test': 'close-button' })<
  ButtonProps
>`
  position: absolute;
  font-size: ${({ fontSize }) => rem(fontSize || 35)};
  font-family: ${styles.fonts.uniq};

  ${({ top }) => top && `top: ${top}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ left }) => left && `left: ${left}`};
`;

interface Props extends ButtonProps {
  onClick: () => void;
}

export const XButtonElement = ({
  onClick,
  top,
  right,
  bottom,
  left,
  fontSize,
}: Props) => (
  <Button
    fontSize={fontSize}
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    onClick={onClick}
  >
    x
  </Button>
);
