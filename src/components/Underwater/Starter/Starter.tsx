import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { ButtonElement } from 'src/components/Elements';
import { PaperModal } from 'src/components/Modals';

import { useUnderwaterState } from '../underwaterState';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${rem(25)};
`;

const Text = styled.div`
  margin: ${rem(15)} 0;
  text-align: center;
  color: grey;
`;

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Starter = () => {
  const { setUnderwaterIntro, setUnderwaterGame } = useUnderwaterState();

  return (
    <PaperModal onClose={setUnderwaterIntro}>
      <ButtonsWrapper>
        <ButtonElement onClick={setUnderwaterGame}>
          <FormattedMessage id="underwater.startGame" />
        </ButtonElement>

        <Text>
          <FormattedMessage id="shared.or" />
        </Text>

        <CenterButton>
          <ButtonElement onClick={setUnderwaterIntro}>
            <FormattedMessage id="shared.back" />
          </ButtonElement>
        </CenterButton>
      </ButtonsWrapper>
    </PaperModal>
  );
};
