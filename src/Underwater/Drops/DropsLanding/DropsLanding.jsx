import React from 'react';
import styled from 'styled-components';
import { times } from 'lodash';

import { styleOverlay } from 'src/styles/helpers';
import useUnderwaterState from 'src/Underwater/underwaterState/useUnderwaterState';

import Title from '../Title/Title';
// import Drop from '../Drop/Drop';
import Drop from '../Drop/Drop2';

const Wrapper = styled.div`
  ${styleOverlay}
`;

const DropsLanding = () => {
  const { setGameStateStarter } = useUnderwaterState();

  return (
    <Wrapper>
      {times(40, i => (
        <Drop key={`drop-${i}`} />
      ))}

      <Title />

      <button onClick={() => setGameStateStarter()}>dasdas</button>
    </Wrapper>
  );
};

export default DropsLanding;
