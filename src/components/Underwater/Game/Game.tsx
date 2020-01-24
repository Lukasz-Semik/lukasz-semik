import React, { useState, useEffect } from 'react';

import { MainPanel } from './MainPanel/MainPanel';
import { GameScene } from './GameScene/GameScene';
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
          <BottomGroup />
          <GameScene />
        </>
      )}

      <MainPanel resetDrops={() => setIsResetingDrops(true)} />
    </>
  );
};
