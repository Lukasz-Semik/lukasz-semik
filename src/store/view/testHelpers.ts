import { initialState } from './reducer';
import { ViewState } from './types';

export const mockViewState = (state: Partial<ViewState> = {}) => ({
  view: {
    ...initialState,
    ...state,
  },
});
