import { useState, useEffect, useCallback } from 'react';

import {
  useUnderwaterState,
  UnderwaterState,
} from 'src/Underwater/underwaterState';

export interface RenderProps {
  resetDrop: () => void;
  handleDropClick: () => void;
  isGameLoading: boolean;
}

const DropContainer = ({ render }: ContainerProps<RenderProps>) => {
  const { getIsUnderwaterLoader } = useUnderwaterState();
  const isGameLoading = getIsUnderwaterLoader();

  const { setUnderwaterStarter, underwater } = useUnderwaterState();
  const [isPreparing, setIsPreparing] = useState(false);

  const handleDropClick = useCallback(() => {
    if (underwater === UnderwaterState.Intro) {
      setUnderwaterStarter();
    }
  }, [underwater, setUnderwaterStarter]);

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
