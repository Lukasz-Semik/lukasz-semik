import React from 'react';
import { times } from 'lodash';

import GameDrop from '../Drops/GameDrop/GameDrop';
import MainPanel from './MainPanel/MainPanel';

const Game = () => {
  return (
    <>
      <MainPanel />

      {times(40, i => (
        <GameDrop key={`drop-${i}`} />
      ))}
    </>
  );
};

export default Game;
