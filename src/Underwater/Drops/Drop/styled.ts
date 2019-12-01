import styled, { css } from 'styled-components';
import { size, rem } from 'polished';

import { styleCircle } from 'src/styles/helpers';
import styles from 'src/styles';

export const SwimmingWrapper = styled.div<{
  dropSize: number;
  leftPosition: number;
}>`
  ${({ dropSize }) => size(rem(dropSize))};
  position: absolute;
  top: 80%;
  left: ${({ leftPosition }) => leftPosition}%;
  pointer-events: none;
`;

interface DropDownButtonProps {
  dropSize: number;
  isVisible?: boolean;
  hasSparkle?: boolean;
}

export const DropButton = styled.button<DropDownButtonProps>`
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
