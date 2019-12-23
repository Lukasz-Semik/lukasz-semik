import { useState, useCallback } from 'react';

export enum View {
  Underwater = 'underwater',
  Surface = 'surface',
}

const views = [View.Underwater, View.Surface];

export const useView = () => {
  const [futureView, setFutureView] = useState<View>(View.Underwater);
  const [currentView, setCurrentView] = useState<View>(View.Underwater);

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
    setView: () => setCurrentView(futureView),
    getIsMounted: (view: View) => futureView === view || currentView === view,
  };
};
