import React, { useState } from 'react';

import { Satellites } from './Satellites/Satellites';
import { SwimmingWrapper } from './SwimmingWrapper/SwimmingWrapper';
import { DropMain } from './DropMain/DropMain';

interface Props {
  resetDrop: () => void;
  onDropClick: () => void;
  dropSize: number;
  maxOpacity: number;
}

export const Drop = ({
  resetDrop,
  onDropClick,
  dropSize,
  maxOpacity,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <SwimmingWrapper
      dropSize={dropSize}
      isMounted={isMounted}
      onSwimEnd={resetDrop}
    >
      <>
        {isClicked && <Satellites maxOpacity={maxOpacity} />}

        <DropMain
          onClick={() => {
            setIsClicked(true);
            onDropClick();
          }}
          onShowEnd={() => setIsMounted(true)}
          dropSize={dropSize}
          maxOpacity={maxOpacity}
        />
      </>
    </SwimmingWrapper>
  );
};
