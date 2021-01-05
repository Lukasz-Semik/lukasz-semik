import React from 'react';

import type { TimelineItem } from '../../types';
import { TimelineList } from '../TimelineList/TimelineList';

const items: TimelineItem[] = [
  {
    title: 'Junior Frontend Developer',
    date: 'Netguru (01/2018 - 03.2018)',
  },
  {
    title: 'Frontend Developer',
    date: 'Netguru (03/2018 - 07.2018)',
  },
  {
    title: 'Frontend Developer & Frontend Team Leader',
    date: 'Netguru (07/2018 - 08.2019)',
  },
  {
    title: 'Frontend Developer & Frontend Senior Team Leader',
    date: 'Netguru (08/2019 - 12.2019)',
  },
  {
    title: 'Senior Frontend Developer & Frontend Senior Team Leader',
    date: 'Netguru (12/2019 - now)',
  },
];

export const Dev = () => <TimelineList name="dev" items={items} />;
