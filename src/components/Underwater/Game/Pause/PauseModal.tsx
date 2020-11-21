import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { appContent } from 'src/constants/content';
import styles from 'src/styles';
import { PaperModal } from 'src/components/Modals';

import { Summary } from './Summary/Summary';

const Text = styled.p`
  margin: ${rem(10)} 0;
  text-align: center;
  color: ${styles.colors.hpRed};
`;
interface Props {
  restartGame: () => void;
  resumeGame: () => void;
  backToIntro: () => void;
  isGameOver: boolean;
  isWindowResized: boolean;
}

const getModalTitle = (isGameOver: boolean, isWindowResized: boolean) => {
  if (isWindowResized) {
    return appContent.underwater.game.windowResized.title();
  }

  if (isGameOver) {
    return appContent.underwater.game.over();
  }

  return appContent.underwater.game.pause();
};

export const PauseModal = ({
  resumeGame,
  restartGame,
  backToIntro,
  isGameOver,
  isWindowResized,
}: Props) => (
  <PaperModal
    onClose={resumeGame}
    isCloseButtonHidden={isWindowResized || isGameOver}
  >
    <PaperModal.Title>
      {getModalTitle(isGameOver, isWindowResized)}
    </PaperModal.Title>

    {!isGameOver && !isWindowResized && (
      <PaperModal.ButtonItem onClick={resumeGame}>
        {appContent.underwater.game.resume()}
      </PaperModal.ButtonItem>
    )}

    <PaperModal.ButtonItem onClick={restartGame}>
      {appContent.underwater.game.restart()}
    </PaperModal.ButtonItem>

    <PaperModal.ButtonItem onClick={backToIntro}>
      {appContent.underwater.game.backToIntro()}
    </PaperModal.ButtonItem>

    {isGameOver && <Summary />}

    {isWindowResized && (
      <Text>{appContent.underwater.game.windowResized.descriptionGame()}</Text>
    )}
  </PaperModal>
);
