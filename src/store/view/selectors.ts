import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import type { AppState } from '../types';
import { View } from './types';

export const getViewState = (state: AppState) => state.view;

export const getIsWindowFocused = createSelector(
  getViewState,
  view => view.isWindowFocused
);

export const useGetIsWindowFocused = () => useSelector(getIsWindowFocused);

export const getAppView = createSelector(getViewState, view => view.appView);

export const getIsSurfaceView = createSelector(
  getAppView,
  view => view === View.Surface
);

export const useGetIsSurfaceView = () => useSelector(getIsSurfaceView);

export const getIsUnderwaterView = createSelector(
  getAppView,
  view => view === View.Underwater
);

export const getWindowContext = createSelector(
  getViewState,
  viewState => viewState.windowContext
);

export const useGetWindowContext = () => useSelector(getWindowContext);

export const getIsWindowResized = createSelector(
  getViewState,
  viewState => viewState.isWindowResized
);

export const useGetIsWindowResized = () => useSelector(getIsWindowResized);
