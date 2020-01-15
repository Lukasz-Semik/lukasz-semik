import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  useGetIsUnderwaterIntro,
  useGetIsUnderwaterStarter,
} from 'src/store/underwater/selectors';
import { useGetIsWindowResized } from 'src/store/view/selectors';
import { styleOverlay } from 'src/styles/helpers';

import { Title } from './Title/Title';
import { Starter } from './Modals/Starter/Starter';
import { WindowResizedInfo } from './Modals/WindowResizedInfo/WindowResizedInfo';
import { LandingDrops } from '../Drops/LandingDrops/LandingDrops';
import { Footer } from './Footer/Footer';
import { GoUpButton } from './GoUpButton/GoUpButton';
import { Header } from './Header/Header';

const Wrapper = styled.div`
  ${styleOverlay};
`;

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
    <Wrapper>
      <Header />

      <GoUpButton onViewGoUp={onViewGoUp} />

      {!isPreparingDrops && <LandingDrops />}

      {isIntro && <Title />}

      {isStarter && <Starter />}

      <Footer />
    </Wrapper>
  );
};
