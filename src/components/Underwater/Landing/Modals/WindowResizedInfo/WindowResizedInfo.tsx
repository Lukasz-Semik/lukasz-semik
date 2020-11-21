import React from 'react';
import { useDispatch } from 'react-redux';

import { appContent } from 'src/constants/content';
import { setIsWindowResized } from 'src/store/windowContext/actions';
import { PaperModal } from 'src/components/Modals';

import { Button, ButtonsWrapper, CenterButton, Text } from '../styled';

interface Props {
  resetDrops: () => void;
}

export const WindowResizedInfo = ({ resetDrops }: Props) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setIsWindowResized(false));
    resetDrops();
  };

  return (
    <PaperModal onClose={onClose}>
      <ButtonsWrapper>
        <Text as="h4">
          {appContent.underwater.game.windowResized.descriptionLanding()}
        </Text>

        <CenterButton>
          <Button onClick={onClose}>{appContent.shared.ok()}</Button>
        </CenterButton>
      </ButtonsWrapper>
    </PaperModal>
  );
};
