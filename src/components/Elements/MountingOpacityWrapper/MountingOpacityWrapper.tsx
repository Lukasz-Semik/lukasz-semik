import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div<{ duration: number }>`
  opacity: 0;
  ${({ duration }) => css`
    animation: ${opacityAnimation} ${duration}s ease forwards;
  `};
`;

interface Props {
  duration?: number;
  children: React.ReactNode;
}

export const MountingOpacityWrapper = ({ duration = 0.5, children }: Props) => (
  <Wrapper duration={duration}>{children}</Wrapper>
);
