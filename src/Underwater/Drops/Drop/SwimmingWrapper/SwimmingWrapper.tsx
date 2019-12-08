import React, { useRef, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { size, rem } from 'polished';
import { random, floor } from 'lodash';
import gsap from 'gsap';

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

const SwimmingWrapper = ({
  children,
  dropSize,
  isMounted,
  onSwimEnd,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const leftPosition = useMemo(() => random(5, 90), []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (isMounted && ref.current) {
      const windowHeight = window.innerHeight;

      const firstStageDuration = floor((windowHeight * 8) / BASE_SPEED_ROAD, 2);
      const secondStageDuration = floor(windowHeight / BASE_SPEED_ROAD, 2);

      tl.to(ref.current, {
        top: '10%',
        ease: 'linear',
        duration: firstStageDuration,
      }).to(ref.current, {
        top: 0,
        opacity: 0.3,
        ease: 'linear',
        duration: secondStageDuration,
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

export default SwimmingWrapper;
