import React, { useState, useEffect } from 'react';

import { MainPanel } from './MainPanel/MainPanel';
import { GameDrops } from '../Drops2/GameDrops/GameDrops';

export const Game = () => {
  const [isResetingDrops, setIsResetingDrops] = useState(false);

  useEffect(() => {
    if (isResetingDrops) {
      setIsResetingDrops(false);
    }
  }, [isResetingDrops, setIsResetingDrops]);

  return (
    <>
      {!isResetingDrops && <GameDrops />}

      <MainPanel resetDrops={() => setIsResetingDrops(true)} />
    </>
  );
};
