import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

// @ts-ignore TODO: resolve problem with imports of svg
import Board from 'src/assets/board.svg';
import { SlidingInElement, XButtonElement } from 'src/components/Elements';

import GamePause from '../GamePause/GamePause';

const Wrapper = styled(SlidingInElement)`
  top: ${rem(10)};
`;

const Panel = styled.div`
  width: ${rem(300)};
  height: ${rem(100)};

  svg {
    width: 100% !important;
    height: 100% !important;
  }
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MainPanel = () => (
  <Wrapper position="left">
    <Panel>
      <Board />

      <InnerWrapper>
        <GamePause>
          {({ pauseGame }) => (
            <XButtonElement onClick={pauseGame} top="0" right={`-${rem(25)}`} />
          )}
        </GamePause>
      </InnerWrapper>
    </Panel>
  </Wrapper>
);

export default MainPanel;
