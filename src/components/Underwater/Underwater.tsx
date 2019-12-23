import React, { useEffect } from 'react';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';

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
    setIsUndewaterWindowFocused,
  } = useUnderwaterState();

  const isGameRunning = getIsUnderwaterGame();

  useEffect(() => {
    if (window) {
      window.onblur = () => {
        setIsUndewaterWindowFocused(false);
      };

      window.onfocus = () => {
        setIsUndewaterWindowFocused(true);
      };
    }
  }, [setIsUndewaterWindowFocused]);

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
