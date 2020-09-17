import React from 'react';
import gsap from 'gsap';
import PixiPlugin from 'gsap/PixiPlugin';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';

import { MainControlsLayer } from './Layers/MainControlsLayer/MainControlsLayer';
import { LevelsLayer } from './LevelsLayer/LevelsLayer';
import { useView } from './useView';
import { useWindow } from './useWindow';

gsap.registerPlugin(PixiPlugin);

const Wrapper = styled.div`
  ${styleOverlay};
  overflow: hidden;
`;

const Root = () => {
  const { futureView, goUp, setView, getIsMounted } = useView();
  useWindow();

  return (
    <Wrapper>
      <LevelsLayer
        futureView={futureView}
        onViewGoUp={goUp}
        setView={setView}
        getIsMounted={getIsMounted}
      />

      <MainControlsLayer />
    </Wrapper>
  );
};

export default Root;
