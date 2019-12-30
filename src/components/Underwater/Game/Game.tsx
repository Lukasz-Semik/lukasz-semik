import React, { useState, useEffect } from 'react';
import { times } from 'lodash';

import { GameDrop } from '../Drop/GameDrop/GameDrop';
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
      {!isResetingDrops && times(40, i => <GameDrop key={`drop-${i}`} />)}

      <MainPanel resetDrops={() => setIsResetingDrops(true)} />
    </>
  );
};
