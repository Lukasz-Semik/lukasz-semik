import React from 'react';
import { times } from 'lodash';

import { useGetIsDayPeriod } from 'src/store/dayCycle/selectors';
import { DayPeriod } from 'src/store/dayCycle/types';
import { useGetWindowData } from 'src/store/windowContext/selectors';

import { Star } from './Star';

export const Stars = () => {
  const windowData = useGetWindowData();
  const isNight = useGetIsDayPeriod(DayPeriod.Night);
  const isEvening = useGetIsDayPeriod(DayPeriod.Evening);

  return windowData ? (
    <>
      {[
        ...times(80, i => (
          <Star
            key={`star-${i}-1`}
            isVisible={isEvening || isNight}
            windowWidth={windowData.innerWidth}
            windowHeight={windowData.innerHeight}
          />
        )),
        ...times(80, i => (
          <Star
            key={`star-${i}-2`}
            isVisible={isNight}
            windowWidth={windowData.innerWidth}
            windowHeight={windowData.innerHeight}
          />
        )),
      ]}
    </>
  ) : null;
};
