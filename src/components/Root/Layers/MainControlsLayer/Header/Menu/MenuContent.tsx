import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import styled from 'styled-components';

import { useView } from 'src/hooks/useView';
import { setDayPeriod } from 'src/store/dayCycle/actions';
import { useGetDayPeriod } from 'src/store/dayCycle/selectors';
import { DayPeriod } from 'src/store/dayCycle/types';
import { setUnderwaterGame } from 'src/store/underwater/actions';
import styles from 'src/styles';

const Menu = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: ${rem(-8)};
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${rem(200)};
  padding: ${rem(10)};
  height: 200px;
  font-family: ${styles.fonts.standard};
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  color: white;
  transform: ${({ isVisible }) => `translateX(${isVisible ? 0 : '120%'})`};
  transition: transform 0.5s ease;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  margin-bottom: ${rem(20)};
  text-transform: uppercase;
  color: ${styles.colors.white};
  transition: color 0.5s ease;

  &:hover {
    color: ${styles.colors.grey};
  }
`;

interface Props {
  isVisible: boolean;
  closeMenu: () => void;
}

export const MenuContent = ({ isVisible, closeMenu }: Props) => {
  const { goDown, goUp, isUnderwaterViewSet } = useView();
  const dispatch = useDispatch();
  const dayPeriod = useGetDayPeriod();

  const goUnderwater = useCallback(() => {
    closeMenu();

    if (dayPeriod === DayPeriod.Day) {
      return goDown();
    }

    dispatch(setDayPeriod(DayPeriod.Day));
    setTimeout(goDown, 1500);
  }, [dispatch, dayPeriod, closeMenu, goDown]);

  const goSurface = useCallback(() => {
    closeMenu();
    goUp();
  }, [closeMenu, goUp]);

  return (
    <Menu isVisible={isVisible}>
      {isUnderwaterViewSet ? (
        <>
          <Button onClick={goSurface}>
            <FormattedMessage id="shared.goUp" />
          </Button>

          <Button onClick={() => dispatch(setUnderwaterGame())}>
            <FormattedMessage id="underwater.startGame" />
          </Button>
        </>
      ) : (
        <Button onClick={goUnderwater}>
          <FormattedMessage id="shared.goDown" />
        </Button>
      )}

      <Button>
        <FormattedMessage id="shared.contact" />
      </Button>

      <Button>
        <FormattedMessage id="shared.privacyPolicy" />
      </Button>
    </Menu>
  );
};
