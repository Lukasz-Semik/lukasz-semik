import React from 'react';

import { appContent } from 'src/constants/content';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

export const Backend = () => (
  <SkillsWrapper>
    <SkillsList
      name="be-com"
      title={appContent.surface.sections.stack.commercialExp()}
      items={[
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
      name="be-non-com"
      title={appContent.surface.sections.stack.nonCommercialExp()}
      items={[
        'NodeJS (with Express)',
        'Nest',
        'TypeORM',
        'Sequelize',
        'Socket.IO',
      ]}
    />
  </SkillsWrapper>
);
