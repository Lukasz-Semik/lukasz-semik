import React, { useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import gsap from 'gsap';

import styles from 'src/styles';

const TitleText = styled.h2`
  font-size: ${rem(12)};
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  font-family: ${styles.fonts.cairo};
  color: ${styles.colors.grey};
  opacity: 0;
  transform: translateY(100%);

  @media ${styles.breakpoints.xsUp} {
    font-size: ${rem(15)};
  }
`;

export const Subtitle = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    tl.to(ref.current, {
      opacity: 1,
      duration: 1,
      delay: 2,
      y: 0,
    });
  });

  return <TitleText ref={ref}>Frontend Dev</TitleText>;
};
