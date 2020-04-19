import React, { useRef, useEffect, useMemo, memo } from 'react';
import { Sprite } from '@inlet/react-pixi';
import gsap from 'gsap';
import { random } from 'lodash';

import { useAnimation } from 'src/hooks/useAnimation';

interface Props {
  windowWidth: number;
  windowHeight: number;
  isGamePaused: boolean;
  onClick: () => void;
}

export const HealthPointAdder = memo(
  ({ windowWidth, windowHeight, isGamePaused, onClick }: Props) => {
    const ref = useRef<Sprite>(null);
    const tl = useMemo(() => gsap.timeline(), []);
    const { isReady, resetItem, isClicked, setIsClicked } = useAnimation(
      tl,
      isGamePaused
    );

    useEffect(() => {
      if (ref.current && isReady) {
        tl.to(ref.current, {
          width: 0,
          height: 0,
          duration: 0,
        })
          .to(ref.current, {
            x: random(60, windowWidth - 60),
            y: random(200, windowHeight - 60),
            duration: 0,
            delay: random(0, 20),
          })
          .to(ref.current, {
            visible: true,
            width: 40,
            height: 40,
            duration: 0.5,
          })
          .to(ref.current, {
            visible: true,
            duration: 3,
          })
          .to(ref.current, {
            width: 0,
            height: 0,
            duration: 0.5,
          })
          .to(ref.current, {
            visible: false,
            duration: 0,
            onComplete: () => {
              resetItem();
            },
          });
      }
    }, [tl, windowHeight, windowWidth, isReady, resetItem]);

    return (
      <Sprite
        ref={ref}
        visible={isReady && !isClicked}
        image="underwater/heart.png"
        alpha={0.8}
        anchor={0.5}
        cursor="pointer"
        pointerdown={() => {
          onClick();
          setIsClicked(true);
        }}
        interactive
      />
    );
  }
);
