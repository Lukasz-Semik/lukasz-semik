import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import type { AppState } from '../types';
import type { View } from './types';

export const getViewState = (state: AppState) => state.view;

export const getAppView = createSelector(getViewState, view => view.appView);
export const getAppFutureView = createSelector(
  getViewState,
  view => view.appFutureView
);

export const useGetAppView = () => useSelector(getAppFutureView);
export const useGetAppFutureView = () => useSelector(getAppFutureView);

export const getIsViewSet = (view: View, state: AppState) =>
  view === getAppView(state);
export const useGetIsViewSet = (view: View) =>
  useSelector(state => getIsViewSet(view, state as AppState));

export const getIsViewMounted = (view: View, state: AppState) => {
  const appView = getAppView(state);
  const appFutureView = getAppFutureView(state);

  return appView === view || appFutureView === view;
};

export const useGetIsViewMounted = (view: View) =>
  useSelector(state => getIsViewMounted(view, state as AppState));
