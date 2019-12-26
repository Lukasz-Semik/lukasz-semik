import { UnderwaterState } from './types';
import { initialState } from './reducer';

export const mockUnderwaterState = (state: Partial<UnderwaterState> = {}) => ({
  underwater: {
    ...initialState,
    ...state,
  },
});
