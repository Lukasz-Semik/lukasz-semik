import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { setIsWindowResized } from 'src/store/view/actions';
import { PaperModal } from 'src/components/Modals';

import { ButtonsWrapper, Text, CenterButton, Button } from '../styled';

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
          <FormattedMessage id="underwater.game.windowResized.descriptionLanding" />
        </Text>

        <CenterButton>
          <Button onClick={onClose}>
            <FormattedMessage id="shared.ok" />
          </Button>
        </CenterButton>
      </ButtonsWrapper>
    </PaperModal>
  );
};
