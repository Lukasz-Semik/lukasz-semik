import { random } from 'lodash';

export interface Args {
  isFullyVisible?: boolean;
  windowWidth: number;
  windowHeight: number;
}

const maxDropSize = 50;
export const generateAttributes = ({
  isFullyVisible,
  windowWidth,
  windowHeight,
}: Args) => {
  const dropSize = random(25, maxDropSize);
  const scale = dropSize / maxDropSize;

  return {
    positionX: random(maxDropSize, windowWidth - maxDropSize),
    positionY: windowHeight - 60,
    maxOpacity: isFullyVisible ? 1 : (dropSize - 25) / 20,
    dropSize,
    scale,
  };
};

export type Attributes = ReturnType<typeof generateAttributes>;
