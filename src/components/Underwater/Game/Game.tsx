import React, { useState, useEffect } from 'react';

import { MainPanel } from './MainPanel/MainPanel';
import { GameDrops } from '../Drops/GameDrops/GameDrops';
import { BottomGroup } from '../BottomGroup/BottomGroup';

export const Game = () => {
  const [isResetingDrops, setIsResetingDrops] = useState(false);

  useEffect(() => {
    if (isResetingDrops) {
      setIsResetingDrops(false);
    }
  }, [isResetingDrops, setIsResetingDrops]);

  return (
    <>
      {!isResetingDrops && (
        <>
          <GameDrops />
          <BottomGroup />
        </>
      )}

      <MainPanel resetDrops={() => setIsResetingDrops(true)} />
    </>
  );
};
