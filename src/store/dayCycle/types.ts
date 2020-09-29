import type { Action } from 'redux';

import type { SET_DAY_PERIOD, SET_IS_TWEENING } from './actionTypes';

export enum DayPeriod {
  Morning = 'morning', // about
  Day = 'day', // main landing
  Evening = 'evening', // stack
  Night = 'night', // experience
}

export interface DayCycleState {
  isTweening: boolean;
  dayPeriod: DayPeriod;
}

export interface SetDayPeriodAction extends Action<typeof SET_DAY_PERIOD> {
  payload: {
    dayPeriod: DayPeriod;
  };
}

export interface SetIsTweeningAction extends Action<typeof SET_IS_TWEENING> {
  payload: {
    isTweening: boolean;
  };
}

export type DayStateActionType = SetDayPeriodAction | SetIsTweeningAction;
