import React from 'react';
import { times } from 'lodash';

import Drop from '../Drops/Drop/Drop';

const Game = () => {
  return (
    <>
      {times(40, i => (
        <Drop key={`drop-${i}`} />
      ))}
    </>
  );
};

export default Game;
