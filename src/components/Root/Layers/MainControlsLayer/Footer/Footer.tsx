import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { overlayPointerEvents } from 'src/styles/helpers';

import { Note } from './Note/Note';
import { Social } from './Social/Social';

const FooterStyled = styled.footer`
  ${overlayPointerEvents};
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${rem(10)};
`;

export const Footer = () => (
  <FooterStyled>
    <Social />

    <Note />
  </FooterStyled>
);
