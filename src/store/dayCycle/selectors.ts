import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import type { AppState } from '../types';

export const getDayCycleState = (state: AppState) => state.dayCycle;

export const getDayPeriod = createSelector(
  getDayCycleState,
  dayCycle => dayCycle.dayPeriod
);
export const useGetDayPeriod = () => useSelector(getDayPeriod);
