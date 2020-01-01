import { useState, useEffect } from 'react';

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

  useEffect(() => {
    if (window) {
      setWindowState({
        height: window.innerHeight,
        width: window.innerWidth,
        isBrowser: true,
      });
    }
  }, []);

  return {
    windowHeight: windowState.height,
    windowWidth: windowState.width,
    isBrowser: windowState.isBrowser,
  };
};
