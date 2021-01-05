import React from 'react';

import { appContent } from 'src/constants/content';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

export const Frontend = () => (
  <SkillsWrapper>
    <SkillsList
      name="fe-com"
      title={appContent.surface.sections.stack.commercialExp()}
      items={[
        'HTML',
        'CSS',
        'JavaScript/TypeScript',
        'React + ecosystem',
        'Redux',
        'Jest',
        'Enzyme/React Testing Library',
        'Cypress',
        'CSSModules/styled-components',
        'PWA/SSR/a11y',
      ]}
    />

    <SkillsList
      name="fe-non-com"
      title={appContent.surface.sections.stack.nonCommercialExp()}
      items={[
        'Vue + Vuex',
        'Angular 2+ (basics)',
        'Graphql',
        'Gatsby',
        'jQuery',
        'SASS/SCSS',
      ]}
    />
  </SkillsWrapper>
);
