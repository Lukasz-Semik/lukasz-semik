import { useState, useEffect, useCallback } from 'react';

import { useUnderwaterState, GameState } from 'src/Underwater/underwaterState';

export interface RenderProps {
  resetDrop: () => void;
  handleDropClick: () => void;
  isGameLoading: boolean;
}

const DropContainer = ({ render }: ContainerProps<RenderProps>) => {
  const { getIsGameStateLoader } = useUnderwaterState();
  const isGameLoading = getIsGameStateLoader();

  const { setGameStateStarter, gameState } = useUnderwaterState();
  const [isPreparing, setIsPreparing] = useState(false);

  const handleDropClick = useCallback(() => {
    if (gameState === GameState.Intro) {
      setGameStateStarter();
    }
  }, [gameState, setGameStateStarter]);

  useEffect(() => {
    if (isPreparing && !isGameLoading) {
      setIsPreparing(false);
    }
  }, [isPreparing, isGameLoading]);

  return !isPreparing
    ? render({
        handleDropClick,
        isGameLoading,
        resetDrop: () => setIsPreparing(true),
      })
    : null;
};

export default DropContainer;
