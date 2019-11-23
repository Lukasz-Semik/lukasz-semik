import { createGlobalStyle } from 'styled-components';

import styles from './index';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Caveat Brush', cursive;
    background-color: ${styles.colors.bgUnderwaterLight};
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
  }
`;

export default GlobalStyles;
