import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';
import Background from 'src/assets/bg-underwater.svg';
import styles from 'src/styles';

const Wrapper = styled.div`
  ${styleOverlay}
  background: ${styles.colors.bgUnderwaterDark};
  background: linear-gradient(to top, ${styles.colors.bgUnderwaterDark}, ${styles.colors.bgUnderwaterLight});

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
