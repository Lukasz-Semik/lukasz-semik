import React, { useMemo } from 'react';
import styled from 'styled-components';
import { times, random } from 'lodash';

import Satellite from './Satellite';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ rotation }) => `transform: rotateZ(${rotation}deg)`};
`;

const Satellites = () => {
  const rotation = useMemo(() => random(0, 180), []);

  return times(4, i => (
    <Wrapper rotation={rotation}>
      <Satellite key={`satellite-${i}`} index={i} />
    </Wrapper>
  ));
};

export default Satellites;
