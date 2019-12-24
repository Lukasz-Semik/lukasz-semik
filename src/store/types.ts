import { Action, AnyAction } from 'redux';
import {
  ThunkAction as ThunkActionBase,
  ThunkDispatch as ThunkDispatchBase,
} from 'redux-thunk';

import { rootReducer } from './index';

export type AppState = ReturnType<typeof rootReducer>;

export type ThunkAction<
  R = void,
  E = undefined,
  A extends Action = AnyAction
> = ThunkActionBase<R, AppState, E, A>;

export type ThunkDispatch<
  E = undefined,
  A extends Action = AnyAction
> = ThunkDispatchBase<AppState, E, A>;
