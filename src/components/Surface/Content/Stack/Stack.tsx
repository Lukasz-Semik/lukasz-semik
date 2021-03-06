import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { appContent } from 'src/constants/content';
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
  top: ${rem(120)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);

  @media ${breakpoints.smUp} {
    top: ${rem(160)};
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
            {appContent.surface.sections.stack.other()}
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
