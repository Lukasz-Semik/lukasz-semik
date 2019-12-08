import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

// @ts-ignore TODO: resolve problem with imports of svg
import Board from 'src/assets/board.svg';
import { SlidingInElement } from 'src/components/Elements';

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

const MainPanel = () => (
  <Wrapper position="left">
    <Panel>
      <Board />
    </Panel>
  </Wrapper>
);

export default MainPanel;
