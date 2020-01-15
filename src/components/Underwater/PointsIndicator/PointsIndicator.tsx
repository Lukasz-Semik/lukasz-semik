import React, { useRef, useEffect, useMemo } from 'react';
import { Text } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';
import gsap from 'gsap';

import styles from 'src/styles';
import { useAnimationPause } from 'src/hooks/useAnimationPause';

interface Props {
  value: string;
  isPaused: boolean;
  size?: number;
  x?: number;
  y?: number;
}

export const PointsIndicator = ({
  value,
  isPaused,
  size = 25,
  x = 0,
  y = 0,
}: Props) => {
  const ref = useRef<Text>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    if (ref.current) {
      tl.to(ref.current, {
        x,
        y,
      }).to(ref.current, {
        y: -50,
        alpha: 0,
        duration: 0.7,
        ease: 'linear',
      });
    }

    return () => {
      tl.kill();
    };
  }, [tl, x, y]);

  useAnimationPause(tl, isPaused);

  return (
    <Text
      ref={ref}
      text={value}
      style={
        new TextStyle({
          fontSize: size,
          dropShadow: true,
          dropShadowColor: '#000',
          dropShadowBlur: 4,
          dropShadowDistance: 1,
          fill: styles.colors.hpGreen,
          fontFamily: styles.fonts.uniq,
        })
      }
      isSprite
    />
  );
};
