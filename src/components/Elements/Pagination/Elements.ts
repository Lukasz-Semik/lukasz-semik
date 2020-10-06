import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';

export const PaginationButtonsWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: ${rem(40)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 ${rem(10)};
  font-size: ${rem(50)};
  color: ${styles.colors.greyAlpha};

  @media ${breakpoints.smUp} {
    bottom: ${rem(-40)};
  }
`;

export const PaginationButton = styled.button`
  width: ${rem(60)};
  font-size: ${rem(30)};
  font-weight: 900;
  color: rgba(0, 0, 0, 0.6);
  transition: color 0.7s ease;

  @media ${breakpoints.smUp} {
    font-size: ${rem(50)};
  }

  &:hover,
  &:focus {
    color: ${styles.colors.white};
  }
`;
