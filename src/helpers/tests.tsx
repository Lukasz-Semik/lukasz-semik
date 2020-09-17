import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { find } from 'lodash';
import configureMockStore, { MockStore } from 'redux-mock-store';
import thunk from 'redux-thunk';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore usually we don't want to import json
import messagess from 'src/intl/en.json';

import type { AppState, ThunkDispatch } from 'src/store/types';
import { mockUnderwaterState } from 'src/store/underwater/testHelpers';
import { mockViewState } from 'src/store/view/testHelpers';
import { mockWindowContextState } from 'src/store/windowContext/testHelpers';

import { flattenMessages } from './intl';

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
    <IntlProvider locale="en" messages={flattenMessages(messagess)}>
      <div id="modal-root" />

      {children}
    </IntlProvider>
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
