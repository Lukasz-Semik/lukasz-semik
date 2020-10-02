import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

export const Backend = () => (
  <MountingOpacityWrapper duration={1}>
    <SkillsWrapper>
      <SkillsList
        title={<FormattedMessage id="surface.sections.stack.commercialExp" />}
        skills={[
          'Ruby on Rails',
          'Grape',
          'Devise',
          'Capybara',
          'Carrierwave',
          'Active Admin',
          'JsonApi',
          'Postgres',
          'Sendgrid (current Twilio)',
        ]}
      />

      <SkillsList
        title={
          <FormattedMessage id="surface.sections.stack.nonCommercialExp" />
        }
        skills={[
          'NodeJS (with Express)',
          'Nest',
          'TypeORM',
          'Sequelize',
          'Socket.IO',
        ]}
      />
    </SkillsWrapper>
  </MountingOpacityWrapper>
);
