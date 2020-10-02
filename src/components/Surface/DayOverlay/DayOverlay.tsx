import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import gsap from 'gsap';
import { rgba } from 'polished';
import styled from 'styled-components';

// TODO: used for tests
// import { useRwdQuery } from 'src/hooks/useMediaQuery';
import { setDayPeriod, setIsTweening } from 'src/store/dayCycle/actions';
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
  // const { isMediaSm } = useRwdQuery();

  const setNextDayPeriod = useCallback(
    (nextDayPeriod: DayPeriod) => {
      gsap.to(ref.current, {
        backgroundColor: backgroundMap[nextDayPeriod],
        duration: 1,
        ease: 'linear',
        onStart: () => dispatch(setDayPeriod(nextDayPeriod)),
        onComplete: () => dispatch(setIsTweening(false)),
      });
    },
    [dispatch]
  );

  return (
    <>
      <Overlay ref={ref} />

      <Stars />

      {/* {isMediaSm && <Navigation setNextDayPeriod={setNextDayPeriod} />} */}
      {/* TODO: Remove it, for test */}
      <Navigation setNextDayPeriod={setNextDayPeriod} />
    </>
  );
};
