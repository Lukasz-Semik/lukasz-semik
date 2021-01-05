import React from 'react';

import type { TimelineItem } from '../../types';
import { TimelineList } from '../TimelineList/TimelineList';

const items: TimelineItem[] = [
  {
    title: 'Mechanics and Machine Building Engineering Studies',
    date: 'Wroclaw University of Technology (2007 - 2013)',
  },
  {
    title: 'Mechanical Engineer & Project Leader',
    date: 'Whirlpool (02/2013 - 02/2017)',
  },
  {
    title: 'Product Approval',
    date: 'Whirlpool (02/2017 - 12.2017)',
  },
];

export const NonDev = () => <TimelineList name="non-dev" items={items} />;
