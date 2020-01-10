import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Sprite, Container } from '@inlet/react-pixi';
import gsap from 'gsap';
import { useAnimationPause } from 'src/hooks/useAnimationPause';

const getNewPosition = (index: number) => {
  switch (index) {
    case 1:
      return { x: -100 };
    case 2:
      return { y: 100 };
    case 3:
      return { y: -100 };
    default:
      return { x: 100 };
  }
};

interface Props {
  index: number;
  isPaused: boolean;
  onClick: () => void;
  rotation: number;
  renderIndicator?: () => React.ReactElement;
}

export const Satellite = ({
  index,
  isPaused,
  onClick,
  renderIndicator,
  rotation,
}: Props) => {
  const ref = useRef<Sprite>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const tl = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    if (ref.current) {
      tl.to(ref.current, {
        ...getNewPosition(index),
        alpha: 0,
        duration: 3,
        onComplete: () => {
          gsap.killTweensOf(ref.current);
          setIsCompleted(true);
        },
      });
    }

    return () => {
      tl.kill();
    };
  }, [index, tl]);

  useAnimationPause(tl, isPaused);

  return isCompleted ? null : (
    <Container ref={ref} rotation={rotation}>
      {!isClicked && (
        <Sprite
          image="satellite.png"
          cursor="pointer"
          pointerdown={() => {
            onClick();
            setIsClicked(true);
            tl.kill();
          }}
          interactive
        />
      )}

      {renderIndicator && isClicked && renderIndicator()}
    </Container>
  );
};
