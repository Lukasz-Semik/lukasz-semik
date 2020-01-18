import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { rem } from 'polished';

import styles from 'src/styles';

const Wrapper = styled.button`
  position: relative;
  width: ${rem(35)};
  margin-right: ${rem(5)};
  opacity: 0.8;
`;

const Line = styled.div`
  height: ${rem(4)};
  width: 100%;
  margin-bottom: ${rem(5)};
  background-color: ${styles.colors.black};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 2px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Line1 = styled(Line)`
  opacity: 0;
  transform: translateX(-${rem(30)});
`;

const Line2 = styled(Line)`
  opacity: 0;
  transform: scaleX(0);
`;

const Line3 = styled(Line)`
  opacity: 0;
  transform: translateX(${rem(30)});
`;

const XElement = styled.span<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  text-shadow: ${styles.shadows.textBasic};
  font-family: ${styles.fonts.uniq};
  font-size: ${rem(30)};
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.6);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    `};
`;

export const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  const showHamburger = useCallback(
    (withDelay: boolean) => {
      const commonAttrs = { opacity: 1, duration: 0.5 };

      if (line1Ref.current && line2Ref.current && line3Ref.current) {
        tl.to(line1Ref.current, {
          ...commonAttrs,
          x: 0,
          delay: withDelay ? 2 : undefined,
        })
          .to(
            line2Ref.current,
            {
              ...commonAttrs,
              scale: 1,
            },
            '-=0.5'
          )
          .to(
            line3Ref.current,
            {
              ...commonAttrs,
              x: 0,
              onComplete: () => setIsMounted(true),
            },
            '-=0.5'
          );
      }
    },
    [tl]
  );

  const hideHamburger = useCallback(() => {
    if (line1Ref.current && line2Ref.current && line3Ref.current) {
      const commonAttrs = { opacity: 0, duration: 0.5 };

      tl.to(line1Ref.current, {
        ...commonAttrs,
        x: `-${rem(30)}`,
      })
        .to(
          line2Ref.current,
          {
            ...commonAttrs,
            scale: 0,
          },
          '-=0.5'
        )
        .to(
          line3Ref.current,
          {
            ...commonAttrs,
            x: rem(30),
          },
          '-=0.5'
        );
    }
  }, [tl]);

  useEffect(() => {
    if (isActive) {
      hideHamburger();
    } else {
      showHamburger(!isMounted);
    }
  }, [isMounted, showHamburger, hideHamburger, isActive]);

  return (
    <Wrapper onClick={() => setIsActive(!isActive)}>
      <Line1 ref={line1Ref} />
      <Line2 ref={line2Ref} />
      <Line3 ref={line3Ref} />
      <XElement isVisible={isActive}>X</XElement>
    </Wrapper>
  );
};
