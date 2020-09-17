import { initialState } from './reducer';
import type { UnderwaterState } from './types';

export const mockUnderwaterState = (state: Partial<UnderwaterState> = {}) => ({
  underwater: {
    ...initialState,
    ...state,
  },
});
