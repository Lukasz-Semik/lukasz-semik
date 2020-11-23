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

interface Props {
  isPreparingDrops: boolean;
}

export const LandingContent = ({ isPreparingDrops }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const isIntro = useGetIsUnderwaterIntro();
  const isStarter = useGetIsUnderwaterStarter();
  const { isUnderwaterViewMounted } = useView();

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 2);
  }, []);

  return isUnderwaterViewMounted ? (
    <>
      {isMounted && <BottomGroup />}

      {!isPreparingDrops && <LandingDrops />}

      {isIntro && <Title />}

      {isStarter && <Starter />}
    </>
  ) : null;
};
