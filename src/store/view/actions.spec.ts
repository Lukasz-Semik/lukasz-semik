import { mockStore, findAction } from 'src/helpers/tests';

import { toggleWindowFocused, setIsWindowFocused, setAppView } from './actions';
import { SET_IS_WINDOW_FOCUSED, SET_APP_VIEW } from './actionTypes';
import { View } from './types';
import { mockViewState } from './testHelpers';
import { SET_IS_GAME_PAUSED } from '../underwater/actionTypes';

describe('view actions creators', () => {
  test('toggleWindowFocused', () => {
    const store = mockStore(mockViewState());

    store.dispatch(toggleWindowFocused(true));

    expect(findAction(store, SET_IS_WINDOW_FOCUSED)).toEqual({
      type: SET_IS_WINDOW_FOCUSED,
      payload: {
        isWindowFocused: true,
      },
    });
  });

  test('setAppView', () => {
    const store = mockStore(mockViewState());

    store.dispatch(setAppView(View.Surface));
    expect(findAction(store, SET_APP_VIEW)).toEqual({
      type: SET_APP_VIEW,
      payload: {
        appView: View.Surface,
      },
    });
  });

  describe('setIsWindowFocused', () => {
    it('should dispatch proper actions', () => {
      const store = mockStore(mockViewState());

      store.dispatch(setIsWindowFocused(true));

      expect(findAction(store, SET_IS_WINDOW_FOCUSED)).toEqual({
        type: SET_IS_WINDOW_FOCUSED,
        payload: {
          isWindowFocused: true,
        },
      });

      expect(findAction(store, SET_IS_GAME_PAUSED)).toBeUndefined();
    });

    it('should dispatch proper actions', () => {
      const store = mockStore(mockViewState());

      store.dispatch(setIsWindowFocused(false));

      expect(findAction(store, SET_IS_WINDOW_FOCUSED)).toEqual({
        type: SET_IS_WINDOW_FOCUSED,
        payload: {
          isWindowFocused: false,
        },
      });
      expect(findAction(store, SET_IS_GAME_PAUSED)).toBeDefined();
    });
  });
});
