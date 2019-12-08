import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { PaperModal } from 'src/components/Modals';
import { useUnderwaterState } from 'src/Underwater/underwaterState';

const Wrapper = styled.button`
  position: absolute;
  top: 0;
  right: -${rem(25)};
  font-size: ${rem(35)};
`;

const PauseButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setIsGamePaused } = useUnderwaterState();

  return (
    <>
      <Wrapper
        onClick={() => {
          setIsModalOpen(true);
          setIsGamePaused(true);
        }}
      >
        x
      </Wrapper>

      {isModalOpen && (
        <PaperModal>
          <button
            onClick={() => {
              setIsModalOpen(false);
              setIsGamePaused(false);
            }}
          >
            close
          </button>
        </PaperModal>
      )}
    </>
  );
};

export default PauseButton;
