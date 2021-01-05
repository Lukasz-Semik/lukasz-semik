import React from 'react';

import type { TimelineItem } from '../../types';
import { TimelineList } from '../TimelineList/TimelineList';

const items: TimelineItem[] = [
  {
    title: 'Advanced Mobile Web Specialist (PWA, RWD, Performence, a11y',
    date: '#GoogleUdacityScholars (12/2017 - 02.2018)',
  },
  {
    title: 'Security of REST API',
    date: 'Securitum',
  },
];

export const Trainings = () => <TimelineList name="trainings" items={items} />;
