import React from 'react';

import { Title } from '../Title/Title';
import { Starter } from '../Starter/Starter';
import { LandingDrops } from '../Drops2/LandingDrops/LandingDrops';

interface Props {
  isIntro: boolean;
  isStarter: boolean;
}

export const Landing = ({ isIntro, isStarter }: Props) => {
  return (
    <>
      <LandingDrops />

      {isIntro && <Title />}

      {isStarter && <Starter />}
    </>
  );
};
