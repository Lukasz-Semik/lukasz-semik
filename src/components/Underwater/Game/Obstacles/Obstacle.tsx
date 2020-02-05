import React, { useRef, useEffect, useMemo, useState, memo } from 'react';
import { Sprite, Container } from '@inlet/react-pixi';
import gsap from 'gsap';
import { random, times } from 'lodash';

import { useAnimation } from 'src/hooks/useAnimation';
import { Portal } from './Portal';

export const Obstacle = ({
  windowWidth,
  windowHeight,
  isGamePaused,
  onClick,
}) => {
  const containerRef = useRef<Container>(null);
  const spriteRef = useRef<Sprite>(null);
  const tl = useMemo(() => gsap.timeline(), []);
  const [showPortal, setShowPortal] = useState(false);
  const { isReady, resetItem } = useAnimation(tl, isGamePaused);

  useEffect(() => {
    if (containerRef.current && isReady) {
      tl.to(containerRef.current, {
        x: windowWidth + 200,
        y: random(100, windowHeight - 100),
        // width: 0,
        // height: 0,
      })
        .to(containerRef.current, {
          // width: 70,
          // height: 50,
          // delay: random(2, 6),
        })
        .to(containerRef.current, {
          x: random(200, windowWidth - 200),
          duration: 2,
          ease: 'linear',
        })
        .to(containerRef.current, {
          duration: 2,
          rotateY: 90,
          onComplete: () => {
            // resetItem();
            setShowPortal(true);
          },
        })
        .to(spriteRef.current, {
          duration: 2,
          alpha: 0,
          onComplete: () => {
            setShowPortal(false);
            resetItem();
          },
        });
    }
  }, [isReady, tl]);

  return (
    <Container ref={containerRef} width={120} height={70}>
      <Sprite
        ref={spriteRef}
        image="underwater/shark_1.png"
        width={120}
        height={70}
      />

      {/* {showPortal && times(30, i => <Portal key={`portal-${i}`} />)} */}
    </Container>
  );
};
