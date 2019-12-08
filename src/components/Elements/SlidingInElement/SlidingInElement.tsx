import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

const slideIn = (position: string) => keyframes`
    0% {
      ${position}: -100%;
    }
    60% {
      ${position}: ${rem(40)};
    }
    70% {
      ${position}: 0;
    }
    80% {
      ${position}: ${rem(3)};
    }
    85% {
      ${position}: 0;
    }
    90% {
      ${position}: ${rem(2)};
    }
    95% {
      ${position}: 0;
    }
    100% {
      ${position}: ${rem(1)};
    }
`;

const Wrapper = styled.div<{ slidingPosition: string }>`
  position: absolute;
  animation: ${({ slidingPosition }) => slideIn(slidingPosition)} 1s ease
    forwards;
`;

interface Props {
  children: React.ReactNode | React.ReactNode[];
  position: string;
  className?: string;
}

const SlindingInWrapper = ({ children, className, position }: Props) => (
  <Wrapper slidingPosition={position} className={className}>
    {children}
  </Wrapper>
);

export default SlindingInWrapper;
