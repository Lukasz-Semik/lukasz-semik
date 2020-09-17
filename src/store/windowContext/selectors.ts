import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import type { AppState } from '../types';

export const getWindowContextState = (state: AppState) => state.windowContext;

export const getIsWindowFocused = createSelector(
  getWindowContextState,
  windowContext => windowContext.isWindowFocused
);
export const useGetIsWindowFocused = () => useSelector(getIsWindowFocused);

export const getWindowData = createSelector(
  getWindowContextState,
  windowContext => windowContext.windowData
);

export const useGetWindowData = () => useSelector(getWindowData);

export const getIsWindowResized = createSelector(
  getWindowContextState,
  windowContext => windowContext.isWindowResized
);

export const useGetIsWindowResized = () => useSelector(getIsWindowResized);
