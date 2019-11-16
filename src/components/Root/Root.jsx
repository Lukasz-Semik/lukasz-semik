import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

import GlobalStyles from 'src/styles/GlobalStyles';

import PageHead from './components/PageHead';
import BackgroundUnderwater from './components/BackgroundUnderwater';
import { ContentWrapper } from './components/styled';

const Root = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyles />
    <PageHead />

    <BackgroundUnderwater />

    <ContentWrapper>{children}</ContentWrapper>
  </>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
