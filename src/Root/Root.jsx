import React from 'react';
import styled from 'styled-components';

import styleOverlay from 'src/styles';
import Underwater from 'src/Underwater/Underwater';

import useView from './useView';

const Wrapper = styled.div`
  ${styleOverlay};
  overflow: hidden;
  max-height: 100vh;
`;

// TODO: move and finish buttons
const Button = styled.button`
  position: absolute;
  top: 0;
  z-index: 1;
`;

const Button2 = styled.button`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const UnderwaterWrapper = styled.div`
  position: absolute;
  top: ${({ isVisible }) => (isVisible ? 0 : '100%')};
  left: 0;
  transition: top 2s ease;
`;

const SurfaceWrapper = styled.div`
  position: absolute;
  top: ${({ isVisible }) => (isVisible ? 0 : '-100%')};
  left: 0;
  transition: top 2s ease;
`;

const SurfacePlaceholder = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const Root = () => {
  const {
    futureView,
    goUp,
    goDown,
    setView,
    getIsMounted,
    viewType,
  } = useView();

  return (
    <Wrapper>
      <UnderwaterWrapper
        isVisible={futureView === viewType.underwater}
        onTransitionEnd={setView}
      >
        <Button onClick={goUp}>Move</Button>

        {getIsMounted(viewType.underwater) && <Underwater />}
      </UnderwaterWrapper>

      <SurfaceWrapper isVisible={futureView === viewType.surface}>
        {getIsMounted(viewType.surface) && (
          <SurfacePlaceholder>
            <Button2 onClick={goDown}>Move</Button2>
          </SurfacePlaceholder>
        )}
      </SurfaceWrapper>
    </Wrapper>
  );
};

export default Root;
