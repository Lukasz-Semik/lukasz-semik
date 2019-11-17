import { createGlobalStyle } from 'styled-components';

import styles from './index';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${styles.colors.bgUnderwaterLight};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
