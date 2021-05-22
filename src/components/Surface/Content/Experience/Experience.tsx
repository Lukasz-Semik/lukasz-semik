import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { appContent } from 'src/constants/content';

import {
  SubNavButton,
  SubNavButtonsWrapper,
} from '../../SubNavigation/SubNavigation';
import { ContentHandler } from '../ContentHandler/ContentHandler';
import { Timelines } from './Timelines/Timelines';
import { Timeline } from './types';

const Wrapper = styled.div`
  position: absolute;
  top: ${rem(150)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: translateX(-50%);
`;

export const Experience = () => (
  <ContentHandler<Timeline>>
    {({ currentItem, setCurrentItem, isClicked }) => (
      <>
        <SubNavButtonsWrapper isClicked={isClicked}>
          <SubNavButton
            isCurrent={currentItem === Timeline.Dev}
            onClick={() => setCurrentItem(Timeline.Dev)}
          >
            Dev
          </SubNavButton>
          <SubNavButton
            isCurrent={currentItem === Timeline.Other}
            onClick={() => setCurrentItem(Timeline.Other)}
          >
            {appContent.surface.sections.experience.other()}
          </SubNavButton>
        </SubNavButtonsWrapper>

        <div>
          <Wrapper>
            <Timelines currentTimeline={currentItem} />
          </Wrapper>
        </div>
      </>
    )}
  </ContentHandler>
);
