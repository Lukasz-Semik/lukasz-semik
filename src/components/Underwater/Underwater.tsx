import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { styleOverlay } from 'src/styles/helpers';
import { setIsWindowFocused } from 'src/store/view/actions';

import { Background } from './Background/Background';
import { Landing } from './Landing/Landing';
import { Game } from './Game/Game';
import { useUnderwaterState } from './underwaterState';
import { UnderwaterContainer } from './UnderwaterContainer';

const Wrapper = styled.div`
  ${styleOverlay}
`;

const UnderwaterUnwrapped = () => {
  const {
    getIsUnderwaterIntro,
    getIsUnderwaterStarter,
    getIsUnderwaterGame,
  } = useUnderwaterState();
  const dispatch = useDispatch();

  const isGameRunning = getIsUnderwaterGame();

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
          <Landing
            isIntro={getIsUnderwaterIntro()}
            isStarter={getIsUnderwaterStarter()}
          />
        )}
      </Wrapper>
    </Background>
  );
};

const render = () => <UnderwaterUnwrapped />;
export const Underwater = () => <UnderwaterContainer render={render} />;
