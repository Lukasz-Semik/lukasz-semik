import type { AnyAction } from 'redux';

import { SET_DAY_PERIOD } from './actionTypes';
import { DayCycleState, DayPeriod, DayStateActionType } from './types';

export const initialState: DayCycleState = {
  dayPeriod: DayPeriod.Day,
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
        dayPeriod: action.payload.dayPeriod,
      };
    default:
      return state;
  }
};
