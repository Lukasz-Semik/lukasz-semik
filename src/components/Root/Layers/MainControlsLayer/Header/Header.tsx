import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { overlayPointerEvents } from 'src/styles/helpers';

import { ColorProps, getTransition } from '../helpers';
import { Logo } from './Logo/Logo';
import { Hamburger } from './Menu/Hamburger';

const Wrapper = styled.header<ColorProps>`
  ${overlayPointerEvents};
  position: absolute;
  left: 0;
  top: ${rem(15)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${rem(10)};
  color: ${({ mainColor }) => mainColor};
  transition: ${getTransition('color')};
`;

export const Header = ({ mainColor }: ColorProps) => (
  <Wrapper mainColor={mainColor}>
    <Logo />

    <Hamburger mainColor={mainColor} />
  </Wrapper>
);
