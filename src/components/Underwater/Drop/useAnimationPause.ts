import { useEffect } from 'react';

import {
  useGetIsGamePaused,
  useGetIsUnderwaterGame,
} from 'src/store/underwater/selectors';

export const useAnimationPause = (tl: gsap.core.Timeline) => {
  const isPaused = useGetIsGamePaused();
  const isGameRunning = useGetIsUnderwaterGame();

  useEffect(() => {
    if (isGameRunning) {
      if (isPaused) {
        tl.pause();
      } else {
        tl.resume();
      }
    }
  }, [isGameRunning, isPaused, tl]);
};
