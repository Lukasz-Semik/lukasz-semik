import React from 'react';

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
  const isIntro = useGetIsUnderwaterIntro();
  const isStarter = useGetIsUnderwaterStarter();
  const { isUnderwaterViewMounted } = useView();

  return isUnderwaterViewMounted ? (
    <>
      <BottomGroup />

      {!isPreparingDrops && <LandingDrops />}

      {isIntro && <Title />}

      {isStarter && <Starter />}
    </>
  ) : null;
};
