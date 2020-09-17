import { initialState } from './reducer';
import type { ViewState } from './types';

export const mockViewState = (state: Partial<ViewState> = {}) => ({
  view: {
    ...initialState,
    ...state,
  },
});
