import React, { useEffect, useState } from 'react';

import { BottomGroup } from '../BottomGroup/BottomGroup';
import { GameScene } from './GameScene/GameScene';
import { MainPanel } from './MainPanel/MainPanel';

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
