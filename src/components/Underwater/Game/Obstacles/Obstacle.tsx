import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Container, Sprite } from '@inlet/react-pixi';
import gsap from 'gsap';
import { random, times } from 'lodash';

import { useAnimation } from 'src/hooks/useAnimation';

import { PointsIndicator } from '../../PointsIndicator/PointsIndicator';

interface Props {
  windowWidth: number;
  windowHeight: number;
  isGamePaused: boolean;
  onClick: () => void;
  path: string;
  width: number;
  height: number;
}

export const Obstacle = memo(
  ({
    windowWidth,
    windowHeight,
    isGamePaused,
    path,
    width,
    height,
    onClick,
  }: Props) => {
    const [clicks, setClicks] = useState(0);
    const containerRef = useRef<Container>(null);
    const spriteRef = useRef<Sprite>(null);
    const tl = useMemo(() => gsap.timeline(), []);
    const tl2 = useMemo(() => gsap.timeline(), []);
    const { isReady, resetItem } = useAnimation(tl, isGamePaused);

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
              visible: true,
              duration: 0,
            })
            .to(containerRef.current, {
              duration: 0.4,
              alpha: 1,
            })
            .to(containerRef.current, {
              duration: 4,
            })
            .to(containerRef.current, {
              alpha: 0,
              duration: 0.4,
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

            tl2
              .to(spriteRef.current, {
                angle: 30,
                duration: 0.05,
              })
              .to(spriteRef.current, {
                angle: -30,
                duration: 0.05,
              })
              .to(spriteRef.current, {
                angle: 0,
                duration: 0.05,
              });
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
