import React from 'react';
import { Timeline } from '../types';
import { Dev } from './Dev/Dev';

export const Timelines = ({ currentTimeline }) => {
  switch (currentTimeline) {
    case Timeline.Dev:
      return <Dev />;
    default:
      return null;
  }
};
