import React, { useState } from 'react';
import { random } from 'lodash';

import { SwimmingWrapper } from '../SwimmingWrapper/SwimmingWrapper';
import { DropElement } from '../DropElement/DropElement';
import { Satellites } from '../Satellites/Satellites';

interface Attributes {
  positionX: number;
  delay: number;
  dropSize: number;
  maxOpacity: number;
}

const generateAttributes = (isFullyVisible?: boolean) => {
  const dropSize = random(25, 50);

  return {
    positionX: random(5, 90),
    delay: random(1, 6, true),
    maxOpacity: isFullyVisible ? 1 : (dropSize - 25) / 20,
    dropSize,
  };
};

interface Props {
  onClick: () => void;
  onSwimEnd?: (isClicked?: boolean) => void;
  onSateliteClick: (points: number) => void;
  isFullyVisible?: boolean;
}

export const DropBase = ({
  onClick,
  onSateliteClick,
  onSwimEnd,
  isFullyVisible,
}: Props) => {
  const [isSwimming, setIsSwimming] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [attributes, setAttributes] = useState<Attributes>(
    generateAttributes(isFullyVisible)
  );

  return (
    <SwimmingWrapper
      positionX={attributes.positionX}
      isSwimming={isSwimming}
      dropSize={attributes.dropSize}
      onSwimEnd={() => {
        setIsSwimming(false);
        setIsClicked(false);

        if (onSwimEnd) {
          onSwimEnd(isClicked);
        }

        setAttributes(generateAttributes(isFullyVisible));
      }}
    >
      {isClicked && (
        <Satellites
          maxOpacity={attributes.maxOpacity}
          onSateliteClick={onSateliteClick}
        />
      )}

      <DropElement
        isSwimming={isSwimming}
        onShowEnd={() => setIsSwimming(true)}
        maxOpacity={attributes.maxOpacity}
        dropSize={attributes.dropSize}
        delay={attributes.delay}
        isVisible={!isClicked}
        onClick={() => {
          onClick();
          setIsClicked(true);
        }}
      />
    </SwimmingWrapper>
  );
};
