import { ViewState, View } from './types';

export const mockViewState = (state: Partial<ViewState> = {}) => ({
  view: {
    isWindowFocused: true,
    appView: View.Underwater,
    ...state,
  },
});
