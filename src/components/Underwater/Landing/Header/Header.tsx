import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Logo } from './Logo/Logo';
import { Hamburger } from './Menu/Hamburger';

const Wrapper = styled.header`
  position: absolute;
  left: 0;
  top: ${rem(15)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${rem(10)};
`;

export const Header = () => {
  return (
    <Wrapper>
      <Logo />

      <Hamburger />
    </Wrapper>
  );
};
