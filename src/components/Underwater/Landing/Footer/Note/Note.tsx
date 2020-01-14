import React, { useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import gsap from 'gsap';

import styles from 'src/styles';

import { OPACITY, DELAY } from '../constants';

const Text = styled.p`
  padding: 0;
  font-size: ${rem(20)};
  opacity: 0;
  transform: translateX(100%);

  @media ${styles.breakpoints.smUp} {
    font-size: ${rem(30)};
  }
`;

export const Note = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    if (ref.current) {
      tl.to(ref.current, {
        opacity: 0.5,
        x: -10,
        delay: DELAY,
        duration: 0.5,
      }).to(ref.current, {
        opacity: OPACITY,
        x: 0,
        duration: 0.5,
      });
    }
  }, [tl]);

  return <Text ref={ref}>Lukasz Semik&#174; {new Date().getFullYear()}</Text>;
};
