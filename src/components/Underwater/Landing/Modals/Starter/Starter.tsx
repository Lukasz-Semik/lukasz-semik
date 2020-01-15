import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'gatsby-plugin-intl';

import {
  setUnderwaterIntro,
  setUnderwaterGame,
} from 'src/store/underwater/actions';
import { PaperModal } from 'src/components/Modals';

import { ButtonsWrapper, Text, CenterButton, Button } from '../styled';

export const Starter = () => {
  const dispatch = useDispatch();

  const backToIntro = () => {
    dispatch(setUnderwaterIntro());
  };

  return (
    <PaperModal onClose={backToIntro}>
      <ButtonsWrapper>
        <Button onClick={() => dispatch(setUnderwaterGame())}>
          <FormattedMessage id="underwater.startGame" />
        </Button>

        <Text>
          <FormattedMessage id="shared.or" />
        </Text>

        <CenterButton>
          <Button onClick={backToIntro}>
            <FormattedMessage id="shared.back" />
          </Button>
        </CenterButton>
      </ButtonsWrapper>
    </PaperModal>
  );
};
