import React from 'react';
import styled from 'styled-components';

// @ts-ignore TODO: resolve problem with imports of svg
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
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface Props {
  isMounted: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const PaperCardElement = ({ isMounted, children }: Props) => (
  <Card isMounted={isMounted}>
    <CardInnerOverlay>
      <PaperBackground />
    </CardInnerOverlay>

    <CardInnerOverlay>
      <FlexWrapper>{children}</FlexWrapper>
    </CardInnerOverlay>
  </Card>
);

export default PaperCardElement;
