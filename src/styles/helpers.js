import { css } from 'styled-components';
import { rem } from 'polished';

export const styleOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const styleCircle = size => css`
  width: ${rem(size)};
  height: ${rem(size)};
  border-radius: 50%;
`;
