import React from 'react';
import { times } from 'lodash';

import Title from '../Title/Title';
import IntroDrop from '../Drops/IntroDrop/IntroDrop';
import Starter from '../Starter/Starter';

interface Props {
  isIntro: boolean;
  isStarter: boolean;
}

const DropsLanding = ({ isIntro, isStarter }: Props) => (
  <>
    {times(40, i => (
      <IntroDrop key={`drop-${i}`} />
    ))}

    {isIntro && <Title />}

    {isStarter && <Starter />}
  </>
);

export default DropsLanding;
