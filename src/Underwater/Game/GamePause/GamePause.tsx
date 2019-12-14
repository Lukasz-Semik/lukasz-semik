import React, { useState, useEffect, useCallback } from 'react';

import { useUnderwaterState } from 'src/Underwater/underwaterState';
import PauseModal from './PauseModal/PauseModal';

interface RenderProps {
  pauseGame: () => void;
  resumeGame: () => void;
}

const GamePause = ({ children }: WithRenderChildrenProps<RenderProps>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    setIsGamePaused,
    getIsUnderwaterWindowFocused,
    setUnderwaterIntro,
    resetGame,
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
    if (!isWindowFocused) {
      pauseGame();
    }
  }, [isWindowFocused, pauseGame]);

  return (
    <>
      {children({
        pauseGame,
        resumeGame,
      })}

      {isModalOpen && (
        <PauseModal
          resumeGame={resumeGame}
          resetGame={resetGame}
          setUnderwaterIntro={setUnderwaterIntro}
        />
      )}
    </>
  );
};

export default GamePause;
