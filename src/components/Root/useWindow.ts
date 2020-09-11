import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  setIsWindowFocused,
  setIsWindowResized,
  setWindowContext,
} from 'src/store/view/actions';
import { useGetIsWindowResized } from 'src/store/view/selectors';

// set ssr safe window usage
export const useWindow = () => {
  const dispatch = useDispatch();
  const isWindowResized = useGetIsWindowResized();

  useEffect(() => {
    if (window) {
      dispatch(setWindowContext(window));

      window.onblur = () => {
        dispatch(setIsWindowFocused(false));
      };

      window.onfocus = () => {
        dispatch(setIsWindowFocused(true));
      };

      window.onresize = () => {
        if (!isWindowResized) {
          dispatch(setIsWindowResized(true));
        }
      };
    }
  }, [dispatch, isWindowResized]);
};
