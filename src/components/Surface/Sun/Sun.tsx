import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import { useGetCurrentDayPeriod } from 'src/store/dayCycle/selectors';
import { DayPeriod } from 'src/store/dayCycle/types';
import { useGetWindowData } from 'src/store/windowContext/selectors';

const getSunMap = (windowWidth: number) => ({
  [DayPeriod.Morning]: {
    y: '80px',
    x: '40px',
    backgroundColor: '#ff1111',
  },
  [DayPeriod.Day]: {
    y: '50px',
    x: windowWidth / 2,
    backgroundColor: '#fff52e',
  },
  [DayPeriod.Evening]: {
    y: '80px',
    x: `${windowWidth - 40}px`,
    backgroundColor: '#811d5e',
  },
  [DayPeriod.Night]: {},
});

const Element = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Sun = () => {
  const ref = useRef(null);
  const dayPeriod = useGetCurrentDayPeriod();
  const windowData = useGetWindowData();

  useEffect(() => {
    if (ref.current && dayPeriod && windowData) {
      const animateSun = () => {
        switch (dayPeriod) {
          case DayPeriod.Day:
          case DayPeriod.Evening:
          case DayPeriod.Morning:
            return gsap.to(ref.current, {
              ...getSunMap(windowData?.innerWidth)[dayPeriod],
              duration: 1,
              ease: 'linear',
            });
          case DayPeriod.Night: {
            return gsap
              .timeline()
              .to(ref.current, {
                x: `${windowData.innerWidth + 50}px`,
                duration: 1,
                ease: 'linear',
              })
              .to(ref.current, {
                x: '-80px',
                duration: 0,
              });
          }
          default:
            return null;
        }
      };

      animateSun();
    }
  }, [dayPeriod, windowData]);

  return <Element ref={ref} />;
};
