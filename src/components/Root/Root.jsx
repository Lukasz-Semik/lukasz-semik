import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import GlobalStyles from 'src/styles/GlobalStyles';

import PageHead from './components/PageHead';

const Root = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyles />
    <PageHead />

    {children}
  </>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
