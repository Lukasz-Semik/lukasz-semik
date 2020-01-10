import { useEffect } from 'react';

export const useAnimationPause = (
  tl: gsap.core.Timeline,
  isPaused: boolean
) => {
  useEffect(() => {
    if (isPaused) {
      tl.pause();
    } else if (tl.paused()) {
      tl.resume();
    }
  }, [isPaused, tl]);
};
