import React from 'react';
import gsap from 'gsap';
import PixiPlugin from 'gsap/PixiPlugin';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';

import { useWindow } from '../../hooks/useWindow';
import { LevelsLayer } from './Layers/LevelsLayer/LevelsLayer';
import { MainControlsLayer } from './Layers/MainControlsLayer/MainControlsLayer';

gsap.registerPlugin(PixiPlugin);

const Wrapper = styled.div`
  ${styleOverlay};
  overflow: hidden;
`;

const Root = () => {
  useWindow();

  return (
    <Wrapper>
      <LevelsLayer />

      <MainControlsLayer />
    </Wrapper>
  );
};

export default Root;
