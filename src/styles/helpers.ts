import { css } from 'styled-components';

export const styleOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const overlayPointerEvents = css`
  pointer-events: none;

  * {
    pointer-events: all;
  }
`;
