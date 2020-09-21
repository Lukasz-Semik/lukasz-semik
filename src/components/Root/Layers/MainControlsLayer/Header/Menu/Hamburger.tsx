import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

import styles from 'src/styles';

import { ColorProps, getTransition } from '../../helpers';

const Wrapper = styled.button`
  position: relative;
  width: ${rem(35)};
  margin-right: ${rem(5)};
  opacity: 0.8;
  pointer-events: all;
`;

const Line = styled.div<ColorProps>`
  height: ${rem(4)};
  width: 100%;
  margin-bottom: ${rem(5)};
  background-color: ${({ mainColor }) => mainColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  transition: ${getTransition('background-color')};

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

interface XelementProps extends ColorProps {
  isVisible: boolean;
}

const XElement = styled.span<XelementProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  text-shadow: ${styles.shadows.textBasic};
  font-family: ${styles.fonts.uniq};
  font-size: ${rem(30)};
  opacity: 0;
  color: ${({ mainColor }) => mainColor};
  transform: translate(-50%, -50%) scale(0.6);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
    ${getTransition('color')};

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    `};
`;

export const Hamburger = ({ mainColor }: ColorProps) => {
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
      <Line1 ref={line1Ref} mainColor={mainColor} />
      <Line2 ref={line2Ref} mainColor={mainColor} />
      <Line3 ref={line3Ref} mainColor={mainColor} />
      <XElement mainColor={mainColor} isVisible={isActive}>
        X
      </XElement>
    </Wrapper>
  );
};
