import React from 'react';
import { Stage } from '@inlet/react-pixi';
import styled from 'styled-components';

import {
  useGetIsWindowFocused,
  useGetWindowData,
} from 'src/store/windowContext/selectors';
import { styleOverlay } from 'src/styles/helpers';

const Wrapper = styled.div`
  ${styleOverlay};
`;

interface RenderProps {
  windowWidth: number;
  windowHeight: number;
  isWindowFocused: boolean;
}

export const DropsStage = ({
  children,
}: WithRenderChildrenProps<RenderProps>) => {
  const windowData = useGetWindowData();
  const isWindowFocused = useGetIsWindowFocused();

  return windowData ? (
    <Wrapper>
      <Stage options={{ transparent: true, resizeTo: windowData }}>
        {children({
          windowWidth: windowData.innerWidth || 0,
          windowHeight: windowData.innerHeight || 0,
          isWindowFocused,
        })}
      </Stage>
    </Wrapper>
  ) : null;
};
