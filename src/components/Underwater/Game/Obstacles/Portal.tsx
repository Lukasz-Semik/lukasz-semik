import React, { useRef, useEffect, useMemo, useState, memo } from 'react';
import { Sprite, Container } from '@inlet/react-pixi';
import gsap from 'gsap';
import { random, times } from 'lodash';

import { useAnimation } from 'src/hooks/useAnimation';

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

export const Portal = memo(
  ({ windowWidth, windowHeight, isGamePaused, onClick }) => {
    const ref = useRef<Sprite>(null);
    const tl = useMemo(() => gsap.timeline({ repeat: 1 }), []);
    const { isReady, resetItem } = useAnimation(tl, isGamePaused);

    const imgSrc = useMemo(() => imgs[random(0, imgs.length - 1)], []);

    useEffect(() => {
      if (ref.current && isReady) {
        tl.to(ref.current, {
          x: random(0, 120),
          y: random(0, 70),
          width: 0,
          height: 0,
          alpha: 0,
        })
          .to(ref.current, {
            delay: random(0, 2, true),
            duration: 1,
            width: 30,
            height: 30,
            alpha: 0.7,
          })
          .to(ref.current, {
            alpha: 0,
            duration: 0.3,
          });
      }
    }, [tl, isReady]);

    return (
      <Sprite
        image="underwater/drop.png"
        // key={`boiling-drop-${i}`}
        ref={ref}
        anchor={0.5}
      />
    );
  }
);
