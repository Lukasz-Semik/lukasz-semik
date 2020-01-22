import React from 'react';
import styled from 'styled-components';

import BackgroundImage from 'src/assets/underwater/bg-underwater.svg';
import styles from 'src/styles';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${styles.colors.bgUnderwaterDark};
  background: linear-gradient(
    to top,
    ${styles.colors.bgUnderwaterDark},
    ${styles.colors.bgUnderwaterLight}
  );

  > svg {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Background = ({ children }: Props) => (
  <Wrapper>
    <BackgroundImage />
    {children}
  </Wrapper>
);
