import { useState, useEffect } from 'react';

const DropContainer = ({ render }) => {
  const [isPreparing, setIsPreparing] = useState(false);

  useEffect(() => {
    if (isPreparing) {
      setIsPreparing(false);
    }
  }, [isPreparing]);

  return !isPreparing
    ? render({
        resetDrop: () => setIsPreparing(true),
      })
    : null;
};

export default DropContainer;
