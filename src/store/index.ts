import thunk from 'redux-thunk';
import {
  combineReducers,
  createStore as createStoreBase,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import underwater from './underwater/reducer';
import view from './view/reducer';

export const rootReducer = combineReducers({
  underwater,
  view,
});

export const createStore = () =>
  createStoreBase(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
