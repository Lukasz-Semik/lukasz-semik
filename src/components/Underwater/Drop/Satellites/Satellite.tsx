import React, { useRef, useEffect, useState, useMemo } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import { DropButton } from '../styled';
import { useAnimationPause } from '../useAnimationPause';

interface DropProps {
  maxOpacity?: number;
}

const Wrapper = styled.div<{ counterRotation: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    rotateZ(${({ counterRotation }) => counterRotation}deg);
`;

const SmallDrop = styled(DropButton).attrs({ 'data-test': 'satellite' })<
  DropProps
>`
  opacity: ${({ maxOpacity }) => maxOpacity || 1};
  border-width: 3px;
  transform: scale(1);
`;

interface Props extends DropProps {
  index: number;
  onClick: () => void;
  renderIndicator: () => React.ReactElement | null;
  counterRotation: number;
}

export const Satellite = ({
  index,
  maxOpacity,
  onClick,
  renderIndicator,
  counterRotation,
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  useAnimationPause(tl);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const getPosition = () => {
      switch (index) {
        case 1:
          return { y: '400%' };
        case 2:
          return { x: '-400%' };
        case 3:
          return { x: '400%' };
        default:
          return { y: '-400%' };
      }
    };

    tl.to(ref.current, {
      ...getPosition(),
      duration: 2.3,
      opacity: 0,
      ease: 'linear',
      onComplete: () => setIsVisible(false),
    });

    return () => {
      tl.kill();
    };
  }, [index, tl]);

  return (
    <Wrapper ref={ref} counterRotation={counterRotation}>
      <SmallDrop
        onClick={() => {
          setIsVisible(false);
          onClick();
        }}
        dropSize={20}
        maxOpacity={maxOpacity}
        isVisible={isVisible}
      />

      {!isVisible && renderIndicator()}
    </Wrapper>
  );
};
