import React from 'react';
import styled from 'styled-components';

import Island from 'src/assets/surface/island.svg';
import { useView } from 'src/hooks/useView';
import { useGetIsViewSet } from 'src/store/view/selectors';
import { View } from 'src/store/view/types';
import styles from 'src/styles';

import { Content } from './Content/Content';
import { DayOverlay } from './DayOverlay/DayOverlay';
import { dimensions } from './dimensions';
import { Palm } from './Palm/Palm';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(#80deea, #14e3fa 60%);
`;

const Water = styled.div`
  position: absolute;
  ${dimensions.water};

  background: radial-gradient(
    ${styles.colors.bgUnderwaterLight},
    ${styles.colors.bgUnderwaterDark} 60%
  );
`;

const IslandWrapper = styled.div`
  position: absolute;
  ${dimensions.island};
  width: 70%;
  transform: translateX(-50%);

  @media ${styles.breakpoints.smUp} {
    width: 35%;
  }

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const TemporaryButton = styled.div`
  position: absolute;
`;
export const Surface = () => {
  const isSurfaceSet = useGetIsViewSet(View.Surface);
  const { goDown } = useView();

  return (
    <Wrapper>
      <Water />

      <IslandWrapper>
        <Island />
      </IslandWrapper>

      <Palm />

      {isSurfaceSet && (
        <>
          <DayOverlay />
          <Content />
        </>
      )}

      <TemporaryButton onClick={goDown}>GoDown</TemporaryButton>
    </Wrapper>
  );
};
