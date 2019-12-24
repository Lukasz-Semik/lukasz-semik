import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { rem } from 'polished';
import { FormattedMessage } from 'gatsby-plugin-intl';

import {
  setUnderwaterIntro,
  setUnderwaterGame,
} from 'src/store/underwater/actions';
import { ButtonElement } from 'src/components/Elements';
import { PaperModal } from 'src/components/Modals';

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
  const dispatch = useDispatch();

  const backToIntro = () => {
    dispatch(setUnderwaterIntro());
  };

  return (
    <PaperModal onClose={backToIntro}>
      <ButtonsWrapper>
        <ButtonElement onClick={() => dispatch(setUnderwaterGame())}>
          <FormattedMessage id="underwater.startGame" />
        </ButtonElement>

        <Text>
          <FormattedMessage id="shared.or" />
        </Text>

        <CenterButton>
          <ButtonElement onClick={backToIntro}>
            <FormattedMessage id="shared.back" />
          </ButtonElement>
        </CenterButton>
      </ButtonsWrapper>
    </PaperModal>
  );
};
