import { initialState } from './reducer';
import { UnderwaterState } from './types';

export const mockUnderwaterState = (state: Partial<UnderwaterState> = {}) => ({
  underwater: {
    ...initialState,
    ...state,
  },
});
