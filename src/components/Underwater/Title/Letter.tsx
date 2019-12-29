import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { rem } from 'polished';

const topPosition = 20;

const LetterStyled = styled.span<{ hasMarginRight?: boolean }>`
  position: relative;
  display: inline-block;
  opacity: 0;
  transform: translateY(-${rem(20)});

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

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (!isMounted) {
      gsap.to(ref.current, {
        opacity: 0.7,
        delay: 0.2 * index,
        duration: 1,
        y: rem(topPosition),
        onComplete: () => setIsMounted(true),
      });
    } else {
      const tl = gsap.timeline({ repeat: -1 });

      const getAnimationConfig = (hasNegative?: boolean) => ({
        y: `${hasNegative ? '-' : ''}${rem(topPosition)}`,
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
  }, [isMounted, index]);

  return (
    <LetterStyled hasMarginRight={letter.hasMarginRight} ref={ref}>
      {letter.value}
    </LetterStyled>
  );
};
