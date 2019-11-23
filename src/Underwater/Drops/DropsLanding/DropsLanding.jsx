import React from 'react';
import styled from 'styled-components';

import { styleOverlay } from 'src/styles/helpers';
import Drop from '../Drop/Drop';
import Title from '../Title/Title';

const Wrapper = styled.div`
  ${styleOverlay}
`;

const DropsLanding = () => (
  <Wrapper>
    {new Array(40).fill(null).map((item, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Drop key={`${item}-${i}`} />
    ))}

    <Title />
  </Wrapper>
);

export default DropsLanding;
