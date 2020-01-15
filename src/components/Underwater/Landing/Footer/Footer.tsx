import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Social } from './Social/Social';
import { Note } from './Note/Note';

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${rem(10)};
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <Social />

      <Note />
    </FooterStyled>
  );
};
