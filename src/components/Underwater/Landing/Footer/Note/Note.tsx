import React, { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';

import { DELAY, OPACITY } from '../constants';

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

  return <Text ref={ref}>Łukasz Semik&#174; {new Date().getFullYear()}</Text>;
};
