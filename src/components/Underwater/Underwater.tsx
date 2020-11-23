import React from 'react';
import styled from 'styled-components';

import { useGetIsUnderwaterGame } from 'src/store/underwater/selectors';
import styles from 'src/styles';
import { styleOverlay } from 'src/styles/helpers';
import { Suspense } from 'src/components/Elements/Suspense/Suspense';

import { Background } from './Background/Background';
import { Landing } from './Landing/Landing';

const Game = React.lazy(() => import('./Game/Game'));

const Wrapper = styled.div`
  ${styleOverlay};
  font-family: ${styles.fonts.uniq};
`;

export const Underwater = () => {
  const isGameRunning = useGetIsUnderwaterGame();

  return (
    <Background>
      <Wrapper>
        {isGameRunning ? (
          <Suspense>
            <Game />
          </Suspense>
        ) : (
          <Landing />
        )}
      </Wrapper>
    </Background>
  );
};
