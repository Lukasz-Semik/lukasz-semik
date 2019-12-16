import React, { useState, useEffect } from 'react';
import { times } from 'lodash';

import GameDrop from '../Drops/GameDrop/GameDrop';
import MainPanel from './MainPanel/MainPanel';

const Game = () => {
  const [isResetingDrops, setIsResetingDrops] = useState(false);

  useEffect(() => {
    if (isResetingDrops) {
      setIsResetingDrops(false);
    }
  }, [isResetingDrops, setIsResetingDrops]);

  return (
    <>
      <MainPanel resetDrops={() => setIsResetingDrops(true)} />

      {!isResetingDrops && times(40, i => <GameDrop key={`drop-${i}`} />)}
    </>
  );
};

export default Game;
