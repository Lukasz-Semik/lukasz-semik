import { createGlobalStyle } from 'styled-components';

import styles from './index';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow: hidden;
    max-height: 100vh;
    font-family: ${styles.fonts.standard};
    background-color: ${styles.colors.bgUnderwaterLight};
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
