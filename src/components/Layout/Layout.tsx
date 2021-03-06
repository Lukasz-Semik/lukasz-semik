import React from 'react';
import { Normalize } from 'styled-normalize';

import { GlobalStyles } from 'src/styles/GlobalStyles';

import { PageHead } from './components/PageHead';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: Props) => (
  <>
    <Normalize />
    <GlobalStyles />
    <PageHead />

    {children}
  </>
);

// Layout is loaded by gatsby, that's why we need stay with default import
export default Layout;
