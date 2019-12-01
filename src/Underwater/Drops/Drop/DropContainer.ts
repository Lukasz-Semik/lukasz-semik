import { useState, useEffect } from 'react';

export interface RenderProps {
  resetDrop: () => void;
}

const DropContainer = ({ render }: ContainerProps<RenderProps>) => {
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
