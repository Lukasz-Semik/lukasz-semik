import React, { useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { random } from 'lodash';

import Shell1 from 'src/assets/underwater/shell_1.svg';
import Shell2 from 'src/assets/underwater/shell_2.svg';
import Shell3 from 'src/assets/underwater/shell_3.svg';
import Shell4 from 'src/assets/underwater/shell_4.svg';
import Shell5 from 'src/assets/underwater/shell_5.svg';

import { StyleProps } from '../types';

const Wrapper = styled.div<Omit<StyleProps, 'opacity'>>`
  position: absolute;
  bottom: ${({ bottom }) => `${bottom}%`};
  left: ${({ left }) => `${left}%`};
  width: ${({ width }) => rem(width)};
  height: ${({ height }) => rem(height)};
  opacity: 1;
  transform: rotateZ(${({ rotation }) => `${rotation}deg`});

  svg {
    width: 100%;
    height: 100%;
  }
`;

const items = [Shell1, Shell2, Shell3, Shell4, Shell5];

export const Shell = () => {
  const Item = useMemo(() => items[random(0, items.length - 1)], []);
  const width = useMemo(() => random(35, 40), []);
  const height = useMemo(() => random(35, 40), []);
  const left = useMemo(() => random(5, 95), []);
  const bottom = useMemo(() => random(5, 55), []);
  const rotation = useMemo(() => random(0, 180), []);

  return (
    <Wrapper
      width={width}
      height={height}
      left={left}
      bottom={bottom}
      rotation={rotation}
    >
      <Item />
    </Wrapper>
  );
};
