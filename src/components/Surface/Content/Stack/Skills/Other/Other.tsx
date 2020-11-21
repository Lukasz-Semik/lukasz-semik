import React from 'react';

import { appContent } from 'src/constants/content';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

export const Other = () => (
  <SkillsWrapper>
    <SkillsList
      title={appContent.surface.sections.stack.tools()}
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
      title={appContent.surface.sections.stack.services()}
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
