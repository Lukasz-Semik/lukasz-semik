import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { rem } from 'polished';
import styled from 'styled-components';

import { useRwdQuery } from 'src/hooks/useMediaQuery';
import styles from 'src/styles';

const LetterStyled = styled.span<{
  hasMarginRight?: boolean;
  topPosition: number;
}>`
  position: relative;
  display: inline-block;
  text-shadow: ${styles.shadows.textBasic};
  opacity: 0;
  transform: translateY(-${({ topPosition }) => topPosition}%);

  ${({ hasMarginRight }) => hasMarginRight && `margin-right: ${rem(20)}`};
`;

interface Letter {
  value: string;
  hasMarginRight: boolean;
}

interface Props {
  letter: Letter;
  index: number;
}

export const Letter = ({ letter, index }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { isMediaMd } = useRwdQuery();
  const topPosition = isMediaMd ? 8 : 20;

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (!isMounted) {
      gsap.to(ref.current, {
        opacity: 0.7,
        delay: 0.2 * index,
        duration: 1,
        y: `${topPosition}%`,
        onComplete: () => setIsMounted(true),
      });
    } else {
      const tl = gsap.timeline({ repeat: -1 });

      const getAnimationConfig = (hasNegative?: boolean) => ({
        y: `${hasNegative ? '-' : ''}${topPosition}%`,
        duration: 1.8,
        ease: 'cubic-bezier(.39,.58,.77,.74)',
      });

      tl.to(ref.current, getAnimationConfig(true)).to(
        ref.current,
        getAnimationConfig()
      );
    }

    const refToClear = ref.current;

    return () => gsap.killTweensOf(refToClear || '');
  }, [isMounted, index, topPosition]);

  return (
    <LetterStyled
      topPosition={topPosition}
      hasMarginRight={letter.hasMarginRight}
      ref={ref}
    >
      {letter.value}
    </LetterStyled>
  );
};
