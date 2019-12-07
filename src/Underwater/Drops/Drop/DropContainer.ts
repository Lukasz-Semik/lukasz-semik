import { useState, useEffect, useCallback } from 'react';

import { useUnderwaterState } from 'src/Underwater/underwaterState';

export interface RenderProps {
  resetDrop: () => void;
  handleDropClick: () => void;
  isGameLoading: boolean;
  isGameRunning: boolean;
}

const DropContainer = ({ render }: ContainerProps<RenderProps>) => {
  const {
    getIsUnderwaterIntro,
    getIsUnderwaterGame,
    getIsUnderwaterLoader,
    setUnderwaterStarter,
  } = useUnderwaterState();
  const isGameLoading = getIsUnderwaterLoader();
  const isGameRunning = getIsUnderwaterGame();
  const isIntro = getIsUnderwaterIntro();

  const [isPreparing, setIsPreparing] = useState(false);

  const handleDropClick = useCallback(() => {
    if (isIntro) {
      setUnderwaterStarter();
    }
  }, [isIntro, setUnderwaterStarter]);

  useEffect(() => {
    if (isPreparing && !isGameLoading) {
      setIsPreparing(false);
    }
  }, [isPreparing, isGameLoading]);

  return !isPreparing
    ? render({
        handleDropClick,
        isGameLoading,
        isGameRunning,
        resetDrop: () => setIsPreparing(true),
      })
    : null;
};

export default DropContainer;
