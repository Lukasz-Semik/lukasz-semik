import React from 'react';
import styled from 'styled-components';

import { useGetIsUnderwaterGame } from 'src/store/underwater/selectors';
import styles from 'src/styles';
import { styleOverlay } from 'src/styles/helpers';

import { Background } from './Background/Background';
import { Game } from './Game/Game';
import { Landing } from './Landing/Landing';

const Wrapper = styled.div`
  ${styleOverlay};
  font-family: ${styles.fonts.uniq};
`;

interface Props {
  onViewGoUp: () => void;
}

export const Underwater = ({ onViewGoUp }: Props) => {
  const isGameRunning = useGetIsUnderwaterGame();

  return (
    <Background>
      <Wrapper>
        {isGameRunning ? <Game /> : <Landing onViewGoUp={onViewGoUp} />}
      </Wrapper>
    </Background>
  );
};
