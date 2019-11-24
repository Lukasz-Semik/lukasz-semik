import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BackgroundImage from 'src/assets/bg-underwater.svg';
import styles from 'src/styles';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${styles.colors.bgUnderwaterDark};
  background: linear-gradient(
    to top,
    ${styles.colors.bgUnderwaterDark},
    ${styles.colors.bgUnderwaterLight}
  );

  svg {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Background = ({ children }) => (
  <Wrapper>
    <BackgroundImage />
    {children}
  </Wrapper>
);

export default Background;

Background.propTypes = {
  children: PropTypes.node.isRequired,
};
