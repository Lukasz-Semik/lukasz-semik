import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { styleOverlay } from 'src/styles/helpers';
import { setIsWindowFocused } from 'src/store/view/actions';
import {
  useGetIsUnderwaterGame,
  useGetIsUnderwaterIntro,
  useGetIsUnderwaterStarter,
} from 'src/store/underwater/selectors';

import { Background } from './Background/Background';
import { Landing } from './Landing/Landing';
import { Game } from './Game/Game';

const Wrapper = styled.div`
  ${styleOverlay}
`;

export const Underwater = () => {
  const dispatch = useDispatch();

  const isGameRunning = useGetIsUnderwaterGame();
  const isIntro = useGetIsUnderwaterIntro();
  const isStarter = useGetIsUnderwaterStarter();

  useEffect(() => {
    if (window) {
      window.onblur = () => {
        dispatch(setIsWindowFocused(false));
      };

      window.onfocus = () => {
        dispatch(setIsWindowFocused(true));
      };
    }
  }, [dispatch]);

  return (
    <Background>
      <Wrapper>
        {isGameRunning ? (
          <Game />
        ) : (
          <Landing isIntro={isIntro} isStarter={isStarter} />
        )}
      </Wrapper>
    </Background>
  );
};