import React, { useRef, useEffect, useState, useMemo } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import { DropButton } from '../styled';
import { useAnimationPause } from '../useAnimationPause';

interface DropProps {
  maxOpacity?: number;
}

const SmallDrop = styled(DropButton).attrs({ 'data-test': 'satellite' })<
  DropProps
>`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${({ maxOpacity }) => maxOpacity || 1};
  border-width: 3px;
  transform: translate(-50%, -50%) scale(1);
`;

interface Props extends DropProps {
  index: number;
  onClick: () => void;
}

export const Satellite = ({ index, maxOpacity, onClick }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLButtonElement>(null);
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
    <SmallDrop
      onClick={() => {
        setIsVisible(false);
        onClick();
      }}
      ref={ref}
      dropSize={20}
      maxOpacity={maxOpacity}
      isVisible={isVisible}
    />
  );
};
