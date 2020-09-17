import React, { useEffect, useState } from 'react';

import { useView } from 'src/hooks/useView';
import {
  useGetIsUnderwaterIntro,
  useGetIsUnderwaterStarter,
} from 'src/store/underwater/selectors';

import { BottomGroup } from '../../BottomGroup/BottomGroup';
import { LandingDrops } from '../LandingDrops/LandingDrops';
import { Starter } from '../Modals/Starter/Starter';
import { Title } from '../Title/Title';

export const LandingContent = () => {
  const [isPreparingDrops, setIsPreparingDrops] = useState(false);
  const isIntro = useGetIsUnderwaterIntro();
  const isStarter = useGetIsUnderwaterStarter();
  const { isUnderwaterViewMounted } = useView();

  useEffect(() => {
    if (isPreparingDrops) {
      setIsPreparingDrops(false);
    }
  }, [isPreparingDrops]);

  return isUnderwaterViewMounted ? (
    <>
      <BottomGroup />

      {!isPreparingDrops && <LandingDrops />}

      {isIntro && <Title />}

      {isStarter && <Starter />}
    </>
  ) : null;
};
