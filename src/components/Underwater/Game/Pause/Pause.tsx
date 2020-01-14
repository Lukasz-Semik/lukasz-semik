import React, { useEffect } from 'react';
import { rem } from 'polished';

import { XButtonElement } from 'src/components/Elements';

import { PauseModal } from '../Pause/PauseModal';
import { useGamePause } from '../Pause/useGamePause';

interface Props {
  resetDrops: () => void;
  isGameOver: boolean;
}

export const Pause = ({ resetDrops, isGameOver }: Props) => {
  const {
    pauseGame,
    resumeGame,
    restartGame,
    backToIntro,
    isModalOpen,
    isWindowResized,
  } = useGamePause();

  useEffect(() => {
    if (isGameOver) {
      pauseGame();
    }
  }, [pauseGame, isGameOver]);

  return (
    <>
      <XButtonElement onClick={pauseGame} top="0" right={rem(-25)} />

      {isModalOpen && (
        <PauseModal
          isGameOver={isGameOver}
          isWindowResized={isWindowResized}
          resumeGame={resumeGame}
          backToIntro={backToIntro}
          restartGame={() => {
            resetDrops();
            restartGame();
          }}
        />
      )}
    </>
  );
};
