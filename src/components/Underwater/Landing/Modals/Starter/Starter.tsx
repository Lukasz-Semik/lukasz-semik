import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'gatsby-plugin-intl';

import {
  setUnderwaterGame,
  setUnderwaterIntro,
} from 'src/store/underwater/actions';
import { PaperModal } from 'src/components/Modals';

export const Starter = () => {
  const dispatch = useDispatch();

  const backToIntro = () => {
    dispatch(setUnderwaterIntro());
  };

  return (
    <PaperModal onClose={backToIntro}>
      <PaperModal.Title>
        <FormattedMessage id="underwater.game.new" />
      </PaperModal.Title>

      <PaperModal.ButtonItem onClick={() => dispatch(setUnderwaterGame())}>
        <FormattedMessage id="underwater.game.start" />
      </PaperModal.ButtonItem>

      <PaperModal.ButtonItem onClick={backToIntro}>
        <FormattedMessage id="shared.back" />
      </PaperModal.ButtonItem>
    </PaperModal>
  );
};
