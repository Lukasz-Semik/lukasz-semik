import React from 'react';

import { UnderwaterStateProvider } from './underwaterState';

const UnderwaterContainer = ({ render }: ContainerProps<{}>) => (
  <UnderwaterStateProvider>{render({})}</UnderwaterStateProvider>
);

export default UnderwaterContainer;
