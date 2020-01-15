import React from 'react';
import styled from 'styled-components';

import { useGetIsUnderwaterGame } from 'src/store/underwater/selectors';
import styles from 'src/styles';

import { Background } from './Background/Background';
import { Landing } from './Landing/Landing';
import { Game } from './Game/Game';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
