import type { AnyAction } from 'redux';

import { SET_DAY_PERIOD, SET_TWEENING_DAY_PERIOD } from './actionTypes';
import { DayCycleState, DayPeriod, DayStateActionType } from './types';

export const initialState: DayCycleState = {
  dayPeriod: DayPeriod.Day,
  tweeningDayPeriod: undefined,
  isTweening: false,
};

export default (
  state = initialState,
  incomingAction: AnyAction
): DayCycleState => {
  const action = incomingAction as DayStateActionType;

  switch (action.type) {
    case SET_DAY_PERIOD:
      return {
        ...state,
        isTweening: false,
        tweeningDayPeriod: undefined,
        dayPeriod: action.payload.dayPeriod,
      };
    case SET_TWEENING_DAY_PERIOD:
      return {
        ...state,
        isTweening: true,
        tweeningDayPeriod: action.payload.dayPeriod,
      };
    default:
      return state;
  }
};
