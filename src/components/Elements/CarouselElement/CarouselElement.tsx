import '@brainhubeu/react-carousel/lib/style.css';

import React, { useState } from 'react';
import Slider, { Dots } from '@brainhubeu/react-carousel';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  img {
    display: block;
  }

  .BrainhubCarousel {
    height: 100%;
  }

  .BrainhubCarouselItem {
    padding-bottom: 25px;
  }

  .BrainhubCarousel__container {
    width: 100%;
  }
`;

const DotsWrapper = styled.div<{ dotsColor?: string }>`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  .BrainhubCarousel__dot {
    background-color: transparent;

    &::before {
      width: 12px !important;
      height: 12px !important;
      opacity: 0.4;
      ${({ dotsColor }) => dotsColor && `background: ${dotsColor} !important;`}
    }

    &--selected::before {
      opacity: 0.8;
    }
  }
`;

interface Props {
  dotsColor?: string;
}

export const CarouselElement = ({
  children,
  dotsColor,
}: React.PropsWithChildren<Props>) => {
  const [state, setState] = useState(0);
  const onChange = (value: number) => setState(value);

  const dotsCount = React.Children.count(children);

  return (
    <Wrapper data-testid="carousel">
      <Slider value={state} onChange={onChange}>
        {children}
      </Slider>

      {dotsCount > 1 && (
        <DotsWrapper dotsColor={dotsColor}>
          <Dots number={dotsCount} value={state} onChange={onChange} />
        </DotsWrapper>
      )}
    </Wrapper>
  );
};
