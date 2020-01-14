import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'gatsby-plugin-intl';

import {
  setUnderwaterIntro,
  setUnderwaterGame,
} from 'src/store/underwater/actions';
import { ButtonElement } from 'src/components/Elements';
import { PaperModal } from 'src/components/Modals';

import { ButtonsWrapper, Text, CenterButton } from '../styled';

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
