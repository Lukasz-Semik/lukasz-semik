import React from 'react';

import Underwater from 'src/Underwater/Underwater';

import BackgroundUnderwater from './components/BackgroundUnderwater';
import { ContentWrapper } from './components/styled';

const Root = () => (
  <>
    <BackgroundUnderwater />

    <ContentWrapper>
      <Underwater />
    </ContentWrapper>
  </>
);

export default Root;
