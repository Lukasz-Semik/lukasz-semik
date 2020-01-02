import { ViewState } from './types';
import { initialState } from './reducer';

export const mockViewState = (state: Partial<ViewState> = {}) => ({
  view: {
    ...initialState,
    ...state,
  },
});
