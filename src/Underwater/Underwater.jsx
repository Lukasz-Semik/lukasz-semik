import React from 'react';

import Background from './Background/Background';
import DropsLanding from './Drops/DropsLanding/DropsLanding';
import { UnderwaterStateProvider } from './underwaterState/UnderwaterStateProvider';

const Underwater = () => {
  return (
    <UnderwaterStateProvider>
      <Background>
        <DropsLanding />
      </Background>
    </UnderwaterStateProvider>
  );
};

export default Underwater;
