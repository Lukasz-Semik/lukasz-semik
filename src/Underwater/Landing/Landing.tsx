import React, { useState, useEffect } from 'react';
import { times } from 'lodash';

import Title from '../Title/Title';
import Drop from '../Drops/Drop/Drop';
import Starter from '../Starter/Starter';

interface Props {
  setUnderwaterGame: () => void;
  isIntro: boolean;
  isStarter: boolean;
  isLoader: boolean;
}

const DropsLanding = ({
  setUnderwaterGame,
  isIntro,
  isStarter,
  isLoader,
}: Props) => {
  const [isPreparing, setIsPreparing] = useState(false);

  useEffect(() => {
    if (isPreparing) {
      setTimeout(() => {
        setIsPreparing(false);
        setUnderwaterGame();
      }, 1000);
    }
  }, [isPreparing, setIsPreparing, setUnderwaterGame]);

  return (
    <>
      {!isPreparing && times(40, i => <Drop key={`drop-${i}`} />)}

      {isIntro && <Title />}

      {(isStarter || isLoader) && (
        <Starter setIsPreparing={() => setIsPreparing(true)} />
      )}
    </>
  );
};

export default DropsLanding;
