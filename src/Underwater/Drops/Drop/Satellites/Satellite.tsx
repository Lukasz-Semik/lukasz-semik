import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import { useUnderwaterState, GameState } from 'src/Underwater/underwaterState';

import { DropButton } from '../styled';

interface DropProps {
  maxOpacity?: number;
}

const SmallDrop = styled(DropButton)<DropProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${({ maxOpacity }) => maxOpacity || 1};
  border-width: 3px;
  transform: translate(-50%, -50%) scale(1);
`;

interface Props extends DropProps {
  index: number;
}

const Satellite = ({ index, maxOpacity }: Props) => {
  const { gameState } = useUnderwaterState();
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const tl = gsap.timeline();

    const getPosition = () => {
      switch (index) {
        case 1:
          return { top: '300%' };
        case 2:
          return { left: '-200%' };
        case 3:
          return { left: '300%' };
        default:
          return { top: '-200%' };
      }
    };

    tl.to(ref.current, {
      ...getPosition(),
      duration: 2,
      opacity: 0.3,
      ease: 'linear',
      onComplete: () => setIsVisible(false),
    });

    return () => {
      tl.kill();
    };
  }, [index]);

  return isVisible ? (
    <SmallDrop
      onClick={() => setIsVisible(false)}
      ref={ref}
      dropSize={20}
      maxOpacity={gameState === GameState.Intro ? maxOpacity : undefined}
      isVisible
    />
  ) : null;
};

export default Satellite;
