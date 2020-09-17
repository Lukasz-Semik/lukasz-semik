import {
  applyMiddleware,
  combineReducers,
  createStore as createStoreBase,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import underwater from './underwater/reducer';
import view from './view/reducer';
import windowContext from './windowContext/reducer';

export const rootReducer = combineReducers({
  underwater,
  view,
  windowContext,
});

export const createStore = () =>
  createStoreBase(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
