import React, { useRef, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { size, rem } from 'polished';
import { random, floor } from 'lodash';
import gsap from 'gsap';

import { useAnimationKill } from '../useAnimationKill';

const BASE_SPEED_ROAD = 880;

export const Wrapper = styled.div<{
  dropSize: number;
  leftPosition: number;
}>`
  ${({ dropSize }) => size(rem(dropSize))};
  position: absolute;
  top: 80%;
  left: ${({ leftPosition }) => leftPosition}%;
  pointer-events: none;
`;

interface Props {
  dropSize: number;
  isMounted: boolean;
  onSwimEnd: () => void;
  children: React.ReactNode;
}

export const SwimmingWrapper = ({
  children,
  dropSize,
  isMounted,
  onSwimEnd,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const leftPosition = useMemo(() => random(5, 90), []);
  const tl = useMemo(() => gsap.timeline(), []);

  useAnimationKill(tl);

  useEffect(() => {
    if (isMounted && ref.current) {
      const windowHeight = window.innerHeight;

      const firstStageDuration = floor((windowHeight * 8) / BASE_SPEED_ROAD, 2);
      const secondStageDuration = floor(windowHeight / BASE_SPEED_ROAD, 2);

      tl.to(ref.current, {
        y: `${-windowHeight * 0.7}px`,
        ease: 'linear',
        duration: 5,
      }).to(ref.current, {
        y: `${-windowHeight}px`,
        opacity: 0.3,
        ease: 'linear',
        duration: 2,
        onComplete: onSwimEnd,
      });
    }

    return () => {
      tl.kill();
    };

    // ONLY after mounting animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  return (
    <Wrapper ref={ref} dropSize={dropSize} leftPosition={leftPosition}>
      {children}
    </Wrapper>
  );
};
