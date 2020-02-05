import React, { useRef, useEffect, useMemo, useState, memo } from 'react';
import { Sprite, Container } from '@inlet/react-pixi';
import gsap from 'gsap';
import { random, times } from 'lodash';

import { useAnimation } from 'src/hooks/useAnimation';
import { Portal } from './Portal';

const imgs = [
  'batiscaf',
  'fish_1',
  'fish_2',
  'fish_wide',
  'shark_1',
  'shark_2',
  'shark_3',
  'squid',
];

export const Obstacles = memo(
  ({ windowWidth, windowHeight, isGamePaused, onClick }) => {
    const ref = useRef<Sprite>(null);
    const tl = useMemo(() => gsap.timeline(), []);
    const { isReady, resetItem } = useAnimation(tl, isGamePaused);

    const imgSrc = useMemo(() => imgs[random(0, imgs.length - 1)], []);

    useEffect(() => {
      if (ref.current && isReady) {
        tl.to(ref.current, {
          // x: 50,
          // y: 50,/
          // width: 100,
          // height: 100,
          alpha: 0,
        }).to(ref.current, {
          // delay: random(0, 2, true),
          delay: 2,
          duration: 3,
          // width: 100,
          // height: 100,
          alpha: 1,
        });
        // tl.to(ref.current, {
        //   x: windowWidth + 200,
        //   y: random(100, windowHeight - 100),
        //   width: 0,
        //   height: 0,
        // })
        //   .to(ref.current, {
        //     width: 70,
        //     height: 50,
        //     delay: random(2, 6),
        //   })
        //   .to(ref.current, {
        //     x: random(200, windowWidth - 200),
        //     duration: 6,
        //     ease: 'linear',
        //   })
        //   .to(ref.current, {
        //     duration: 6,
        //     onComplete: () => {
        //       resetItem();
        //     },
        //   });
      }
    }, [tl, isReady]);

    return (
      <Container x={300} y={300} width={200} height={200}>
        <Sprite
          visible={isReady}
          ref={ref}
          image={`underwater/${imgSrc}.png`}
          anchor={0.5}
        />
        {times(20, i => (
          <Portal key={`portal-${i}`} />
        ))}
      </Container>
    );
  }
);
