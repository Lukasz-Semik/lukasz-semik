import React from 'react';

import { UnderwaterStateProvider } from './underwaterState';

export const UnderwaterContainer = ({ render }: ContainerProps<{}>) => (
  <UnderwaterStateProvider>{render({})}</UnderwaterStateProvider>
);
