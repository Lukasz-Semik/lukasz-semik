import React, { useState, useMemo } from 'react';

import Satellites from './Satellites/Satellites';
import SwimmingWrapper from './SwimmingWrapper/SwimmingWrapper';
import DropMain from './DropMain/DropMain';

interface Props {
  resetDrop: () => void;
  onDropClick: () => void;
  dropSize: number;
  maxOpacity: number;
  isForcedToHide?: boolean;
}

const Drop = ({
  resetDrop,
  onDropClick,
  isForcedToHide,
  dropSize,
  maxOpacity,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const areSatellitesVisible = useMemo(
    () => (isForcedToHide ? isMounted : isClicked),
    [isForcedToHide, isMounted, isClicked]
  );

  return (
    <SwimmingWrapper
      dropSize={dropSize}
      isMounted={isMounted}
      onSwimEnd={resetDrop}
    >
      <>
        {areSatellitesVisible && isMounted && (
          <Satellites maxOpacity={maxOpacity} />
        )}

        <DropMain
          onClick={() => {
            setIsClicked(true);
            onDropClick();
          }}
          onShowEnd={() => setIsMounted(true)}
          dropSize={dropSize}
          maxOpacity={maxOpacity}
          isForcedToHide={isForcedToHide}
        />
      </>
    </SwimmingWrapper>
  );
};

export default Drop;
