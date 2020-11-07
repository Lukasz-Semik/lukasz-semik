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
import { Contact } from '../Contact/Contact';
import { MenuContent } from './MenuContent';

const Wrapper = styled.div`
  position: relative;
  width: ${rem(35)};
  margin-right: ${rem(5)};
  pointer-events: all;
`;

const HamburgerWrapper = styled.button`
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
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
  z-index: 3;
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
      color: ${styles.colors.white};
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    `};
`;

export const Hamburger = ({ mainColor }: ColorProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isContactVisible, setIsContactVisilbe] = useState(false);
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

  const currentColor = isContactVisible ? styles.colors.white : mainColor;

  return (
    <>
      <Wrapper>
        <HamburgerWrapper onClick={() => setIsActive(!isActive)}>
          <Line1 ref={line1Ref} mainColor={currentColor} />
          <Line2 ref={line2Ref} mainColor={currentColor} />
          <Line3 ref={line3Ref} mainColor={currentColor} />
          <XElement mainColor={currentColor} isVisible={isActive}>
            X
          </XElement>
        </HamburgerWrapper>

        <MenuContent
          isVisible={isActive}
          closeMenu={() => setIsActive(false)}
          toggleContact={() => setIsContactVisilbe(val => !val)}
        />
      </Wrapper>

      <Contact isVisible={isContactVisible} />
    </>
  );
};
