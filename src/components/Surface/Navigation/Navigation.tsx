import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import styled from 'styled-components';

import { DayPeriod } from 'src/store/dayCycle/types';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

import { NavButton } from './NavButton';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${rem(15)} ${rem(60)};
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

export const Naviation = ({ setNextDayPeriod }: Props) => (
  <MountingOpacityWrapper duration={1}>
    <Nav>
      <InnerWrapper>
        <NavButton
          day={DayPeriod.Day}
          onClick={() => setNextDayPeriod(DayPeriod.Day)}
        >
          <FormattedMessage id="surface.sections.main.title" />
        </NavButton>

        <NavButton
          day={DayPeriod.Evening}
          onClick={() => setNextDayPeriod(DayPeriod.Evening)}
        >
          <FormattedMessage id="surface.sections.stack.title" />
        </NavButton>

        <NavButton
          day={DayPeriod.Night}
          onClick={() => setNextDayPeriod(DayPeriod.Night)}
        >
          <FormattedMessage id="surface.sections.experience.title" />
        </NavButton>

        <NavButton
          day={DayPeriod.Morning}
          onClick={() => setNextDayPeriod(DayPeriod.Morning)}
        >
          <FormattedMessage id="surface.sections.about.title" />
        </NavButton>
      </InnerWrapper>
    </Nav>
  </MountingOpacityWrapper>
);
