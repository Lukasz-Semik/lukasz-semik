import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import underwater from './underwater/reducer';

export const rootReducer = combineReducers({
  underwater,
});

export const store = createStore(rootReducer, composeWithDevTools());
