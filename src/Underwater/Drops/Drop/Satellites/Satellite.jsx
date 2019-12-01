import React, { useRef, useEffect } from 'react';
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

const Satellite = ({ index }) => {
  const ref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    const getPosition = () => {
      switch (index) {
        case 1:
          return { top: '200%' };
        case 2:
          return { left: '-100%' };
        case 3:
          return { left: '200%' };
        default:
          return { top: '-100%' };
      }
    };

    tl.to(ref.current, {
      ...getPosition(),
      duration: 2,
      ease: 'linear',
    });
  }, [index]);

  return <SmallDrop ref={ref} dropSize={20} isVisible />;
};

export default Satellite;
