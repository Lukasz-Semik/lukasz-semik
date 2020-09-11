import { useCallback, useEffect, useState } from 'react';

export const useAnimation = (tl: gsap.core.Timeline, isPaused: boolean) => {
  const [isReady, setIsReady] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isPaused) {
      tl.pause();
    } else if (tl.paused()) {
      tl.resume();
    }
  }, [isPaused, tl]);

  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
    }
  }, [isReady]);

  useEffect(
    () => () => {
      tl.kill();
    },
    [tl]
  );

  const resetItem = useCallback(() => {
    setCounter(counter + 1);
    setIsClicked(false);
    setIsReady(false);
  }, [counter]);

  return {
    isReady,
    setIsReady,
    resetItem,
    isClicked,
    setIsClicked,
  };
};
