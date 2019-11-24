import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import styleOverlay from 'src/styles';
import Underwater from 'src/Underwater/Underwater';

const Wrapper = styled.div`
  ${styleOverlay};
  overflow: hidden;
  max-height: 100vh;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
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
  const [isUnderwater, setIsUnderwater] = useState(true);
  const [isUnderwaterHidden, setIsUnderwaterHidden] = useState(false);
  const [isSurfaceHidden, setIsSurfaceHidden] = useState(true);

  const changeView = useCallback(() => {
    if (isUnderwater) {
      setIsSurfaceHidden(false);
    } else {
      setIsUnderwaterHidden(false);
    }

    setIsUnderwater(!isUnderwater);
  }, [isUnderwater]);

  const onViewChangeEnd = useCallback(() => {
    if (!isUnderwater) {
      setIsUnderwaterHidden(true);
    } else {
      setIsSurfaceHidden(true);
    }
  }, [isUnderwater]);

  return (
    <Wrapper>
      <UnderwaterWrapper
        isVisible={isUnderwater}
        onTransitionEnd={onViewChangeEnd}
      >
        <Button onClick={changeView}>Move</Button>

        {!isUnderwaterHidden && <Underwater />}
      </UnderwaterWrapper>

      <SurfaceWrapper isVisible={!isUnderwater}>
        {!isSurfaceHidden && <SurfacePlaceholder>Surface</SurfacePlaceholder>}
      </SurfaceWrapper>
    </Wrapper>
  );
};

export default Root;
