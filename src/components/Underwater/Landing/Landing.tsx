import React from 'react';
import gsap from 'gsap';
import PixiPlugin from 'gsap/PixiPlugin';

import { Title } from '../Title/Title';
import { Starter } from '../Starter/Starter';
import { LandingDrops } from '../Drops/LandingDrops/LandingDrops';

gsap.registerPlugin(PixiPlugin);

interface Props {
  isIntro: boolean;
  isStarter: boolean;
}

export const Landing = ({ isIntro, isStarter }: Props) => (
  <>
    <LandingDrops />

    {isIntro && <Title />}

    {isStarter && <Starter />}
  </>
);
