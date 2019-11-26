import { useState, useCallback } from 'react';

const viewType = {
  underwater: 'underwater',
  surface: 'surface',
};

const views = [viewType.underwater, viewType.surface];

const useView = () => {
  const [futureView, setFutureView] = useState(viewType.underwater);
  const [currentView, setCurrentView] = useState(viewType.underwater);

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

  return {
    futureView,
    currentView,
    goUp,
    goDown,
    viewType,
    setView: () => setCurrentView(futureView),
    getIsMounted: view => futureView === view || currentView === view,
  };
};

export default useView;
