import React, { useMemo } from 'react';
import styled from 'styled-components';
import { times, random } from 'lodash';

import Satellite from './Satellite';

const Wrapper = styled.div<{ rotation: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ rotation }) => `transform: rotateZ(${rotation}deg)`};
`;

interface Props {
  maxOpacity?: number;
}

const Satellites = ({ maxOpacity }: Props) => {
  const rotation = useMemo(() => random(0, 180), []);

  return (
    <Wrapper rotation={rotation}>
      {times(4, i => (
        <Satellite key={`satellite-${i}`} index={i} maxOpacity={maxOpacity} />
      ))}
    </Wrapper>
  );
};

export default Satellites;
