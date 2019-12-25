import { SET_IS_WINDOW_FOCUSED, SET_APP_VIEW } from './actionTypes';
import reducer, { initialState } from './reducer';
import { View } from './types';

describe('underwater reducer', () => {
  it('should return initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual(initialState);
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

  it(`should handle ${SET_APP_VIEW} action type`, () => {
    expect(
      reducer(initialState, {
        type: SET_APP_VIEW,
        payload: {
          appView: View.Surface,
        },
      })
    ).toEqual({
      ...initialState,
      appView: View.Surface,
    });
  });
});
