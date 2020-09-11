import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  resetGame,
  setIsGamePaused,
  setUnderwaterIntro,
} from 'src/store/underwater/actions';
import { useGetIsGamePaused } from 'src/store/underwater/selectors';
import { setIsWindowResized } from 'src/store/view/actions';
import { useGetIsWindowResized } from 'src/store/view/selectors';

export const useGamePause = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isWindowResized = useGetIsWindowResized();

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

    if (isWindowResized) {
      dispatch(setIsWindowResized(false));
    }
  }, [dispatch, isWindowResized]);

  const backToIntro = useCallback(() => {
    if (isWindowResized) {
      dispatch(setIsWindowResized(false));
    }

    dispatch(setUnderwaterIntro());
  }, [dispatch, isWindowResized]);

  useEffect(() => {
    if (isGamePaused) {
      setIsModalOpen(true);
    }
  }, [isGamePaused]);

  useEffect(() => {
    if (isWindowResized) {
      pauseGame();
    }
  }, [isWindowResized, pauseGame]);

  return {
    pauseGame,
    resumeGame,
    restartGame,
    isModalOpen,
    isWindowResized,
    backToIntro,
  };
};
