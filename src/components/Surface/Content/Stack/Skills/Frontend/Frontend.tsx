import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

export const Frontend = () => (
  <SkillsWrapper>
    <SkillsList
      title={<FormattedMessage id="surface.sections.stack.commercialExp" />}
      skills={[
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
      title={<FormattedMessage id="surface.sections.stack.nonCommercialExp" />}
      skills={[
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
