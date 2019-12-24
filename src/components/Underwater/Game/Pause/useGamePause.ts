import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  setIsGamePaused,
  setUnderwaterIntro,
} from 'src/store/underwater/actions';
import { useGetIsGamePaused } from 'src/store/underwater/selectors';

export const useGamePause = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const isGamePaused = useGetIsGamePaused();

  const pauseGame = useCallback(() => {
    setIsModalOpen(true);
    dispatch(setIsGamePaused(true));
  }, [setIsModalOpen, dispatch]);

  const resumeGame = useCallback(() => {
    setIsModalOpen(false);
    dispatch(setIsGamePaused(false));
  }, [setIsModalOpen, dispatch]);

  useEffect(() => {
    if (isGamePaused) {
      setIsModalOpen(true);
    }
  }, [isGamePaused]);

  return {
    pauseGame,
    resumeGame,
    isModalOpen,
    backToIntro: () => dispatch(setUnderwaterIntro()),
  };
};
