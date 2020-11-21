import React from 'react';
import { useDispatch } from 'react-redux';

import { appContent } from 'src/constants/content';
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
      <PaperModal.Title>{appContent.underwater.game.new()}</PaperModal.Title>

      <PaperModal.ButtonItem onClick={() => dispatch(setUnderwaterGame())}>
        {appContent.underwater.game.start()}
      </PaperModal.ButtonItem>

      <PaperModal.ButtonItem onClick={backToIntro}>
        {appContent.shared.back()}
      </PaperModal.ButtonItem>
    </PaperModal>
  );
};
