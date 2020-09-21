import type { Action } from 'redux';

import type { SET_DAY_PERIOD, SET_TWEENING_DAY_PERIOD } from './actionTypes';

export enum DayPeriod {
  Morning = 'morning', // about
  Day = 'day', // main landing
  Evening = 'evening', // stack
  Night = 'night', // experience
}

export interface DayCycleState {
  isTweening: boolean;
  tweeningDayPeriod?: DayPeriod;
  dayPeriod: DayPeriod;
}

export interface SetDayPeriodAction extends Action<typeof SET_DAY_PERIOD> {
  payload: {
    dayPeriod: DayPeriod;
  };
}

export interface SetTweeningDayPeriodAction
  extends Action<typeof SET_TWEENING_DAY_PERIOD> {
  payload: {
    dayPeriod: DayPeriod;
  };
}

export type DayStateActionType =
  | SetDayPeriodAction
  | SetTweeningDayPeriodAction;
