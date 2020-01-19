import React, { useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { random } from 'lodash';

import CoralSVG from 'src/assets/underwater/coral.svg';

import { StyleProps } from '../types';

const Wrapper = styled.div<Omit<StyleProps, 'opacity' | 'rotation'>>`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  bottom: ${({ bottom }) => `${bottom}%`};
  width: ${({ width }) => rem(width)};
  height: ${({ height }) => rem(height)};

  svg {
    width: 100%;
    height: 100%;
  }
`;
export const Coral = () => {
  const left = useMemo(() => random(5, 95), []);
  const bottom = useMemo(() => random(5, 75), []);
  const width = useMemo(() => random(90, 110), []);
  const height = useMemo(() => random(60, 80), []);

  return (
    <Wrapper left={left} bottom={bottom} width={width} height={height}>
      <CoralSVG />
    </Wrapper>
  );
};
