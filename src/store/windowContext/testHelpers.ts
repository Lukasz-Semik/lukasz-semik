import { initialState } from './reducer';
import type { WindowContextState } from './types';

export const mockWindowContextState = (
  state: Partial<WindowContextState> = {}
) => ({
  windowContext: {
    ...initialState,
    ...state,
  },
});
