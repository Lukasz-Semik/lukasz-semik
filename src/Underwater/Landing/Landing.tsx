import React, { useState, useEffect } from 'react';
import { times } from 'lodash';

import Title from '../Title/Title';
import IntroDrop from '../Drops/IntroDrop/IntroDrop';
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
    let timeoutRef: number;

    if (isPreparing) {
      timeoutRef = setTimeout(() => {
        setIsPreparing(false);
        setUnderwaterGame();
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [isPreparing, setIsPreparing, setUnderwaterGame]);

  return (
    <>
      {!isPreparing && times(40, i => <IntroDrop key={`drop-${i}`} />)}

      {isIntro && <Title />}

      {(isStarter || isLoader) && (
        <Starter setIsPreparing={() => setIsPreparing(true)} />
      )}
    </>
  );
};

export default DropsLanding;
