import React, { useMemo } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { rem } from 'polished';

import Letter from './Letter';

const TitleStyled = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin: 0;
  font-size: ${rem(150)};
  letter-spacing: 1px;
  text-align: center;
  pointer-events: none;
  transform: translate(-50%, -50%);
`;

const Title = () => {
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
    <TitleStyled>
      {text.map((letter, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Letter key={`${letter}-${i}`} index={i} letter={letter} />
      ))}
    </TitleStyled>
  );
};

export default Title;
