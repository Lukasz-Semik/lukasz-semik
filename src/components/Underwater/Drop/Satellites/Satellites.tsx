import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { times, random } from 'lodash';

import { Satellite } from './Satellite';

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
  onSateliteClick: (points: number) => void;
}

export const Satellites = ({ maxOpacity, onSateliteClick }: Props) => {
  const [counter, setCounter] = useState(1);
  const rotation = useMemo(() => random(0, 180), []);

  const onClick = () => {
    if (onSateliteClick) {
      onSateliteClick(counter);
      setCounter(counter + 1);
    }
  };

  return (
    <Wrapper rotation={rotation}>
      {times(4, i => (
        <Satellite
          key={`satellite-${i}`}
          index={i}
          maxOpacity={maxOpacity}
          onClick={onClick}
        />
      ))}
    </Wrapper>
  );
};
