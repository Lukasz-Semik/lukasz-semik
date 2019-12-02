import React, { useCallback } from 'react';
import styled from 'styled-components';
import { times } from 'lodash';

import { styleOverlay } from 'src/styles/helpers';

import Title from '../Title/Title';
import Drop from '../Drop/Drop';
import Starter from '../../Starter/Starter';
import { GameState, useUnderwaterState } from '../../underwaterState';

const Wrapper = styled.div`
  ${styleOverlay}
`;

const DropsLanding = () => {
  const {
    setGameStateIntro,
    getIsGameStateIntro,
    getIsGameStateStarter,
    getIsGameStateLoader,
  } = useUnderwaterState();

  return (
    <Wrapper>
      {times(40, i => (
        <Drop key={`drop-${i}`} />
      ))}

      {getIsGameStateIntro() && <Title />}

      {(getIsGameStateStarter() || getIsGameStateLoader()) && <Starter />}
    </Wrapper>
  );
};

export default DropsLanding;
