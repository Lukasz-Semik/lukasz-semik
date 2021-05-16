import React from 'react';

import type { ListItem } from 'src/components/Elements/List/List';

import { TimelineList } from '../TimeLineList';

const items: ListItem[] = [
  {
    title: 'Advanced Mobile Web Specialist (PWA, RWD, Performence, a11y',
    description: '#GoogleUdacityScholars (12/2017 - 02.2018)',
  },
  {
    title: 'Security of REST API',
    description: 'Securitum',
  },
  {
    title: 'Product Approval',
    description: 'Whirlpool (02/2017 - 12.2017)',
  },
  {
    title: 'Mechanical Engineer & Project Leader',
    description: 'Whirlpool (02/2013 - 02/2017)',
  },
  {
    title: 'Mechanics and Machine Building Engineering Studies',
    description: 'Wroclaw University of Technology (2007 - 2013)',
  },
];

export const Other = () => <TimelineList items={items} />;
