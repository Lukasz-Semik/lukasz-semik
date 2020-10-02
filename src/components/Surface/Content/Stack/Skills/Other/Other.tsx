import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import styled from 'styled-components';

import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

import { SkillsList } from '../SkillsList/SkillsList';
import { SkillsWrapper } from '../SkillsWrapper/SkillsWrapper';

const Title = styled.h3`
  margin-bottom: ${rem(10)};
  text-align: center;
`;

export const Other = () => (
  <MountingOpacityWrapper duration={1}>
    <Title>
      <FormattedMessage id="shared.tools" />
    </Title>

    <SkillsWrapper>
      <SkillsList
        skills={[
          'git',
          'github',
          'package managers',
          'webpack',
          'webpacker',
          'twilio',
        ]}
      />

      <SkillsList
        skills={[
          'bundle',
          'CircleCI',
          'New Relic',
          'Rollbar',
          'Figma',
          'Invision',
        ]}
      />
    </SkillsWrapper>
  </MountingOpacityWrapper>
);
