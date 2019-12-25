import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  setIsGamePaused,
  setUnderwaterIntro,
  resetGame,
} from 'src/store/underwater/actions';
import { useGetIsGamePaused } from 'src/store/underwater/selectors';

export const useGamePause = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const isGamePaused = useGetIsGamePaused();

  const pauseGame = useCallback(() => {
    setIsModalOpen(true);
    dispatch(setIsGamePaused(true));
  }, [dispatch]);

  const resumeGame = useCallback(() => {
    setIsModalOpen(false);
    dispatch(setIsGamePaused(false));
  }, [dispatch]);

  const restartGame = useCallback(() => {
    setIsModalOpen(false);
    dispatch(resetGame());
  }, [dispatch]);

  useEffect(() => {
    if (isGamePaused) {
      setIsModalOpen(true);
    }
  }, [isGamePaused]);

  return {
    pauseGame,
    resumeGame,
    restartGame,
    isModalOpen,
    backToIntro: () => dispatch(setUnderwaterIntro()),
  };
};
