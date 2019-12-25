import React from 'react';
import styled from 'styled-components';

// @ts-ignore TODO: resolve problem with imports of svg
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

  > svg {
    width: 100% !important;
    height: 100% !important;
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
