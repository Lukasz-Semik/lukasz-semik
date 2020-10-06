import React, { useState } from 'react';
import styled from 'styled-components';

import { overlayPointerEvents, styleOverlay } from 'src/styles/helpers';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

const Wrapper = styled.div`
  ${styleOverlay};
  ${overlayPointerEvents};
  display: flex;
  justify-content: center;
`;

interface RenderProps<T> {
  currentItem: T | undefined;
  isClicked: boolean;
  setCurrentItem: (item: T) => void;
}

export function ContentHandler<T>({
  children,
}: WithRenderChildrenProps<RenderProps<T>>) {
  const [currentItem, setCurrentItem] = useState<T>();
  const isClicked = Boolean(currentItem);

  return (
    <MountingOpacityWrapper duration={3}>
      <Wrapper>{children({ isClicked, currentItem, setCurrentItem })}</Wrapper>
    </MountingOpacityWrapper>
  );
}
