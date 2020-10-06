import React from 'react';

import { Timeline } from '../types';
import { Dev } from './Dev/Dev';
import { NonDev } from './NonDev/NonDev';
import { Trainings } from './Trainings/Trainings';

interface Props {
  currentTimeline?: Timeline;
}

export const Timelines = ({ currentTimeline }: Props) => {
  switch (currentTimeline) {
    case Timeline.Dev:
      return <Dev />;
    case Timeline.NonDev:
      return <NonDev />;
    case Timeline.Trainings:
      return <Trainings />;
    default:
      return null;
  }
};
