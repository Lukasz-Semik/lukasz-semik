import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { rem } from 'polished';

import { PaperModal } from 'src/components/Modals';
import { ButtonElement } from 'src/components/Elements';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Button = styled(ButtonElement)`
  margin-bottom: ${rem(20)};
`;

const Title = styled.h2`
  margin-bottom: ${rem(30)};
  font-size: ${rem(50)};
`;

interface Props {
  resetGame: () => void;
  resumeGame: () => void;
  backToIntro: () => void;
}

export const PauseModal = ({ resumeGame, resetGame, backToIntro }: Props) => (
  <PaperModal onClose={resumeGame}>
    <Wrapper>
      <Title>
        <FormattedMessage id="underwater.game.pause" />
      </Title>

      <Button onClick={resumeGame}>
        <FormattedMessage id="underwater.game.resume" />
      </Button>

      <Button onClick={resetGame}>
        <FormattedMessage id="underwater.game.restart" />
      </Button>

      <Button onClick={backToIntro}>
        <FormattedMessage id="underwater.game.backToIntro" />
      </Button>
    </Wrapper>
  </PaperModal>
);
