import React from 'react';
import { rem } from 'polished';

import { XButtonElement } from 'src/components/Elements';

import { PauseModal } from '../Pause/PauseModal';
import { useGamePause } from '../Pause/useGamePause';

interface Props {
  resetDrops: () => void;
}

export const Pause = ({ resetDrops }: Props) => {
  const { pauseGame, resumeGame, backToIntro, isModalOpen } = useGamePause();

  return (
    <>
      <XButtonElement onClick={pauseGame} top="0" right={rem(-25)} />

      {isModalOpen && (
        <PauseModal
          resumeGame={resumeGame}
          backToIntro={backToIntro}
          resetGame={() => {
            resetDrops();
            resumeGame();
          }}
        />
      )}
    </>
  );
};
