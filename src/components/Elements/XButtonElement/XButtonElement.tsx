import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

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
