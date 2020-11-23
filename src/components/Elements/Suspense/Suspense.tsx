import React from 'react';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';
import { LoaderElement } from 'src/components/Elements';

const LoaderWrapper = styled.div`
  ${styleOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#80deea, #14e3fa 60%);
`;

export const Suspense = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <React.Suspense
      fallback={
        <LoaderWrapper>
          <LoaderElement size={300} hasText isVisible />
        </LoaderWrapper>
      }
    >
      {children}
    </React.Suspense>
  );
};
