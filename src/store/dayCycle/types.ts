import type { Action } from 'redux';

import type { SET_DAY_PERIOD } from './actionTypes';

export enum DayPeriod {
  Morning = 'morning', // about
  Day = 'day', // main landing
  Evening = 'evening', // stack
  Night = 'night', // experience
}

export interface DayCycleState {
  dayPeriod: DayPeriod;
}

export interface SetDayPeriod extends Action<typeof SET_DAY_PERIOD> {
  payload: {
    dayPeriod: DayPeriod;
  };
}

export type DayStateActionType = SetDayPeriod;
