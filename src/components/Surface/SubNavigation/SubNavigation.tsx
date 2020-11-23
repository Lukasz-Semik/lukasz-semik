import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';

export const SubNavButton = styled.button<{
  isCurrent: boolean;
  mainColor?: string;
}>`
  display: block;
  width: ${rem(100)};
  padding: ${rem(5)} ${rem(10)};
  font-size: ${rem(14)};
  letter-spacing: 1px;
  text-align: center;
  color: ${({ isCurrent }) =>
    isCurrent ? styles.colors.white : styles.colors.greyAlpha};
  border-left: 1px solid ${styles.colors.greyAlpha};
  transition: color 0.5s ease;

  @media ${breakpoints.smUp} {
    width: ${rem(150)};
    padding: ${rem(5)} ${rem(10)};
    font-size: ${rem(20)};
  }

  &:last-of-type {
    border-right: 1px solid ${styles.colors.greyAlpha};
  }

  &:hover,
  &:focus {
    color: ${styles.colors.white};
  }
`;

export const SubNavButtonsWrapper = styled.div<{ isClicked: boolean }>`
  position: absolute;
  top: ${({ isClicked }) => (isClicked ? rem(80) : '35%')};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  transition: top 0.5s ease, transform 0.5s ease;

  @media ${breakpoints.smUp} {
    top: ${({ isClicked }) => (isClicked ? rem(100) : '35%')};
    transform: ${({ isClicked }) =>
      `translateX(-50%) scale(${isClicked ? 1 : 2})`};
  }
`;
