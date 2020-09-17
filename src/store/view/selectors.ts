import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import type { AppState } from '../types';
import { View } from './types';

export const getViewState = (state: AppState) => state.view;

export const getAppView = createSelector(getViewState, view => view.appView);
export const getAppFutureView = createSelector(
  getViewState,
  view => view.appFutureView
);

export const useGetAppView = () => useSelector(getAppFutureView);
export const useGetAppFutureView = () => useSelector(getAppFutureView);

export const getIsSurfaceView = createSelector(
  getAppView,
  view => view === View.Surface
);

export const useGetIsSurfaceView = () => useSelector(getIsSurfaceView);

export const getIsUnderwaterView = createSelector(
  getAppView,
  view => view === View.Underwater
);

export const useGetIsUnderwaterView = () => useSelector(getIsUnderwaterView);

export const getIsViewMounted = (view: View, state: AppState) => {
  const appView = getAppView(state);
  const appFutureView = getAppFutureView(state);

  return appView === view || appFutureView === view;
};

export const useGetIsViewMounted = (view: View) =>
  useSelector(state => getIsViewMounted(view, state as AppState));
