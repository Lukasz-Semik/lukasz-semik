import React from 'react';
import { Stage } from '@inlet/react-pixi';

import {
  useGetWindowContext,
  useGetIsWindowFocused,
} from 'src/store/view/selectors';

interface RenderProps {
  windowWidth: number;
  windowHeight: number;
  isWindowFocused: boolean;
}

export const DropsStage = ({
  children,
}: WithRenderChildrenProps<RenderProps>) => {
  const { width, height, isBrowser } = useGetWindowContext();
  const isWindowFocused = useGetIsWindowFocused();

  return isBrowser ? (
    <Stage width={width} height={height} options={{ transparent: true }}>
      {children({
        windowWidth: width,
        windowHeight: height,
        isWindowFocused,
      })}
    </Stage>
  ) : null;
};
