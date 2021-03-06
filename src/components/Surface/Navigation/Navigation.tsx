import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { appContent } from 'src/constants/content';
import { DayPeriod } from 'src/store/dayCycle/types';
import { breakpoints } from 'src/styles/constants';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

import { NavButton } from './NavButton';

const Nav = styled.nav`
  position: absolute;
  top: ${rem(25)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: translateX(-50%);

  @media ${breakpoints.smUp} {
    top: ${rem(23)};
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

interface Props {
  setNextDayPeriod: (dayPeriod: DayPeriod) => void;
}

export const Navigation = ({ setNextDayPeriod }: Props) => (
  <MountingOpacityWrapper duration={1}>
    <Nav>
      <InnerWrapper>
        <NavButton
          day={DayPeriod.Day}
          onClick={() => setNextDayPeriod(DayPeriod.Day)}
        >
          {appContent.surface.sections.main.title()}
        </NavButton>

        <NavButton
          day={DayPeriod.Evening}
          onClick={() => setNextDayPeriod(DayPeriod.Evening)}
        >
          {appContent.surface.sections.stack.title()}
        </NavButton>

        <NavButton
          day={DayPeriod.Night}
          onClick={() => setNextDayPeriod(DayPeriod.Night)}
        >
          {appContent.surface.sections.experience.title()}
        </NavButton>

        <NavButton
          day={DayPeriod.Morning}
          onClick={() => setNextDayPeriod(DayPeriod.Morning)}
        >
          {appContent.surface.sections.about.title()}
        </NavButton>
      </InnerWrapper>
    </Nav>
  </MountingOpacityWrapper>
);
