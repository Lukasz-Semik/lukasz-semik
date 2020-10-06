import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

export const Backend = () => (
  <SkillsWrapper>
    <SkillsList
      title={<FormattedMessage id="surface.sections.stack.commercialExp" />}
      skills={[
        'Ruby on Rails',
        'Grape',
        'Capybara',
        'Carrierwave',
        'Active Admin',
        'JsonApi',
        'Postgres',
      ]}
    />

    <SkillsList
      title={<FormattedMessage id="surface.sections.stack.nonCommercialExp" />}
      skills={[
        'NodeJS (with Express)',
        'Nest',
        'TypeORM',
        'Sequelize',
        'Socket.IO',
      ]}
    />
  </SkillsWrapper>
);
