import React, { useEffect } from 'react';
import gsap from 'gsap';
import PixiPlugin from 'gsap/PixiPlugin';
import styled from 'styled-components';

import { appApi } from 'src/api';
import { styleOverlay } from 'src/styles/helpers';

import { useWindow } from '../../hooks/useWindow';
import { ToastWrapper } from '../Elements/Toast/ToastWrapper';
import { LevelsLayer } from './Layers/LevelsLayer/LevelsLayer';
import { MainControlsLayer } from './Layers/MainControlsLayer/MainControlsLayer';

gsap.registerPlugin(PixiPlugin);

const Wrapper = styled.div`
  ${styleOverlay};
  overflow: hidden;
`;

const Root = () => {
  useWindow();

  useEffect(() => {
    appApi.wakeUp();
  }, []);

  return (
    <Wrapper>
      <LevelsLayer />
      <MainControlsLayer />
      <ToastWrapper />
    </Wrapper>
  );
};

export default Root;
