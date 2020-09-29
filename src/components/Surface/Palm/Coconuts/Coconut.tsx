import React, { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import { rem } from 'polished';
import styled from 'styled-components';

import CoconutIcon from 'src/assets/surface/coconut.svg';
import { svgDimensions } from 'src/styles/helpers';

import { WindWrapper } from '../WindWrapper';

interface CommonProps {
  top: number;
  left: number;
  downPosition: number;
}

const Wrapper = styled.button<CommonProps>`
  position: absolute;
  top: ${({ top }) => rem(top)};
  left: ${({ left }) => rem(left)};
  width: ${rem(20)};
  height: ${rem(20)};
  ${svgDimensions};
`;

interface Props extends CommonProps {
  leftDownPosition: number;
}

export const Coconut = ({
  top,
  left,
  downPosition,
  leftDownPosition,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const animate = useCallback(() => {
    const tl = gsap.timeline();

    if (ref.current) {
      tl.to(ref.current, {
        top: `${downPosition}%`,
        duration: 0.5,
        ease: 'linear',
      }).to(ref.current, {
        top: '100%',
        x: leftDownPosition,
        rotate: leftDownPosition > 0 ? 600 : -600,
        duration: 1,
        delay: 0.05,
      });
    }
  }, [downPosition, leftDownPosition]);

  return (
    <WindWrapper isPaused={isClicked}>
      <Wrapper
        onClick={() => {
          animate();
          setIsClicked(true);
        }}
        ref={ref}
        top={top}
        left={left}
        downPosition={downPosition}
      >
        <CoconutIcon />
      </Wrapper>
    </WindWrapper>
  );
};
