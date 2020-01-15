import React, { useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import gsap from 'gsap';

import styles from 'src/styles';

const Wrapper = styled.p`
  padding: 0;
  font-size: ${rem(30)};
  text-shadow: ${styles.shadows.textBasic};
  opacity: 0.8;
`;

const Letter = styled.span`
  display: inline-block;
  opacity: 0;
`;

const Brace = styled.span`
  display: inline-block;
  opacity: 0;
  transform: scale(1.2);
`;

export const Logo = () => {
  const letterRef1 = useRef<HTMLSpanElement>(null);
  const letterRef2 = useRef<HTMLSpanElement>(null);
  const braceRef1 = useRef<HTMLSpanElement>(null);
  const braceRef2 = useRef<HTMLSpanElement>(null);

  const tl = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    if (letterRef1.current) {
      tl.to(letterRef1.current, {
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: 'linear',
      })
        .to(letterRef2.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'linear',
        })
        .to(braceRef1.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        })
        .to(
          braceRef2.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
          },
          '-=0.5'
        );
    }
  }, [tl]);

  return (
    <Wrapper>
      <Brace ref={braceRef1}>{`{`}</Brace>
      <Letter ref={letterRef1}>Ł</Letter>
      <Letter ref={letterRef2}>S</Letter>
      <Brace ref={braceRef2}>{`}`}</Brace>
    </Wrapper>
  );
};
