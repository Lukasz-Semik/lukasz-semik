import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import { DropButton } from '../styled';

const SmallDrop = styled(DropButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
`;

interface Props {
  index: number;
}

const Satellite = ({ index }: Props) => {
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
  }, [index]);

  return isVisible ? (
    <SmallDrop
      onClick={() => setIsVisible(false)}
      ref={ref}
      dropSize={20}
      isVisible
    />
  ) : null;
};

export default Satellite;
