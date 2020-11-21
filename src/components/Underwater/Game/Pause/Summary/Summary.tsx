import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import styled, { keyframes } from 'styled-components';

import { recordsApi } from 'src/api/records';
import { useGetScore } from 'src/store/underwater/selectors';
import { LoaderElement } from 'src/components/Elements';

const Text = styled.p`
  margin-bottom: ${rem(10)};
  font-size: ${rem(18)};
  font-weight: 900;
  text-align: center;
`;

const animate = keyframes`
  0%{ 
    opacity: 0;
    transform: scale(0.8);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  margin-top: ${rem(10)};
  opacity: 0;
  transform: scale(0.8);
  animation: ${animate} 0.5s ease forwards;
`;

export const Summary = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ranking, setRanking] = useState<number>();
  const gameScore = useGetScore();

  useEffect(() => {
    const saveRecord = async () => {
      try {
        const response = await recordsApi.create(gameScore);
        setRanking(response.data.data.ranking);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } catch (err) {
        console.log({ err });
      }
    };

    saveRecord();
  }, [gameScore]);

  return isLoading ? (
    <LoaderElement hasText isVisible />
  ) : (
    <Wrapper>
      <Text>
        <FormattedMessage
          id="underwater.game.score"
          values={{ value: gameScore }}
        />
      </Text>

      <Text>
        <FormattedMessage
          id="underwater.game.ranking"
          values={{
            value:
              ranking === 0 ? (
                <FormattedMessage id="underwater.game.tooWeak" />
              ) : (
                ranking
              ),
          }}
        />
      </Text>
    </Wrapper>
  );
};
