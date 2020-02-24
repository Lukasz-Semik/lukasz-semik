import React, { useRef, useEffect, useMemo, useState, memo } from 'react';
import { Sprite, Container } from '@inlet/react-pixi';
import gsap from 'gsap';
import { random, times } from 'lodash';

import { useAnimation } from 'src/hooks/useAnimation';
import { PointsIndicator } from '../../PointsIndicator/PointsIndicator';

const sides = ['l', 'r'];

interface Props {
  windowWidth: number;
  windowHeight: number;
  isGamePaused: boolean;
  onClick: () => void;
  name: string;
  width: number;
  height: number;
}

export const Obstacle = memo(
  ({
    windowWidth,
    windowHeight,
    isGamePaused,
    name,
    width,
    height,
    onClick,
  }: Props) => {
    const [clicks, setClicks] = useState(0);
    const containerRef = useRef<Container>(null);
    const spriteRef = useRef<Sprite>(null);
    const tl = useMemo(() => gsap.timeline(), []);
    const { isReady, resetItem } = useAnimation(tl, isGamePaused);
    const side = useMemo(() => sides[random(0, 1)], []);
    const path = `underwater/obstacles/${name}_${side}.png`;

    useEffect(() => {
      const xStartPosition = width / 2;

      if (containerRef.current) {
        if (isReady) {
          tl.to(containerRef.current, {
            alpha: 0,
            duration: 0,
          })
            .to(containerRef.current, {
              x: random(xStartPosition, windowWidth - xStartPosition),
              y: random(180, windowHeight - 150),
              delay: random(0, 20, true),
              ease: 'linear',
              alpha: 1,
              visible: true,
              duration: 0,
            })
            .to(containerRef.current, {
              duration: 8,
              onComplete: () => {
                resetItem();
              },
            });
        } else {
          gsap.to(containerRef.current, {
            visible: false,
            duration: 0,
          });
        }
      }
    }, [isReady, tl, resetItem]);

    return (
      <Container ref={containerRef} width={120} height={70}>
        <Sprite
          ref={spriteRef}
          image={path}
          width={width}
          height={height}
          anchor={0.5}
          interactive
          pointerdown={() => {
            setClicks(clicks + 1);
            setTimeout(() => {
              onClick();
            }, 100);
          }}
        />

        {times(clicks, index => (
          <PointsIndicator
            key={`obstacle-indicator-${index}`}
            value="-5"
            isPaused={isGamePaused}
            isDanger
          />
        ))}
      </Container>
    );
  }
);
