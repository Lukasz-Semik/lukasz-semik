import React from 'react';

import { List, ListItem } from 'src/components/Elements/List/List';

const items: ListItem[] = [
  {
    title: 'Senior Frontend Developer & Frontend Senior Team Leader',
    description: 'Netguru (12/2019 - now)',
  },
  {
    title: 'Frontend Developer & Frontend Senior Team Leader',
    description: 'Netguru (08/2019 - 12.2019)',
  },
  {
    title: 'Frontend Developer & Frontend Team Leader',
    description: 'Netguru (07/2018 - 08.2019)',
  },
  {
    title: 'Frontend Developer',
    description: 'Netguru (03/2018 - 07.2018)',
  },
  {
    title: 'Junior Frontend Developer',
    description: 'Netguru (01/2018 - 03.2018)',
  },
];

export const Dev = () => <List items={items} />;
