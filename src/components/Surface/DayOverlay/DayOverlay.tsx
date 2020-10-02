import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import gsap from 'gsap';
import { rgba } from 'polished';
import styled from 'styled-components';

import { setDayPeriod, setIsTweening } from 'src/store/dayCycle/actions';
import { useGetDayPeriod } from 'src/store/dayCycle/selectors';
import { DayPeriod } from 'src/store/dayCycle/types';
import { overlayPointerEvents } from 'src/styles/helpers';

import { Navigation } from '../Navigation/Navigation';
import { Stars } from '../Stars/Stars';

const backgroundMap = {
  [DayPeriod.Day]: rgba(255, 255, 255, 0),
  [DayPeriod.Evening]: rgba('#811d5e', 0.7),
  [DayPeriod.Morning]: rgba('#ff1111', 0.5),
  [DayPeriod.Night]: rgba('#000011', 0.9),
};

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  ${overlayPointerEvents};
`;

export const DayOverlay = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const dayPeriod = useGetDayPeriod();

  useEffect(() => {
    gsap.to(ref.current, {
      backgroundColor: backgroundMap[dayPeriod],
      duration: 1,
      ease: 'linear',
      onComplete: () => dispatch(setIsTweening(false)),
    });
  }, [dayPeriod, dispatch]);

  return (
    <>
      <Overlay ref={ref} />

      <Stars />

      <Navigation
        setNextDayPeriod={nextDayPeriod =>
          dispatch(setDayPeriod(nextDayPeriod))
        }
      />
    </>
  );
};
