import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';

import { View } from 'src/store/view/types';
import { Surface } from 'src/components/Surface/Surface';
import { Underwater } from 'src/components/Underwater/Underwater';

import { useView } from '../../../../hooks/useView';

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

export const LevelsLayer = () => {
  const {
    futureView,
    isUnderwaterViewMounted,
    isSurfaceViewMounted,
    setView,
  } = useView();

  return (
    <>
      <ItemWrapper
        isVisible={futureView === View.Underwater}
        onTransitionEnd={(e: React.SyntheticEvent<HTMLDivElement>) => {
          if (e.currentTarget.id === get(e, 'target.id')) {
            setView();
          }
        }}
        startingPosition="100%"
      >
        {isUnderwaterViewMounted && <Underwater />}
      </ItemWrapper>

      <ItemWrapper
        isVisible={futureView === View.Surface}
        startingPosition="-100%"
      >
        {isSurfaceViewMounted && <Surface />}
      </ItemWrapper>
    </>
  );
};
