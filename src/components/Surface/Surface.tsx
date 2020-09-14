import React from 'react';
import styles from 'src/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #14e3fa;
`;

const Water = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: ${styles.colors.bgUnderwaterDark};
`;

export const Surface = () => (
  <Wrapper>
    <Water />
  </Wrapper>
);
