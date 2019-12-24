import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { View } from 'src/store/view/types';
import { setAppView } from 'src/store/view/actions';

const views = [View.Underwater, View.Surface];

export const useView = () => {
  const [futureView, setFutureView] = useState<View>(View.Underwater);
  const [currentView, setCurrentView] = useState<View>(View.Underwater);
  const dispatch = useDispatch();

  const goUp = useCallback(() => {
    const currentIndex = views.indexOf(futureView);

    if (currentIndex < views.length - 1) {
      setFutureView(views[currentIndex + 1]);
    }
  }, [futureView]);

  const goDown = useCallback(() => {
    const currentIndex = views.indexOf(futureView);

    if (currentIndex) {
      setFutureView(views[currentIndex - 1]);
    }
  }, [futureView]);

  const setView = () => {
    dispatch(setAppView(futureView));
    setCurrentView(futureView);
  };

  return {
    futureView,
    currentView,
    goUp,
    goDown,
    setView,
    getIsMounted: (view: View) => futureView === view || currentView === view,
  };
};
