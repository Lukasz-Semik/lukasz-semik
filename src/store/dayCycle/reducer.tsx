import type { AnyAction } from 'redux';

import { SET_DAY_PERIOD, SET_IS_TWEENING } from './actionTypes';
import { DayCycleState, DayPeriod, DayStateActionType } from './types';

export const initialState: DayCycleState = {
  dayPeriod: DayPeriod.Night,
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
        isTweening: true,
        dayPeriod: action.payload.dayPeriod,
      };
    case SET_IS_TWEENING:
      return {
        ...state,
        isTweening: action.payload.isTweening,
      };
    default:
      return state;
  }
};
