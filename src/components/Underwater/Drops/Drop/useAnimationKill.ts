import { useEffect } from 'react';

import { useUnderwaterState } from 'src/components/Underwater/underwaterState';

const useAnimationKill = (tl: gsap.core.Timeline) => {
  const { getIsGamePaused, getIsUnderwaterGame } = useUnderwaterState();
  const isPaused = getIsGamePaused();
  const isGameRunning = getIsUnderwaterGame();

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

export default useAnimationKill;
