import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import underwater from './underwater/reducer';
import view from './view/reducer';

export const rootReducer = combineReducers({
  underwater,
  view,
});

export const store = createStore(rootReducer, composeWithDevTools());
