import React from 'react';
import styled from 'styled-components';

import { useGetIsUnderwaterIntro } from 'src/store/underwater/selectors';
import { useGetIsSurfaceView } from 'src/store/view/selectors';
import styles from 'src/styles';
import { styleOverlay } from 'src/styles/helpers';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const Wrapper = styled.div`
  ${styleOverlay};
  font-family: ${styles.fonts.uniq};
  pointer-events: none;
`;

export const MainControlsLayer = () => {
  const isUnderwaterIntro = useGetIsUnderwaterIntro();
  const isSurfaceView = useGetIsSurfaceView();

  return isUnderwaterIntro || isSurfaceView ? (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  ) : null;
};
