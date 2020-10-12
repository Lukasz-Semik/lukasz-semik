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

const Wrapper = styled.div<{ duration: number; delay: number }>`
  opacity: 0;
  ${({ duration }) => css`
    animation: ${opacityAnimation} ${duration}s ease forwards;
  `};
  animation-delay: ${({ delay }) => `${delay}s`};
`;

interface Props {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

export const MountingOpacityWrapper = ({
  duration = 0.5,
  delay = 0,
  children,
}: Props) => (
  <Wrapper delay={delay} duration={duration}>
    {children}
  </Wrapper>
);
