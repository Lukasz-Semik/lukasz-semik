import React from 'react';
import { Provider } from 'react-redux';
import find from 'lodash/find';
import configureMockStore, { MockStore } from 'redux-mock-store';
import thunk from 'redux-thunk';

import type { AppState, ThunkDispatch } from 'src/store/types';
import { mockUnderwaterState } from 'src/store/underwater/testHelpers';
import { mockViewState } from 'src/store/view/testHelpers';
import { mockWindowContextState } from 'src/store/windowContext/testHelpers';

export const mockStore = (data?: Record<string, unknown>) => {
  const middlewares = [thunk];
  return configureMockStore<AppState, ThunkDispatch>(middlewares)(
    data as AppState
  );
};

export const findAction = (store: MockStore, actionType: string) =>
  find(store.getActions(), action => action.type === actionType);

interface Props {
  store?: Record<string, unknown>;
  children: React.ReactNode | React.ReactNode[];
  withModalRoot?: boolean;
}

export const TesterWrapper = ({ store, children }: Props) => {
  let wrapper = (
    <>
      <div id="modal-root" />

      {children}
    </>
  );

  if (store) {
    wrapper = <Provider store={mockStore(store)}>{wrapper}</Provider>;
  }

  return wrapper;
};

export const mockAppState = (state: Partial<AppState>) =>
  ({
    ...mockUnderwaterState({}),
    ...mockViewState({}),
    ...mockWindowContextState({}),
    ...state,
  } as AppState);
