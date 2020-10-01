import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import styled from 'styled-components';

import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

import { SkillsList } from '../SkillsList/SkillsList';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${rem(600)};
`;

export const Frontend = () => {
  return (
    <MountingOpacityWrapper duration={1}>
      <Wrapper>
        <SkillsList
          title={<FormattedMessage id="surface.sections.stack.commercialExp" />}
          skills={[
            'HTML',
            'CSS',
            'JavaScript/TypeScript',
            'React + ecosystem',
            'Redux',
            'Jest',
            'Enzyme',
            'React Testing Library',
            'Cypress',
            'CSSModules/styled-components',
            'PWA/SSR/a11y',
          ]}
        />

        <SkillsList
          title={
            <FormattedMessage id="surface.sections.stack.nonCommercialExp" />
          }
          skills={[
            'Vue + Vuex',
            'Angular 2+ (basics)',
            'Graphql',
            'Gatsby',
            'jQuery',
            'Firebase',
            'Heroku',
            'Contentful',
            'Netlify',
          ]}
        />
      </Wrapper>
    </MountingOpacityWrapper>
  );
};
