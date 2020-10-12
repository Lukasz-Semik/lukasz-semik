import { rem } from 'polished';
import styled, { keyframes } from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';

const lineAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
`;

interface Props {
  lineColor?: string;
}

export const AnimatedLine = styled.div<Props>`
  width: ${rem(40)};
  height: ${rem(2)};
  margin: ${rem(20)} auto ${rem(25)} auto;
  background-color: ${({ lineColor }) => lineColor || styles.colors.grey};
  animation: ${lineAnimation} 0.5s ease forwards;
  animation-delay: 1s;
  transform: scaleX(0);

  @media ${breakpoints.smUp} {
    width: ${rem(60)};
    height: ${rem(3)};
    margin: ${rem(20)} auto ${rem(25)} auto;
    font-size: ${rem(15)};
  }
`;
