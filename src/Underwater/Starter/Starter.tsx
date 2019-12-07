import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rgba, rem } from 'polished';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { styleOverlay } from 'src/styles/helpers';
import { PaperCardElement, ButtonElement } from 'src/components/Elements';

import { useUnderwaterState } from '../underwaterState';

const Wrapper = styled.div<{ isMounted: boolean }>`
  ${styleOverlay};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isMounted }) =>
    isMounted ? rgba(0, 0, 0, 0.3) : rgba(0, 0, 0, 0)};
  transition: background-color 1s ease;
`;

const CardWrapper = styled.div`
  width: ${rem(300)};
  height: ${rem(400)};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${rem(25)};
`;

const Text = styled.div`
  margin: ${rem(15)} 0;
  text-align: center;
  color: grey;
`;

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  setIsPreparing: () => void;
}

const Starter = ({ setIsPreparing }: Props) => {
  const {
    setUnderwaterIntro,
    setUnderwaterLoader,
    getIsUnderwaterLoader,
  } = useUnderwaterState();
  const [isMounted, setIsMounted] = useState(false);
  const isGameLoading = getIsUnderwaterLoader();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isGameLoading) {
      setTimeout(setIsPreparing, 2500);
    }
  }, [isGameLoading, setIsPreparing]);

  return (
    <Wrapper isMounted={isMounted}>
      <CardWrapper>
        <PaperCardElement isMounted={isMounted}>
          {isGameLoading ? (
            <span>Loader</span>
          ) : (
            <ButtonsWrapper>
              <ButtonElement onClick={setUnderwaterLoader}>
                <FormattedMessage id="underwater.startGame" />
              </ButtonElement>

              <Text>
                <FormattedMessage id="shared.or" />
              </Text>

              <CenterButton>
                <ButtonElement onClick={setUnderwaterIntro}>
                  <FormattedMessage id="shared.back" />
                </ButtonElement>
              </CenterButton>
            </ButtonsWrapper>
          )}
        </PaperCardElement>
      </CardWrapper>
    </Wrapper>
  );
};

export default Starter;
