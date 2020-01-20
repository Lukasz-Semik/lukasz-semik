import React, { useMemo } from 'react';
import { Stage } from '@inlet/react-pixi';
import styled from 'styled-components';

import { useGetWindowContext } from 'src/store/view/selectors';
import { screenXsMin, screenMdMin, screenXlMin } from 'src/styles/constants';

interface RenderProps {
  groupsQty: number;
  groupWidth: number;
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  pointer-events: none;
`;

export const BottomStage = ({
  children,
}: WithRenderChildrenProps<RenderProps>) => {
  const windowContext = useGetWindowContext();

  const groupsQty = useMemo(() => {
    if (windowContext) {
      const { innerWidth: width } = windowContext;

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
  }, [windowContext]);

  const windowWidth = windowContext?.innerWidth || 0;
  const groupWidth = windowWidth / groupsQty;

  return windowWidth ? (
    <Wrapper>
      <Stage width={windowWidth} height={300} options={{ transparent: true }}>
        {children({
          groupsQty,
          groupWidth,
        })}
      </Stage>
    </Wrapper>
  ) : null;
};
