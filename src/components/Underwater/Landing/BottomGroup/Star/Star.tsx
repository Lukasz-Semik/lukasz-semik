import React, { useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { random } from 'lodash';

import StarSVG from 'src/assets/underwater/star.svg';

import { StyleProps } from '../types';

const Wrapper = styled.div<Omit<StyleProps, 'opacity'>>`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  bottom: ${({ bottom }) => `${bottom}%`};
  width: ${({ width }) => rem(width)};
  height: ${({ height }) => rem(height)};
  transform: rotateZ(${({ rotation }) => `${rotation}deg`});

  svg {
    width: 100%;
    height: 100%;
  }
`;
export const Star = () => {
  const left = useMemo(() => random(5, 95), []);
  const bottom = useMemo(() => random(5, 55), []);
  const width = useMemo(() => random(30, 50), []);
  const height = useMemo(() => random(30, 50), []);
  const rotation = useMemo(() => random(0, 180), []);

  return (
    <Wrapper
      left={left}
      bottom={bottom}
      width={width}
      height={height}
      rotation={rotation}
    >
      <StarSVG />
    </Wrapper>
  );
};
