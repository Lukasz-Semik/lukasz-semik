import React, { useState, useEffect } from 'react';

import {
  useGetIsUnderwaterIntro,
  useGetIsUnderwaterStarter,
} from 'src/store/underwater/selectors';
import { useGetIsWindowResized } from 'src/store/view/selectors';

import { Title } from './Title/Title';
import { Starter } from './Modals/Starter/Starter';
import { WindowResizedInfo } from './Modals/WindowResizedInfo/WindowResizedInfo';
import { LandingDrops } from './LandingDrops/LandingDrops';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { BottomGroup } from '../BottomGroup/BottomGroup';

interface Props {
  onViewGoUp: () => void;
}

export const Landing = ({ onViewGoUp }: Props) => {
  const [isPreparingDrops, setIsPreparingDrops] = useState(false);
  const isIntro = useGetIsUnderwaterIntro();
  const isStarter = useGetIsUnderwaterStarter();
  const isWindowResized = useGetIsWindowResized();

  useEffect(() => {
    if (isPreparingDrops) {
      setIsPreparingDrops(false);
    }
  }, [isPreparingDrops]);

  return isWindowResized ? (
    <WindowResizedInfo resetDrops={() => setIsPreparingDrops(true)} />
  ) : (
    <>
      <BottomGroup />

      {!isPreparingDrops && <LandingDrops />}

      <Header />

      {isIntro && <Title onViewGoUp={onViewGoUp} />}

      {isStarter && <Starter />}

      <Footer />
    </>
  );
};
