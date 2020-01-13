import styled from 'styled-components';
import { rem } from 'polished';

import styles from 'src/styles';

export const ButtonElement = styled.button`
  font-size: ${rem(35)};
  color: ${styles.colors.grey};
  transition: color 0.3s ease;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${styles.colors.grey};
    transform: scale(0);
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  &:hover {
    color: black;

    &::after {
      background-color: black;
      transform: scale(1);
    }
  }
`;
