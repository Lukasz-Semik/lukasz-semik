import { useState, useEffect } from 'react';

// ssr safe window usage
export const useWindow = () => {
  const [windowHeight, setWindowHeigth] = useState(880);

  useEffect(() => {
    if (window) {
      setWindowHeigth(window.innerHeight);
    }
  }, []);

  return {
    windowHeight,
  };
};
