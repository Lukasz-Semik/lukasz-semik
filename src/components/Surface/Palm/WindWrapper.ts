import styled, { keyframes } from 'styled-components';

import { overlayPointerEvents } from 'src/styles/helpers';

import { dimensions } from '../dimensions';

const animation = keyframes`
  0% {
    transform: translateX(-50%) rotateZ(0deg);
  }
  100% {
    transform: translateX(-50%) rotateZ(5deg);
  }
`;

export const WindWrapper = styled.div<{ isPaused?: boolean }>`
  position: absolute;
  ${dimensions.palm};
  transform-origin: 50% 100%;
  animation: ${animation} 3s ease-in-out infinite alternate;
  animation-play-state: ${({ isPaused }) => (isPaused ? 'paused' : 'running')};
  ${overlayPointerEvents};
`;
