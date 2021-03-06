import type { AnyAction } from 'redux';

import { SET_APP_VIEW } from './actionTypes';
import reducer, { initialState } from './reducer';
import { View } from './types';

describe('underwater reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
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
