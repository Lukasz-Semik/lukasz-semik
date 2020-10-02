import { SET_DAY_PERIOD, SET_IS_TWEENING } from './actionTypes';
import type { DayPeriod } from './types';

export const setDayPeriod = (dayPeriod: DayPeriod) => ({
  type: SET_DAY_PERIOD,
  payload: {
    dayPeriod,
  },
});

export const setIsTweening = (isTweening: boolean) => ({
  type: SET_IS_TWEENING,
  payload: {
    isTweening,
  },
});
