import React, { useEffect, useMemo, useState } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { appContent } from 'src/constants/content';
import { useView } from 'src/hooks/useView';
import styles from 'src/styles';

import { GoUpButton } from '../GoUpButton/GoUpButton';
import { Letter } from './Letter';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  pointer-events: none;
  transform: translate(-50%, -50%);

  button {
    pointer-events: all;
  }
`;

const WavingTitle = styled.h2`
  margin: 0;
  margin-bottom: ${rem(120)};
  letter-spacing: 1px;
  text-align: center;
  font-size: ${rem(57)};

  @media ${styles.breakpoints.xsUp} {
    margin-bottom: ${rem(100)};
    font-size: ${rem(93)};
  }

  @media ${styles.breakpoints.mdUp} {
    font-size: ${rem(120)};
  }

  @media ${styles.breakpoints.lgUp} {
    font-size: ${rem(150)};
  }
`;

export const Title = () => {
  const [isDelayed, setIsDelayed] = useState(false);
  const { goUp } = useView();

  const text = useMemo(() => {
    const letters = appContent.underwater.title().split('');

    const preparedLetters = letters
      .map((letter, i) => {
        const nextLetter = letters[i + 1];
        const isLast = i === letters.length - 1;

        return {
          value: letter,
          hasMarginRight: !isLast && !nextLetter.trim(),
        };
      })
      .filter(letter => letter.value.trim());

    return preparedLetters;
  }, []);

  useEffect(() => {
    setTimeout(setIsDelayed(true));
  }, []);

  return isDelayed ? (
    <Wrapper>
      <WavingTitle>
        {text.map((letter, i) => (
          <Letter key={`${letter}-${i}`} index={i} letter={letter} />
        ))}
      </WavingTitle>

      <GoUpButton onViewGoUp={goUp} />
    </Wrapper>
  ) : null;
};
