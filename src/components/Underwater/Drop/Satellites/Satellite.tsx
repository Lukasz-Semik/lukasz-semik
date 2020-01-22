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
  const containerRef = useRef<Container>(null);
  const spriteRef = useRef<Sprite>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const tl = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    if (containerRef.current && spriteRef.current) {
      tl.to(containerRef.current, {
        ...getNewPosition(index),
        duration: 3,
      }).to(
        spriteRef.current,
        {
          alpha: 0,
          duration: 3,
          onComplete: () => {
            tl.kill();
            setIsCompleted(true);
          },
        },
        '-=3'
      );
    }

    return () => {
      tl.kill();
    };
  }, [index, tl]);

  useAnimationPause(tl, isPaused);

  return isCompleted ? null : (
    <Container ref={containerRef} rotation={rotation}>
      {!isClicked && (
        <Sprite
          ref={spriteRef}
          image="underwater/satellite.png"
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
