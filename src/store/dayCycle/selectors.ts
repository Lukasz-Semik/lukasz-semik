import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import type { AppState } from '../types';
import { DayPeriod } from './types';

export const getDayCycleState = (state: AppState) => state.dayCycle;

export const getDayPeriod = createSelector(
  getDayCycleState,
  dayCycle => dayCycle.dayPeriod
);
export const useGetDayPeriod = () => useSelector(getDayPeriod);

export const getTweeningDayPeriod = createSelector(
  getDayCycleState,
  dayCycle => dayCycle.tweeningDayPeriod
);
export const useGetTweeningDayPeriod = () => useSelector(getTweeningDayPeriod);

export const getIsTweening = createSelector(
  getDayCycleState,
  dayCycle => dayCycle.isTweening
);
export const useGetIsTweening = () => useSelector(getIsTweening);

export const getIsDayPeriod = (value: DayPeriod, state: AppState) => {
  const isTweening = getIsTweening(state);
  const dayPeriod = getDayPeriod(state);
  const tweeningDayPeriod = getTweeningDayPeriod(state);

  return isTweening ? tweeningDayPeriod === value : dayPeriod === value;
};
export const useGetIsDayPeriod = (dayPeriod: DayPeriod) =>
  useSelector(state => getIsDayPeriod(dayPeriod, state as AppState));

export const getIsNight = createSelector(
  getIsTweening,
  getDayPeriod,
  getTweeningDayPeriod,
  (isTweening, dayPeriod, tweeningDayPeriod) =>
    isTweening
      ? tweeningDayPeriod === DayPeriod.Night
      : dayPeriod === DayPeriod.Night
);
export const useGetIsNight = () => useSelector(getIsNight);
