import React, { useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import styles from 'src/styles';
import { FormattedMessage } from 'gatsby-plugin-intl';
import gsap from 'gsap';

const Button = styled.button`
  position: relative;
  width: ${rem(200)};
  padding: ${rem(5)} 0;
  font-size: ${rem(20)};
  font-family: ${styles.fonts.standard};
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  opacity: 0;
  color: ${styles.colors.blue};
  background-color: rgba(84, 87, 255, 0.2);
  border-radius: 3px;
  box-shadow: 2px 2px 15px rgba(84, 87, 255, 0.5);
  transform: translateY(100%);
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

  @media ${styles.breakpoints.smUp} {
    width: ${rem(250)};
    font-size: ${rem(25)};
    background-color: rgba(84, 87, 255, 0.1);
  }

  &:hover {
    box-shadow: 2px 2px 15px rgba(150, 150, 150, 0.8);
    background-color: transparent;
  }
`;

interface Props {
  onViewGoUp: () => void;
}

export const GoUpButton = ({ onViewGoUp }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const tl = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    if (ref.current) {
      tl.to(ref.current, {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 2,
      });
    }
  }, [tl]);

  return (
    <Button ref={ref} onClick={onViewGoUp}>
      <FormattedMessage id="underwater.letsMeet" />
    </Button>
  );
};
