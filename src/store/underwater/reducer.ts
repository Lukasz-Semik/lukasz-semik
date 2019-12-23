import { AnyAction } from 'redux';

import { SET_HEALTH_POINTS } from './actionTypes';

import { UnderwaterState } from './types';

export const initialState: UnderwaterState = {
  healthPoints: 100,
};

export default (
  state = initialState,
  incomingAction: AnyAction
): UnderwaterState => {
  const action = incomingAction;

  switch (action.type) {
    case SET_HEALTH_POINTS:
      return {
        ...state,
        healthPoints: state.healthPoints - action.payload.value,
      };
    default:
      return state;
  }
};
