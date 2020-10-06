import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

export const Other = () => (
  <SkillsWrapper>
    <SkillsList
      title={<FormattedMessage id="surface.sections.stack.tools" />}
      skills={[
        'git',
        'github',
        'package managers',
        'webpack',
        'webpacker',
        'gulp',
        'bundle',
        'sidekiq',
      ]}
    />

    <SkillsList
      title={<FormattedMessage id="surface.sections.stack.services" />}
      skills={[
        'CircleCI',
        'New Relic',
        'Rollbar',
        'Figma',
        'Invision',
        'Twilio',
        'Sendgrid (current Twilio)',
        'Firebase',
        'Heroku',
        'Contentful',
        'Netlify',
      ]}
    />
  </SkillsWrapper>
);
