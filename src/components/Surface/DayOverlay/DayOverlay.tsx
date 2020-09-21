import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import gsap from 'gsap';
import { rgba } from 'polished';
import styled from 'styled-components';

import { setDayPeriod, setTweeningDayPeriod } from 'src/store/dayCycle/actions';
import { useGetDayPeriod } from 'src/store/dayCycle/selectors';
import { DayPeriod } from 'src/store/dayCycle/types';

import { Stars } from '../Stars/Stars';

const backgroundMap = {
  [DayPeriod.Day]: rgba(255, 255, 255, 0),
  [DayPeriod.Evening]: rgba('#811d5e', 0.7),
  [DayPeriod.Morning]: rgba('#ff1111', 0.5),
  [DayPeriod.Night]: rgba('#000011', 0.9),
};

const Overlay = styled.div<{ period: DayPeriod }>`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 100px;
`;

const getAnimationSequences = (
  dayPeriod: DayPeriod,
  futureDayPeriod: DayPeriod
) => {
  const dayCycleOrder = [
    DayPeriod.Night,
    DayPeriod.Morning,
    DayPeriod.Day,
    DayPeriod.Evening,
  ];
  const startIndex = dayCycleOrder.indexOf(dayPeriod);
  const endIndex = dayCycleOrder.indexOf(futureDayPeriod);

  const isNewDay = startIndex > endIndex;

  if (!isNewDay) {
    return dayCycleOrder.slice(startIndex + 1, endIndex + 1);
  }

  return startIndex < dayCycleOrder.length - 1
    ? [
        ...dayCycleOrder.slice(startIndex),
        ...dayCycleOrder.slice(0, endIndex + 1),
      ]
    : dayCycleOrder.slice(0, endIndex + 1);
};

export const DayOverlay = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const dayPeriod = useGetDayPeriod();
  const [futureDayPeriod, setFutureDayPeriod] = useState<DayPeriod>(dayPeriod);

  const tl = gsap.timeline();

  useEffect(() => {
    if (ref.current && dayPeriod !== futureDayPeriod) {
      const animationSequences = getAnimationSequences(
        dayPeriod,
        futureDayPeriod
      );

      animationSequences.forEach((item, i) => {
        tl.to(ref.current, {
          backgroundColor: backgroundMap[item],
          duration: 1,
          ease: 'linear',
          onStart: () => {
            dispatch(setTweeningDayPeriod(item));
          },
          onComplete: () => {
            if (i === animationSequences.length - 1) {
              dispatch(setDayPeriod(futureDayPeriod));
            }
          },
        });
      });
    }
  }, [futureDayPeriod, dayPeriod, dispatch, tl]);

  return (
    <>
      <Overlay ref={ref} period={dayPeriod} />

      <Stars />

      <ButtonsWrapper>
        <button onClick={() => setFutureDayPeriod(DayPeriod.Day)}>Day</button>{' '}
        <button onClick={() => setFutureDayPeriod(DayPeriod.Night)}>
          Night
        </button>{' '}
        <button onClick={() => setFutureDayPeriod(DayPeriod.Evening)}>
          Evening
        </button>{' '}
        <button onClick={() => setFutureDayPeriod(DayPeriod.Morning)}>
          Morning
        </button>{' '}
      </ButtonsWrapper>
    </>
  );
};
