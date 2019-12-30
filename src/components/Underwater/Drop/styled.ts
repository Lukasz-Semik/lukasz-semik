import styled, { css } from 'styled-components';

import { styleCircle } from 'src/styles/helpers';
import styles from 'src/styles';

interface DropDownButtonProps {
  dropSize: number;
  isVisible?: boolean;
  hasSparkle?: boolean;
}

export const DropButton = styled.button.attrs({ 'data-test': 'drop-button' })<
  DropDownButtonProps
>`
  ${({ dropSize }) => styleCircle(dropSize)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: 0;
  background-color: ${styles.colors.dropDark};
  border: 5px solid ${styles.colors.dropLight};
  pointer-events: all;
  transform: scale(0);

  ${({ hasSparkle }) =>
    hasSparkle &&
    css`
      &::after {
        ${styleCircle(10)};
        content: '';
        position: absolute;
        left: 30%;
        bottom: 15%;
        display: block;
        background-color: ${styles.colors.dropLight};
        pointer-events: none;
      }
    `};
`;
