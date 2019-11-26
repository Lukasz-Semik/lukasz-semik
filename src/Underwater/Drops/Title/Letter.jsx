import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import styled from 'styled-components';

const topPosition = 20;

const LetterStyled = styled.span`
  position: relative;
  top: -30px;
  display: inline-block;
  opacity: 0;

  ${({ hasMarginRight }) => hasMarginRight && 'margin-right: 20px'};
`;

const Letter = ({ letter, index }) => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!isMounted) {
      gsap.to(ref.current, {
        opacity: 0.7,
        delay: 0.2 * index,
        duration: 1,
        top: topPosition,
        onComplete: () => setIsMounted(true),
      });
    } else {
      const tl = gsap.timeline({ repeat: -1 });

      const getAnimationConfig = hasNegative => ({
        top: `${hasNegative ? '-' : ''}${topPosition}px`,
        duration: 1.8,
        ease: 'linear',
      });

      tl.to(ref.current, getAnimationConfig(true)).to(
        ref.current,
        getAnimationConfig()
      );
    }
  }, [isMounted, index]);

  return (
    <LetterStyled hasMarginRight={letter.hasMarginRight} ref={ref}>
      {letter.value}
    </LetterStyled>
  );
};

Letter.propTypes = {
  index: PropTypes.number.isRequired,
  letter: PropTypes.shape({
    hasMarginRight: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Letter;
