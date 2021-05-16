import React from 'react';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

const items = [
  {
    title: 'git/github/bitbucket',
  },
  {
    title: 'yarn/worskpaces/npm',
  },
  {
    title: 'webpack/webpacker/gulp',
  },
  {
    title: 'CircleCI/SonarCloud',
  },
  {
    title: 'New Relic',
  },
  {
    title: 'Bigcommerce',
  },
  {
    title: 'Figma/Invision/Zepplin',
  },
  {
    title: 'Firebase',
  },
  {
    title: 'AWS/Netlify/Heroku',
  },
  {
    title: 'Contentful',
  },
  {
    title: 'Jira/Slack/Google docs',
  },
];

export const Other = () => (
  <SkillsWrapper>
    <SkillsList items={items} />
  </SkillsWrapper>
);
