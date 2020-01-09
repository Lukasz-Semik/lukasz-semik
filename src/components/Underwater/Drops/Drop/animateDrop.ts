import { Container, Sprite } from '@inlet/react-pixi';

import { generateAttributes } from './dropAttributes';

interface Args {
  windowHeight: number;
  windowWidth: number;
  tl: gsap.core.Timeline;
  dropRef: Sprite;
  containerRef: Container;
  onComplete: () => void;
  isFullyVisible?: boolean;
}

export const animateDrop = ({
  windowHeight,
  windowWidth,
  isFullyVisible,
  tl,
  dropRef,
  containerRef,
  onComplete,
}: Args) => {
  const attributes = generateAttributes({
    windowHeight,
    windowWidth,
    isFullyVisible,
  });

  const maxSize = attributes.dropSize * 1.5;

  tl.to(dropRef, {
    width: 0,
    height: 0,
    alpha: 0,
  })
    .to(containerRef, {
      x: attributes.x,
      y: windowHeight - 60,
      rotation: attributes.rotation,
    })
    .to(dropRef, {
      width: maxSize,
      height: maxSize,
      alpha: attributes.maxAlpha / 2,
      delay: attributes.delay,
      ease: 'linear',
      duration: 0.2,
    })
    .to(dropRef, {
      width: attributes.dropSize,
      height: attributes.dropSize,
      alpha: attributes.maxAlpha,
      ease: 'linear',
      duration: 0.2,
    })
    .to(containerRef, {
      y: 100,
      ease: 'linear',
      duration: 6,
    })
    .to(containerRef, {
      y: 0,
      ease: 'linear',
      duration: 0.5,
    })
    .to(
      dropRef,
      {
        alpha: 0,
        ease: 'linear',
        duration: 1,
        onComplete,
      },
      '-=1'
    );
};
