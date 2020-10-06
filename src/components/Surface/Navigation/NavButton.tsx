import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { useGetDayPeriod } from 'src/store/dayCycle/selectors';
import { DayPeriod } from 'src/store/dayCycle/types';
import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';

const Button = styled.button<{ hasGreyTheme: boolean; isMarked: boolean }>`
  position: relative;
  margin-right: ${rem(5)};
  margin-bottom: ${rem(10)};
  font-size: ${rem(12)};
  font-family: ${styles.fonts.standard};
  font-weight: 900;
  text-transform: uppercase;
  color: ${({ hasGreyTheme }) =>
    hasGreyTheme ? styles.colors.grey : styles.colors.black};
  transition: color 0.5s ease;

  @media ${breakpoints.smUp} {
    margin-right: ${rem(20)};
    font-size: ${rem(30)};
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ hasGreyTheme }) =>
      hasGreyTheme ? styles.colors.grey : styles.colors.black};
    transform: ${({ isMarked }) => `scaleX(${isMarked ? 1 : 0})`};
    transition: transform 0.5s ease, background-color 0.5s ease;

    @media ${breakpoints.smUp} {
      height: 3px;
    }
  }

  &:hover {
    color: white;

    &::after {
      background-color: ${styles.colors.white};
      transform: scaleX(1);
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

interface Props {
  onClick: () => void;
  day: DayPeriod;
  children: React.ReactNode;
}

export const NavButton = ({ onClick, day, children }: Props) => {
  const dayPeriod = useGetDayPeriod();
  const isNight = dayPeriod === DayPeriod.Night;

  return (
    <Button
      hasGreyTheme={isNight}
      isMarked={dayPeriod === day}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
