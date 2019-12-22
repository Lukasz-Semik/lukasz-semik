import { useState, useEffect, useMemo } from 'react';
import { random } from 'lodash';

const useDrop = () => {
  const [isPreparing, setIsPreparing] = useState(false);

  const dropSize = useMemo(() => random(25, 50), []);
  const maxOpacity = useMemo(() => (dropSize - 25) / 20, [dropSize]);

  useEffect(() => {
    if (isPreparing) {
      setIsPreparing(false);
    }
  }, [isPreparing]);

  return {
    isPreparingDrop: isPreparing,
    prepareDrop: () => setIsPreparing(true),
    dropSize,
    maxOpacity,
  };
};

export default useDrop;
