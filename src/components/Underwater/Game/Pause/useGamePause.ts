import { useState, useEffect, useCallback, useRef } from 'react';

import { useUnderwaterState } from 'src/components/Underwater/underwaterState';
import { useGetIsWindowFocused } from 'src/store/view/selectors';

export const useGamePause = () => {
  const pauesGameRef = useRef<() => void>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setIsGamePaused, setUnderwaterIntro } = useUnderwaterState();

  const isWindowFocused = useGetIsWindowFocused();

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
