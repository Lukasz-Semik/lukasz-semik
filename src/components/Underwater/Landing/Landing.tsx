import React, { useState, useEffect } from 'react';

import {
  useGetIsUnderwaterIntro,
  useGetIsUnderwaterStarter,
} from 'src/store/underwater/selectors';
import { useGetIsWindowResized } from 'src/store/view/selectors';

import { Title } from './Title/Title';
import { Starter } from './Modals/Starter/Starter';
import { WindowResizedInfo } from './Modals/WindowResizedInfo/WindowResizedInfo';
import { LandingDrops } from '../Drops/LandingDrops/LandingDrops';

export const Landing = () => {
  const [isPreparingDrops, setIsPreparingDrops] = useState(false);
  const isIntro = useGetIsUnderwaterIntro();
  const isStarter = useGetIsUnderwaterStarter();
  const isWindowResized = useGetIsWindowResized();

  useEffect(() => {
    if (isPreparingDrops) {
      setIsPreparingDrops(false);
    }
  }, [isPreparingDrops]);

  return (
    <>
      {!isPreparingDrops && <LandingDrops />}

      {isIntro && !isWindowResized && <Title />}

      {isStarter && !isWindowResized && <Starter />}

      {isWindowResized && (
        <WindowResizedInfo resetDrops={() => setIsPreparingDrops(true)} />
      )}
    </>
  );
};
