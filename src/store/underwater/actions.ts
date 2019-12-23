import { SET_HEALTH_POINTS } from './actionTypes';

export const substractHealthPoints = (value: number) => ({
  type: SET_HEALTH_POINTS,
  payload: {
    value,
  },
});
