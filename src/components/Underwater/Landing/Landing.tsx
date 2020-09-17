import React, { useEffect, useState } from 'react';

import { useGetIsWindowResized } from 'src/store/view/selectors';

import { LandingContent } from './LandingContent/LandingContent';
import { WindowResizedInfo } from './Modals/WindowResizedInfo/WindowResizedInfo';

export const Landing = () => {
  const [isPreparingDrops, setIsPreparingDrops] = useState(false);
  const isWindowResized = useGetIsWindowResized();

  useEffect(() => {
    if (isPreparingDrops) {
      setIsPreparingDrops(false);
    }
  }, [isPreparingDrops]);

  return isWindowResized ? (
    <WindowResizedInfo resetDrops={() => setIsPreparingDrops(true)} />
  ) : (
    <LandingContent />
  );
};
