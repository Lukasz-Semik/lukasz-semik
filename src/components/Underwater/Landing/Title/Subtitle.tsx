import React, { useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import gsap from 'gsap';

import styles from 'src/styles';

const TitleText = styled.h2`
  font-size: ${rem(20)};
  letter-spacing: 1px;
  text-align: center;
  text-shadow: ${styles.shadows.textBasic};
  color: ${styles.colors.grey};
  opacity: 0;
  transform: translateY(100%);

  @media ${styles.breakpoints.xsUp} {
    font-size: ${rem(30)};
  }
`;

export const Subtitle = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    tl.to(ref.current, {
      opacity: 0.7,
      duration: 1,
      delay: 2,
      y: 0,
    });
  });

  return <TitleText ref={ref}>Frontend Dev</TitleText>;
};