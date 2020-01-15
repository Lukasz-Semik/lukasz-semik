import React, { useMemo } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import styles from 'src/styles';

import { Letter } from './Letter';
// import { Subtitle } from './Subtitle';
import { GoUpButton } from '../GoUpButton/GoUpButton';

const Wrapper = styled.div`
  position: absolute;
  top: 40%;
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

  @media ${styles.breakpoints.xsUp} {
    top: 50%;
  }
`;

const WavingTitle = styled.h2`
  margin: 0;
  margin-bottom: ${rem(70)};
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

interface Props {
  onViewGoUp: () => void;
}

export const Title = ({ onViewGoUp }: Props) => {
  const intl = useIntl();

  const text = useMemo(() => {
    const letters = intl.formatMessage({ id: 'underwater.title' }).split('');

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
  }, [intl]);

  return (
    <Wrapper>
      <WavingTitle>
        {text.map((letter, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Letter key={`${letter}-${i}`} index={i} letter={letter} />
        ))}
      </WavingTitle>

      <GoUpButton onViewGoUp={onViewGoUp} />

      {/* <Subtitle /> */}
    </Wrapper>
  );
};
