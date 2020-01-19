import React, { useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { random } from 'lodash';

import GrassSVG from 'src/assets/underwater/grass.svg';

import { StyleProps } from '../types';

const Wrapper = styled.div<Omit<StyleProps, 'rotation'>>`
  position: absolute;
  bottom: ${({ bottom }) => `${bottom}%`};
  left: ${({ left }) => `${left}%`};
  width: ${({ width }) => rem(width)};
  height: ${({ height }) => rem(height)};
  opacity: ${({ opacity }) => opacity};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Grass = () => {
  const width = useMemo(() => random(40, 80), []);
  const height = useMemo(() => random(80, 160), []);
  const left = useMemo(() => random(5, 95), []);
  const bottom = useMemo(() => random(5, 75), []);
  const opacity = useMemo(() => random(0.6, 0.8, true), []);

  return (
    <Wrapper
      width={width}
      height={height}
      left={left}
      bottom={bottom}
      opacity={opacity}
    >
      <GrassSVG />
    </Wrapper>
  );
};
