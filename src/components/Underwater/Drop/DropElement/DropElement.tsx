import React, { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';

import { DropButton } from '../styled';
import { useAnimationPause } from '../useAnimationPause';

export const DropElement = ({
  onShowEnd,
  isSwimming,
  delay,
  dropSize,
  maxOpacity,
  isVisible,
  onClick,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  useAnimationPause(tl);

  useEffect(() => {
    if (!isSwimming) {
      tl.to(ref.current, {
        scale: 0,
        opacity: 0,
      })
        .to(ref.current, {
          scale: 1.5,
          opacity: maxOpacity / 2,
          duration: 0.3,
          delay,
        })
        .to(ref.current, {
          scale: 1,
          opacity: maxOpacity,
          duration: 0.3,
          onComplete: onShowEnd,
        });
    }

    // react only on isSwimming
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSwimming]);

  useEffect(() => {
    return () => {
      tl.kill();
    };
  }, [tl]);

  return (
    <DropButton
      ref={ref}
      dropSize={dropSize}
      isVisible={isVisible}
      onClick={onClick}
      hasSparkle
    />
  );
};
