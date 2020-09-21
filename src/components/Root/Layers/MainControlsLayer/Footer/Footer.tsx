import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { overlayPointerEvents } from 'src/styles/helpers';

import { ColorProps, getTransition } from '../helpers';
import { Note } from './Note/Note';
import { Social } from './Social/Social';

const FooterStyled = styled.footer<ColorProps>`
  ${overlayPointerEvents};
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${rem(10)};
  color: ${({ mainColor }) => mainColor};
  transition: ${getTransition('color')};

  svg {
    color: ${({ mainColor }) => mainColor};
    transition: ${getTransition('color')};
  }
`;

export const Footer = ({ mainColor }: ColorProps) => (
  <FooterStyled mainColor={mainColor}>
    <Social />

    <Note />
  </FooterStyled>
);
