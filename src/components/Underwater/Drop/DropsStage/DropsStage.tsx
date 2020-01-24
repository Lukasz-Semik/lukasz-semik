import React from 'react';
import { Stage } from '@inlet/react-pixi';
import styled from 'styled-components';

import {
  useGetWindowContext,
  useGetIsWindowFocused,
} from 'src/store/view/selectors';
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
  const windowContext = useGetWindowContext();
  const isWindowFocused = useGetIsWindowFocused();

  return windowContext ? (
    <Wrapper>
      <Stage options={{ transparent: true, resizeTo: windowContext }}>
        {children({
          windowWidth: windowContext.innerWidth || 0,
          windowHeight: windowContext.innerHeight || 0,
          isWindowFocused,
        })}
      </Stage>
    </Wrapper>
  ) : null;
};
