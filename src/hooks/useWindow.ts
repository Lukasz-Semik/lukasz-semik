import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWindowContext } from 'src/store/view/actions';

interface WindowState {
  height: number;
  width: number;
  isBrowser: boolean;
}

// ssr safe window usage
export const useWindow = () => {
  const [windowState, setWindowState] = useState<WindowState>({
    height: 0,
    width: 0,
    isBrowser: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (window) {
      const windowContext = {
        height: window.innerHeight,
        width: window.innerWidth,
        isBrowser: true,
      };

      setWindowState(windowContext);
      dispatch(setWindowContext(windowContext));
    }
  }, [dispatch]);

  return {
    windowHeight: windowState.height,
    windowWidth: windowState.width,
    isBrowser: windowState.isBrowser,
  };
};
