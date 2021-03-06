import React, { useMemo } from 'react';
import { Stage } from '@inlet/react-pixi';
import styled, { keyframes } from 'styled-components';

import { useGetWindowData } from 'src/store/windowContext/selectors';
import { screenMdMin, screenXlMin, screenXsMin } from 'src/styles/constants';

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BASE_STAGING_HEIGHT = 200;
const BASE_WINDOW_HEIGHT = 897;

const Wrapper = styled.div<{ stageHeight: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ stageHeight }) => stageHeight}px;
  pointer-events: none;
  opacity: 0;
  animation: ${animation} 2s forwards;
`;

interface RenderProps {
  groupsQty: number;
  groupWidth: number;
  groupHeight: number;
}

export const BottomStage = ({
  children,
}: WithRenderChildrenProps<RenderProps>) => {
  const windowData = useGetWindowData();

  const groupsQty = useMemo(() => {
    if (windowData) {
      const { innerWidth: width } = windowData;

      if (width <= screenXsMin) {
        return 1;
      }

      if (width <= screenMdMin) {
        return 2;
      }

      if (width <= screenXlMin) {
        return 3;
      }

      return 4;
    }
    return 0;
  }, [windowData]);

  const windowWidth = windowData?.innerWidth || 0;
  const groupWidth = windowWidth / groupsQty;

  const windowHeight = windowData?.innerHeight || 0;
  const groupHeight = (windowHeight * BASE_STAGING_HEIGHT) / BASE_WINDOW_HEIGHT;

  return windowWidth ? (
    <Wrapper stageHeight={groupHeight}>
      <Stage
        width={windowWidth}
        height={groupHeight}
        options={{ transparent: true }}
      >
        {children({
          groupsQty,
          groupWidth,
          groupHeight,
        })}
      </Stage>
    </Wrapper>
  ) : null;
};
