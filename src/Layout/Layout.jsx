import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import GlobalStyles from 'src/styles/GlobalStyles';

import PageHead from './components/PageHead';

const Layout = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyles />
    <PageHead />

    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
