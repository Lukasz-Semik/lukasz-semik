import React from 'react';

import { appContent } from 'src/constants/content';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

export const Other = () => (
  <SkillsWrapper>
    <SkillsList
      name="other-com"
      title={appContent.surface.sections.stack.tools()}
      items={[
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
      name="other-non-com"
      title={appContent.surface.sections.stack.services()}
      items={[
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
