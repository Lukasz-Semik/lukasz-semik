import React from 'react';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

const items = [
  {
    title: 'HTML/CSS',
  },
  {
    title: 'SCSS/SASS',
  },
  {
    title: 'JavaScript/TypeScript',
  },
  {
    title: 'React + ecosystem',
  },
  {
    title: 'GraphQL/Apollo Client',
  },
  {
    title: 'Jest/Enzyme/React Testing Library',
  },
  {
    title: 'Redux + ecosystem',
  },
  {
    title: 'CSSModules/styled-components',
  },
  {
    title: 'PWA/SSR/a11y',
  },
  {
    title: 'Gatsby',
  },
  {
    title: 'Cypress',
  },
  {
    title: 'GSAP',
  },
  {
    title: 'Vue + Vuex',
    description: '(Basics)',
  },
  {
    title: 'Angular 2+',
    description: '(Basics)',
  },
];

export const Frontend = () => (
  <SkillsWrapper>
    <SkillsList items={items} />
  </SkillsWrapper>
);
