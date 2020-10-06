import React from 'react';

import { useGetDayPeriod } from 'src/store/dayCycle/selectors';
import { DayPeriod } from 'src/store/dayCycle/types';

import { Experience } from './Experience/Experience';
import { Main } from './Main/Main';
import { Stack } from './Stack/Stack';

export const Content = () => {
  const dayPeriod = useGetDayPeriod();

  switch (dayPeriod) {
    case DayPeriod.Day:
      return <Main />;
    case DayPeriod.Evening:
      return <Stack />;
    case DayPeriod.Night:
      return <Experience />;
    default:
      return null;
  }
};
