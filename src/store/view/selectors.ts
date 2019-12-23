import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

import { AppState } from '../types';

export const getViewState = (state: AppState) => state.view;

export const getIsWindowFocused = createSelector(
  getViewState,
  view => view.isWindowFocused
);

export const useGetIsWindowFocused = () => useSelector(getIsWindowFocused);
