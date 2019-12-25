import React from 'react';
import { IntlProvider } from 'react-intl';
import configureMockStore, { MockStore } from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { find } from 'lodash';

// @ts-ignore usually we don't want to import json
import messagess from 'src/intl/en.json';
import { AppState, ThunkDispatch } from 'src/store/types';

import { flattenMessages } from './intl';

export const mockStore = (data?: {}) => {
  const middlewares = [thunk];
  return configureMockStore<AppState, ThunkDispatch>(middlewares)(
    data as AppState
  );
};

export const findAction = (store: MockStore, actionType: string) =>
  find(store.getActions(), action => action.type === actionType);

interface Props {
  store?: {};
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

export const mockAppState = (state: Partial<AppState>) => state as AppState;
