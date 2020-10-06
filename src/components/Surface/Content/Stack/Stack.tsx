import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import styled from 'styled-components';

import { breakpoints } from 'src/styles/constants';

import {
  SubNavButton,
  SubNavButtonsWrapper,
} from '../../SubNavigation/SubNavigation';
import { ContentHandler } from '../ContentHandler/ContentHandler';
import { Skills } from './Skills/Skills';
import { Skill } from './types';

const SkillsWrapper = styled.div`
  position: absolute;
  top: ${rem(140)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);

  @media ${breakpoints.smUp} {
    top: ${rem(180)};
  }
`;

export const Stack = () => (
  <ContentHandler<Skill>>
    {({ currentItem, setCurrentItem, isClicked }) => (
      <>
        <SubNavButtonsWrapper isClicked={isClicked}>
          <SubNavButton
            isCurrent={currentItem === Skill.Frontend}
            onClick={() => setCurrentItem(Skill.Frontend)}
          >
            Frontend
          </SubNavButton>
          <SubNavButton
            isCurrent={currentItem === Skill.Backend}
            onClick={() => setCurrentItem(Skill.Backend)}
          >
            Backend
          </SubNavButton>
          <SubNavButton
            isCurrent={currentItem === Skill.Other}
            onClick={() => setCurrentItem(Skill.Other)}
          >
            <FormattedMessage id="surface.sections.stack.other" />
          </SubNavButton>
        </SubNavButtonsWrapper>

        <SkillsWrapper>
          <div>
            <Skills currentSkill={currentItem} />
          </div>
        </SkillsWrapper>
      </>
    )}
  </ContentHandler>
);
