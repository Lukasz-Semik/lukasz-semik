import React from 'react';
import { Stage, Layer } from 'react-konva';

import { useWindow } from 'src/hooks/useWindow';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const DropsStage = ({ children }: Props) => {
  const { isBrowser, windowHeight, windowWidth } = useWindow();

  return isBrowser ? (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>{children}</Layer>
    </Stage>
  ) : null;
};
