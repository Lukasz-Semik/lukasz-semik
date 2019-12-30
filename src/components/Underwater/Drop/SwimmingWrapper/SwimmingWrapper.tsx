import React, { useRef, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { size, rem } from 'polished';
import gsap from 'gsap';

import { getWindowHeight } from 'src/helpers/utils';

import { useAnimationPause } from '../useAnimationPause';

// TODO: improve speed for different devices
// const BASE_SPEED_ROAD = 880;

export const Wrapper = styled.div<{
  dropSize: number;
  y: number;
  x: number;
}>`
  ${({ dropSize }) => size(rem(dropSize))};
  position: absolute;
  left: ${({ x }) => `${x}%`};
  pointer-events: none;
  transform: ${({ y }) => `translateY(${y}px)`};
`;

interface Props {
  dropSize: number;
  isSwimming: boolean;
  onSwimEnd: () => void;
  positionX: number;
  children: React.ReactNode;
}

export const SwimmingWrapper = ({
  children,
  isSwimming,
  positionX,
  onSwimEnd,
  dropSize,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  const windowHeight = getWindowHeight();
  const startingY = windowHeight * 0.8;

  useAnimationPause(tl);

  useEffect(() => {
    if (isSwimming) {
      tl.to(ref.current, {
        y: `${windowHeight * 0.1}px`,
        ease: 'linear',
        duration: 5,
      })
        .to(ref.current, {
          y: 0,
          ease: 'linear',
          opacity: 0,
          duration: 0.5,
          onComplete: onSwimEnd,
        })
        .to(ref.current, {
          y: startingY,
          opacity: 1,
        });
    }

    // react only on isSwimming
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSwimming]);

  useEffect(() => {
    return () => {
      tl.kill();
    };
  }, [tl]);

  return (
    <Wrapper ref={ref} dropSize={dropSize} x={positionX} y={startingY}>
      {children}
    </Wrapper>
  );
};
