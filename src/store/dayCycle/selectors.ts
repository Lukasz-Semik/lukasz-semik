import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import type { AppState } from '../types';
import type { DayPeriod } from './types';

export const getDayCycleState = (state: AppState) => state.dayCycle;

export const getDayPeriod = createSelector(
  getDayCycleState,
  dayCycle => dayCycle.dayPeriod
);
export const useGetDayPeriod = () => useSelector(getDayPeriod);

export const getIsTweening = createSelector(
  getDayCycleState,
  dayCycle => dayCycle.isTweening
);
export const useGetIsTweening = () => useSelector(getIsTweening);

export const getIsDayPeriod = (value: DayPeriod, state: AppState) => {
  const dayPeriod = getDayPeriod(state);

  return dayPeriod === value;
};
export const useGetIsDayPeriod = (dayPeriod: DayPeriod) =>
  useSelector(state => getIsDayPeriod(dayPeriod, state as AppState));
