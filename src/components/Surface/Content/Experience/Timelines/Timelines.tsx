import React from 'react';

import { Timeline } from '../types';
import { Dev } from './Dev/Dev';
import { Other } from './Other/Other';

interface Props {
  currentTimeline?: Timeline;
}

export const Timelines = ({ currentTimeline }: Props) => {
  switch (currentTimeline) {
    case Timeline.Dev:
      return <Dev />;
    case Timeline.Other:
      return <Other />;
    default:
      return null;
  }
};
