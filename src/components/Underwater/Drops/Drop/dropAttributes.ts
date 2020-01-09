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

  return {
    x: random(60, windowWidth - 60),
    y: windowHeight - 60,
    maxAlpha: isFullyVisible ? 1 : (dropSize - 25) / 20,
    delay: random(1, 11, true),
    dropSize,
  };
};

export type Attributes = ReturnType<typeof generateAttributes>;
