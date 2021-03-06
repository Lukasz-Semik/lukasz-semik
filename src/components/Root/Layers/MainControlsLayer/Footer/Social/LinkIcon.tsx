import React, { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { rem, size } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';

import { DELAY, OPACITY } from '../constants';

const LinkStyled = styled.a`
  margin-right: ${rem(10)};
  cursor: pointer;
  opacity: 0;
  transform: translateY(100%);

  svg {
    ${size(rem(32))};
    transition: color 0.3s ease;

    @media ${styles.breakpoints.smUp} {
      ${size(rem(40))};
    }
  }

  &:hover {
    svg {
      color: ${styles.colors.grey};
    }
  }
`;

const Description = styled.p`
  position: absolute;
  visibility: hidden;
`;

interface Props {
  index: number;
  href: string;
  hiddenDescritpion: string;
  children: React.ReactElement;
}

export const LinkIcon = ({
  children,
  index,
  href,
  hiddenDescritpion,
}: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const animateMountedItem = useCallback(() => {
    const mountedTl = gsap.timeline({ repeat: -1 });

    mountedTl
      .to(ref.current, {
        y: -10,
        duration: 0.8,
        delay: 4,
      })
      .to(ref.current, {
        y: 0,
        duration: 0.8,
      });
  }, []);

  useEffect(() => {
    const mountingTl = gsap.timeline();
    if (ref.current) {
      mountingTl
        .to(ref.current, {
          duration: 0.8,
          y: -10,
          opacity: OPACITY,
          delay: 0.3 * index + DELAY,
        })
        .to(ref.current, {
          y: 0,
          duration: 0.7,
          onComplete: animateMountedItem,
        });
    }
  }, [animateMountedItem, index]);

  return (
    <LinkStyled
      key={index}
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={hiddenDescritpion}
    >
      <Description>{hiddenDescritpion}</Description>
      {children}
    </LinkStyled>
  );
};
