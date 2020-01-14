import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { rem } from 'polished';

import styles from 'src/styles';
import { PaperModal } from 'src/components/Modals';
import { ButtonElement } from 'src/components/Elements';

const Wrapper = styled.div.attrs({ 'data-test': 'pause-modal' })`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Button = styled(ButtonElement)`
  margin-bottom: ${rem(20)};
`;

const Title = styled.h2.attrs({ 'data-test': 'pause-modal-title' })`
  margin-bottom: ${rem(30)};
  text-align: center;
  font-size: ${rem(50)};
`;

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
  <PaperModal onClose={resumeGame} isCloseButtonHidden={isWindowResized}>
    <Wrapper>
      <Title>
        <FormattedMessage id={getModalTitle(isGameOver, isWindowResized)} />
      </Title>

      {!isGameOver && !isWindowResized && (
        <Button onClick={resumeGame}>
          <FormattedMessage id="underwater.game.resume" />
        </Button>
      )}

      <Button onClick={restartGame}>
        <FormattedMessage id="underwater.game.restart" />
      </Button>

      <Button onClick={backToIntro}>
        <FormattedMessage id="underwater.game.backToIntro" />
      </Button>

      {isWindowResized && (
        <Text>
          <FormattedMessage id="underwater.game.windowResized.descriptionGame" />
        </Text>
      )}
    </Wrapper>
  </PaperModal>
);
