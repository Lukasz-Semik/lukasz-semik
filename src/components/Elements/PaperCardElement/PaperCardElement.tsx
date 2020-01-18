import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import PaperBackground from 'src/assets/paper.svg';

const Card = styled.div<{ isMounted: boolean }>`
  width: 100%;
  height: 100%;
  transform: ${({ isMounted }) => (isMounted ? 'scale(1)' : 'scale(0)')};
  transition: transform 1s ease;
`;

const CardInnerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > svg {
    width: 100% !important;
    height: 100% !important;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 ${rem(30)};
`;

interface Props {
  isMounted: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const PaperCardElement = ({ isMounted, children }: Props) => (
  <Card isMounted={isMounted}>
    <CardInnerOverlay>
      <PaperBackground />
    </CardInnerOverlay>

    <CardInnerOverlay>
      <FlexWrapper>{children}</FlexWrapper>
    </CardInnerOverlay>
  </Card>
);
