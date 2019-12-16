import { useState, useEffect, useCallback, useRef } from 'react';

import { useUnderwaterState } from 'src/Underwater/underwaterState';

const useGamePause = () => {
  const pauesGameRef = useRef<() => void>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    setIsGamePaused,
    getIsUnderwaterWindowFocused,
    setUnderwaterIntro,
  } = useUnderwaterState();

  const isWindowFocused = getIsUnderwaterWindowFocused();

  const pauseGame = useCallback(() => {
    setIsModalOpen(true);
    setIsGamePaused(true);
  }, [setIsModalOpen, setIsGamePaused]);

  const resumeGame = useCallback(() => {
    setIsModalOpen(false);
    setIsGamePaused(false);
  }, [setIsModalOpen, setIsGamePaused]);

  useEffect(() => {
    pauesGameRef.current = pauseGame;
  }, [pauseGame]);

  useEffect(() => {
    if (!isWindowFocused && pauesGameRef.current) {
      pauesGameRef.current();
    }
  }, [isWindowFocused]);

  return {
    pauseGame,
    resumeGame,
    isModalOpen,
    backToIntro: setUnderwaterIntro,
  };
};

export default useGamePause;
