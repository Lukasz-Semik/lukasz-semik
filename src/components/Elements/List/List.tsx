import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { rem } from 'polished';
import styled from 'styled-components';

import ArrowDown from 'src/assets/surface/chevron-down-solid.svg';
import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

const ListStyled = styled.ul`
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  overflow-y: scroll;
  width: ${rem(500)};
  max-width: 100%;
  margin: ${rem(20)} auto 0;
  max-height: 55vh;
  list-style: none;
  color: ${styles.colors.greyAlpha};

  @media ${breakpoints.mdUp} {
    height: ${rem(380)};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowWrapper = styled.div`
  height: ${rem(10)};
  opacity: 0.4;
`;

const ScrollIndicator = styled.div<{ scrollColor: string }>`
  position: fixed;
  bottom: -${rem(25)};
  left: 50%;
  color: ${({ scrollColor }) => scrollColor};
  transform: translateX(-50%);

  svg {
    width: ${rem(20)};
    height: ${rem(15)};
    transition: color 0.3s ease;

    @media ${styles.breakpoints.smUp} {
      width: ${rem(30)};
      height: ${rem(25)};
    }
  }
`;

export interface ListItem {
  title: string;
  description?: string;
}

interface Props {
  items: ListItem[];
  className?: string;
  renderItem: (item: ListItem) => React.ReactNode;
  scrollColor: string;
}

export const List = ({ items, className, renderItem, scrollColor }: Props) => {
  const arrow1Ref = useRef<HTMLDivElement>(null);
  const arrow2Ref = useRef<HTMLDivElement>(null);

  const listRef = useRef<HTMLUListElement>(null);
  const [isScrollIndicatorVisible, setIsScrollIndicatorVisible] = useState(
    false
  );

  useEffect(() => {
    setTimeout(() => {
      const isVisible =
        (listRef?.current?.scrollHeight || 0) >
        (listRef?.current?.clientHeight || 0);
      setIsScrollIndicatorVisible(isVisible);

      if (isVisible) {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(arrow1Ref.current, {
          opacity: 1,
          duration: 1,
        })
          .to(
            arrow2Ref.current,
            {
              opacity: 1,
              duration: 1,
            },
            '-=0.5'
          )
          .to(arrow1Ref.current, { opacity: 0.4, duration: 1 }, '-=0.5')
          .to(
            arrow2Ref.current,
            {
              opacity: 0.4,
              duration: 1,
            },
            '-=0.5'
          );
      }
    }, 300);
  }, []);

  return (
    <ListStyled className={className} ref={listRef}>
      <MountingOpacityWrapper duration={1}>
        {items.map(renderItem)}

        {isScrollIndicatorVisible && (
          <ScrollIndicator scrollColor={scrollColor}>
            <ArrowWrapper ref={arrow1Ref}>
              <ArrowDown />
            </ArrowWrapper>
            <ArrowWrapper ref={arrow2Ref}>
              <ArrowDown />
            </ArrowWrapper>
          </ScrollIndicator>
        )}
      </MountingOpacityWrapper>
    </ListStyled>
  );
};
