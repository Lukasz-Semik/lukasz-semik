import { SET_DAY_PERIOD, SET_TWEENING_DAY_PERIOD } from './actionTypes';
import type { DayPeriod } from './types';

export const setDayPeriod = (dayPeriod: DayPeriod) => ({
  type: SET_DAY_PERIOD,
  payload: {
    dayPeriod,
  },
});

export const setTweeningDayPeriod = (dayPeriod: DayPeriod) => ({
  type: SET_TWEENING_DAY_PERIOD,
  payload: {
    dayPeriod,
  },
});
