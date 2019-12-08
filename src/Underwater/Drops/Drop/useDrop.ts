import { useState, useEffect, useMemo } from 'react';
import { random } from 'lodash';

const useDrop = (isPreparingBlocked?: boolean) => {
  const [isPreparing, setIsPreparing] = useState(false);

  const dropSize = useMemo(() => random(25, 50), []);
  const maxOpacity = useMemo(() => (dropSize - 25) / 20, [dropSize]);

  useEffect(() => {
    if (isPreparing && !isPreparingBlocked) {
      setIsPreparing(false);
    }
  }, [isPreparing, isPreparingBlocked]);
  return {
    isPreparingDrop: isPreparing,
    prepareDrop: () => setIsPreparing(true),
    dropSize,
    maxOpacity,
  };
};

export default useDrop;
