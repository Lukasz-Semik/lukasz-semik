import { findAction, mockAppState, mockStore } from 'src/helpers/tests';

import { SET_IS_GAME_PAUSED } from '../underwater/actionTypes';
import { mockViewState } from '../view/testHelpers';
import { setIsWindowFocused } from './actions';
import { SET_IS_WINDOW_FOCUSED } from './actionTypes';
import { mockWindowContextState } from './testHelpers';

describe('view actions creators', () => {
  describe('setIsWindowFocused', () => {
    it('should dispatch proper actions', () => {
      const store = mockStore(
        mockAppState({
          ...mockWindowContextState(),
          ...mockViewState(),
        })
      );

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
      const store = mockStore(
        mockAppState({
          ...mockWindowContextState(),
          ...mockViewState(),
        })
      );

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
