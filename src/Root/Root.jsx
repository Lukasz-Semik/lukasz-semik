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

const ItemWrapper = styled.div`
  position: absolute;
  top: ${({ isVisible, startingPosition }) =>
    isVisible ? 0 : startingPosition};
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
      <ItemWrapper
        isVisible={futureView === viewType.underwater}
        onTransitionEnd={setView}
        startingPosition="100%"
      >
        {/* <Button onClick={goUp}>Move</Button> */}

        {getIsMounted(viewType.underwater) && <Underwater />}
      </ItemWrapper>

      <ItemWrapper
        isVisible={futureView === viewType.surface}
        startingPosition="-100%"
      >
        {getIsMounted(viewType.surface) && (
          <SurfacePlaceholder>
            <Button2 onClick={goDown}>Move</Button2>
          </SurfacePlaceholder>
        )}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Root;
