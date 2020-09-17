import React from 'react';
import gsap from 'gsap';
import PixiPlugin from 'gsap/PixiPlugin';
import { get } from 'lodash';
import styled from 'styled-components';

import { View } from 'src/store/view/types';
import { styleOverlay } from 'src/styles/helpers';
import { Underwater } from 'src/components/Underwater/Underwater';

import { Surface } from '../Surface/Surface';
import { useView } from './useView';
import { useWindow } from './useWindow';

gsap.registerPlugin(PixiPlugin);

const Wrapper = styled.div`
  ${styleOverlay};
  overflow: hidden;
`;

const ItemWrapper = styled.div.attrs({ id: 'underwater-item' })<{
  isVisible: boolean;
  startingPosition: string;
}>`
  position: absolute;
  top: ${({ isVisible, startingPosition }) =>
    isVisible ? 0 : startingPosition};
  left: 0;
  width: 100%;
  height: 100%;
  transition: top 2s ease;
`;

const Root = () => {
  const { futureView, goUp, setView, getIsMounted } = useView();
  useWindow();

  return (
    <Wrapper>
      <ItemWrapper
        isVisible={futureView === View.Underwater}
        onTransitionEnd={(e: React.SyntheticEvent<HTMLDivElement>) => {
          if (e.currentTarget.id === get(e, 'target.id')) {
            setView();
          }
        }}
        startingPosition="100%"
      >
        {getIsMounted(View.Underwater) && <Underwater onViewGoUp={goUp} />}
      </ItemWrapper>

      <ItemWrapper
        isVisible={futureView === View.Surface}
        startingPosition="-100%"
      >
        {getIsMounted(View.Surface) && <Surface />}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Root;
