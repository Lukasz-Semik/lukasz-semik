import type { AnyAction } from 'redux';

import { SET_IS_WINDOW_FOCUSED } from './actionTypes';
import reducer, { initialState } from './reducer';

describe('underwater reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it(`should handle ${SET_IS_WINDOW_FOCUSED} action type`, () => {
    expect(
      reducer(initialState, {
        type: SET_IS_WINDOW_FOCUSED,
        payload: {
          isWindowFocused: true,
        },
      })
    ).toEqual({
      ...initialState,
      isWindowFocused: true,
    });
  });
});
