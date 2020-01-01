import React from 'react';
import { Stage, Layer } from 'react-konva';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const DropsStage = ({ children }: Props) => (
  <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>{children}</Layer>
  </Stage>
);
