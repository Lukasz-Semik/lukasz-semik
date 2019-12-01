import { useState, useEffect } from 'react';

const DropContainer = ({ render }) => {
  const [isPreparing, setIsPreparing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const resetDrop = () => {
    setIsPreparing(true);
    setIsClicked(false);
  };

  useEffect(() => {
    if (isPreparing) {
      setIsPreparing(false);
    }
  }, [isPreparing]);

  return !isPreparing
    ? render({
        resetDrop,
        isClicked,
        setIsClicked,
      })
    : null;
};

export default DropContainer;
