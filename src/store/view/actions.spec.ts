import { findAction, mockStore } from 'src/helpers/tests';

import { setAppFutureView, setAppView } from './actions';
import { SET_APP_FUTURE_VIEW, SET_APP_VIEW } from './actionTypes';
import { mockViewState } from './testHelpers';
import { View } from './types';

describe('view actions creators', () => {
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

  test('setAppFutureView', () => {
    const store = mockStore(mockViewState());

    store.dispatch(setAppFutureView(View.Surface));
    expect(findAction(store, SET_APP_FUTURE_VIEW)).toEqual({
      type: SET_APP_FUTURE_VIEW,
      payload: {
        appView: View.Surface,
      },
    });
  });
});
