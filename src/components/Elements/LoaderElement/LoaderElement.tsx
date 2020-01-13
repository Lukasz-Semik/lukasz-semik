import React from 'react';
import styled, { keyframes } from 'styled-components';
import { size, rem } from 'polished';
import { FormattedMessage } from 'gatsby-plugin-intl';

import styles from 'src/styles';

const sizeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  25% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

interface CircleProps {
  circleSize: number;
}

const Wrapper = styled.div<CircleProps>`
  ${({ circleSize }) => size(rem(circleSize))};
  position: relative;
`;

const Circle = styled.div.attrs({ 'data-test': 'loader-circle' })<CircleProps>`
  ${({ circleSize }) => size(rem(circleSize))};
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  border-radius: 50%;
  border: 5px solid ${styles.colors.grey};
  animation: ${sizeAnimation} cubic-bezier(0, 0.2, 0.8, 1) 3s infinite;

  &:nth-of-type(1) {
    animation-delay: 1s;
  }

  &:nth-of-type(2) {
    animation-delay: 2s;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 100%;
  left: 50%;
  color: black;
  transform: translateX(-50%);
`;

interface Props {
  size?: number;
  hasText?: boolean;
  isVisible?: boolean;
}

export const LoaderElement = ({
  size: circleSize = 50,
  hasText,
  isVisible,
}: Props) =>
  isVisible ? (
    <Wrapper circleSize={circleSize}>
      <Circle circleSize={circleSize} />
      <Circle circleSize={circleSize} />
      <Circle circleSize={circleSize} />

      {hasText && (
        <Text>
          <FormattedMessage id="shared.loading" />
        </Text>
      )}
    </Wrapper>
  ) : null;
