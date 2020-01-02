import React from 'react';
import { Stage, Layer } from 'react-konva';

import { useGetWindowContext } from 'src/store/view/selectors';

interface RenderProps {
  windowWidth: number;
  windowHeight: number;
}

export const DropsStage = ({
  children,
}: WithRenderChildrenProps<RenderProps>) => {
  const { width, height, isBrowser } = useGetWindowContext();

  return isBrowser ? (
    <Stage width={width} height={height}>
      <Layer>
        {children({
          windowWidth: width,
          windowHeight: height,
        })}
      </Layer>
    </Stage>
  ) : null;
};
