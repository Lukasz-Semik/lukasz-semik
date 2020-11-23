import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';

import { View } from 'src/store/view/types';
import { styleOverlay } from 'src/styles/helpers';
import { LoaderElement } from 'src/components/Elements';
import { Underwater } from 'src/components/Underwater/Underwater';

import { useView } from '../../../../hooks/useView';

const Surface = React.lazy(() => import('src/components/Surface/Surface'));

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

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${styleOverlay};
  background: radial-gradient(#80deea, #14e3fa 60%);
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
        {isSurfaceViewMounted && (
          <React.Suspense
            fallback={
              <LoaderWrapper>
                <LoaderElement size={300} hasText isVisible />
              </LoaderWrapper>
            }
          >
            <Surface />
          </React.Suspense>
        )}
      </ItemWrapper>
    </>
  );
};
