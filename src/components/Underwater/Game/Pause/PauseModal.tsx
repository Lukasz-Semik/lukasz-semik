import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import styled from 'styled-components';

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
    return 'underwater.game.windowResized.title';
  }

  if (isGameOver) {
    return 'underwater.game.over';
  }

  return 'underwater.game.pause';
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
      <FormattedMessage id={getModalTitle(isGameOver, isWindowResized)} />
    </PaperModal.Title>

    {!isGameOver && !isWindowResized && (
      <PaperModal.ButtonItem onClick={resumeGame}>
        <FormattedMessage id="underwater.game.resume" />
      </PaperModal.ButtonItem>
    )}

    <PaperModal.ButtonItem onClick={restartGame}>
      <FormattedMessage id="underwater.game.restart" />
    </PaperModal.ButtonItem>

    <PaperModal.ButtonItem onClick={backToIntro}>
      <FormattedMessage id="underwater.game.backToIntro" />
    </PaperModal.ButtonItem>

    {isGameOver && <Summary />}

    {isWindowResized && (
      <Text>
        <FormattedMessage id="underwater.game.windowResized.descriptionGame" />
      </Text>
    )}
  </PaperModal>
);
