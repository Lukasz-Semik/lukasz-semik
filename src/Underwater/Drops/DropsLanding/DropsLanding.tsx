import React from 'react';
import styled from 'styled-components';
import { times } from 'lodash';

import { styleOverlay } from 'src/styles/helpers';
import useUnderwaterState from 'src/Underwater/underwaterState/useUnderwaterState';

import Title from '../Title/Title';
import Drop from '../Drop/Drop';

const Wrapper = styled.div`
  ${styleOverlay}
`;

// TODO: temporary
const Button = styled.button`
  position: absolute;
  top: 50px;
`;

const DropsLanding = () => {
  const { setGameStateStarter } = useUnderwaterState();
  console.log('dasdas');
  return (
    <Wrapper>
      {times(40, i => (
        <Drop key={`drop-${i}`} />
      ))}

      <Title />

      <Button onClick={() => setGameStateStarter()}>Test state</Button>
    </Wrapper>
  );
};

export default DropsLanding;
