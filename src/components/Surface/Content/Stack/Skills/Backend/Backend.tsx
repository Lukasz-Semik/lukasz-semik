import React from 'react';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

const items = [
  {
    title: 'Ruby on Rails',
  },
  {
    title: 'Postgres',
  },
  {
    title: 'Active Admin',
  },
  {
    title: 'REST API',
  },
  {
    title: 'JSON:API',
  },
  {
    title: 'JavaScript/TypeScript',
  },
  {
    title: 'GraphQL',
  },
  {
    title: 'NestJS',
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'TypeORM',
  },
  {
    title: 'NodeJS (with Express)',
  },
  {
    title: 'Mocha/Chai',
  },
];

export const Backend = () => (
  <SkillsWrapper>
    <SkillsList items={items} />
  </SkillsWrapper>
);
