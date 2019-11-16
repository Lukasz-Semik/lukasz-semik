import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';
import Background from 'src/assets/bg-u-test.svg';

const Wrapper = styled.div`
  ${styleOverlay}
  background: #b2fefa;
  background: -webkit-linear-gradient(to top, #0ed2f7, #b2fefa);
  background: linear-gradient(to top, #0ed2f7, #b2fefa);

  svg {
    width: 100% !important;
    height: 100% !important;
  }
`;

// TODO: not forget to move it to styled if FC will be not needed
const BackgroundUnderwater = ({ children }) => (
  <Wrapper>
    <Background />
    {children}
  </Wrapper>
);

BackgroundUnderwater.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundUnderwater;
