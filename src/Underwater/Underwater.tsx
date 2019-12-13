import React, { useEffect } from 'react';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';

import Background from './Background/Background';
import Landing from './Landing/Landing';
import Game from './Game/Game';
import { useUnderwaterState } from './underwaterState';
import UnderwaterContainer from './UnderwaterContainer';

const Wrapper = styled.div`
  ${styleOverlay}
`;

const Underwater = () => {
  const {
    getIsUnderwaterIntro,
    getIsUnderwaterStarter,
    getIsUnderwaterLoader,
    getIsUnderwaterGame,
    setUnderwaterGame,
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
            setUnderwaterGame={setUnderwaterGame}
            isIntro={getIsUnderwaterIntro()}
            isStarter={getIsUnderwaterStarter()}
            isLoader={getIsUnderwaterLoader()}
          />
        )}
      </Wrapper>
    </Background>
  );
};

const render = () => <Underwater />;
export default () => <UnderwaterContainer render={render} />;
