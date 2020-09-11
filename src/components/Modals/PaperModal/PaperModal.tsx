import React, { useEffect, useState } from 'react';
import { rem, rgba } from 'polished';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';
import { PaperCardElement, XButtonElement } from 'src/components/Elements';

import { Modal } from '../Modal';
import { Button, Title } from './styled';

const Wrapper = styled.div<{ isMounted: boolean }>`
  ${styleOverlay};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isMounted }) =>
    isMounted ? rgba(0, 0, 0, 0.3) : rgba(0, 0, 0, 0)};
  transition: background-color 1s ease;
`;

const CardWrapper = styled.div`
  width: ${rem(400)};
  max-width: 85%;
  height: ${rem(500)};
  max-height: 95%;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

interface Props {
  onClose: () => void;
  children: React.ReactNode | React.ReactNode[];
  isCloseButtonHidden?: boolean;
}

export const PaperModal = ({
  children,
  onClose,
  isCloseButtonHidden,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Modal>
      <Wrapper isMounted={isMounted}>
        <CardWrapper>
          <PaperCardElement isMounted={isMounted}>
            {!isCloseButtonHidden && (
              <XButtonElement top="0" right="0" onClick={onClose} />
            )}

            <InnerWrapper>{children}</InnerWrapper>
          </PaperCardElement>
        </CardWrapper>
      </Wrapper>
    </Modal>
  );
};

PaperModal.Title = Title;
PaperModal.ButtonItem = Button;
