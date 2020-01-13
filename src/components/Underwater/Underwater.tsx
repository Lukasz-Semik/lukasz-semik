import React from 'react';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';
import { useGetIsUnderwaterGame } from 'src/store/underwater/selectors';

import { Background } from './Background/Background';
import { Landing } from './Landing/Landing';
import { Game } from './Game/Game';

const Wrapper = styled.div`
  ${styleOverlay}
`;

export const Underwater = () => {
  const isGameRunning = useGetIsUnderwaterGame();

  return (
    <Background>
      <Wrapper>{isGameRunning ? <Game /> : <Landing />}</Wrapper>
    </Background>
  );
};
