import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useRwdQuery } from 'src/hooks/useMediaQuery';
import {
  setIsWindowFocused,
  setIsWindowResized,
  setWindowData,
} from 'src/store/windowContext/actions';
import { useGetIsWindowResized } from 'src/store/windowContext/selectors';

// set ssr safe window usage
export const useWindow = () => {
  const dispatch = useDispatch();
  const isWindowResized = useGetIsWindowResized();
  const { isMediaMd } = useRwdQuery();

  useEffect(() => {
    if (window) {
      dispatch(setWindowData(window));

      window.onblur = () => {
        dispatch(setIsWindowFocused(false));
      };

      window.onfocus = () => {
        dispatch(setIsWindowFocused(true));
      };

      window.onresize = () => {
        if (!isWindowResized && isMediaMd) {
          dispatch(setIsWindowResized(true));
        }
      };
    }
  }, [dispatch, isWindowResized, isMediaMd]);
};
