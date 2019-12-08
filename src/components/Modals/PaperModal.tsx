import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rgba, rem } from 'polished';

import { styleOverlay } from 'src/styles/helpers';
import { PaperCardElement } from 'src/components/Elements';

const Wrapper = styled.div<{ isMounted: boolean }>`
  ${styleOverlay};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isMounted }) =>
    isMounted ? rgba(0, 0, 0, 0.3) : rgba(0, 0, 0, 0)};
  transition: background-color 1s ease;
`;

const CardWrapper = styled.div`
  width: ${rem(300)};
  height: ${rem(400)};
`;

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const PaperModal = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Wrapper isMounted={isMounted}>
      <CardWrapper>
        <PaperCardElement isMounted={isMounted}>{children}</PaperCardElement>
      </CardWrapper>
    </Wrapper>
  );
};

export default PaperModal;
