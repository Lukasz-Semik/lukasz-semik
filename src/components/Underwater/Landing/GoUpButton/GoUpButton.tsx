import React, { useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import styles from 'src/styles';
import { FormattedMessage } from 'gatsby-plugin-intl';
import gsap from 'gsap';

const Button = styled.button`
  position: absolute;
  top: ${rem(30)};
  left: 50%;
  width: ${rem(250)};
  padding: ${rem(5)} 0;
  font-size: ${rem(20)};
  font-family: ${styles.fonts.standard};
  font-weight: 700;
  text-align: center;
  opacity: 0;
  color: #5457ff;
  background-color: rgba(84, 87, 255, 0.1);
  border-radius: 3px;
  box-shadow: 2px 2px 15px rgba(84, 87, 255, 0.5);
  transform: translateX(-50%);
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

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
        duration: 2,
        opacity: 1,
        delay: 3,
      });
    }
  }, [tl]);

  return (
    <Button ref={ref} onClick={onViewGoUp}>
      <FormattedMessage id="underwater.letsMeet" />
    </Button>
  );
};
