import React, { useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem, rgba } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { overlayPointerEvents, styleOverlay } from 'src/styles/helpers';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

import { Skills } from './Skills/Skills';
import { Skill } from './types';

const Wrapper = styled.div`
  ${styleOverlay};
  ${overlayPointerEvents};
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ isCurrent: boolean }>`
  display: block;
  width: ${rem(100)};
  padding: ${rem(5)} 0;
  font-size: ${rem(12)};
  font-weight: 200;
  letter-spacing: 1px;
  text-align: center;
  color: ${({ isCurrent }) =>
    isCurrent ? styles.colors.white : rgba(170, 170, 170, 0.8)};
  border-left: 1px solid rgba(170, 170, 170, 0.4);
  border-radius: 3px;
  transition: color 0.5s ease;

  &:last-of-type {
    border-right: 1px solid rgba(170, 170, 170, 0.4);
  }

  &:hover,
  &:focus {
    color: ${styles.colors.white};
  }
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  top: ${rem(70)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
`;

const SkillsWrapper = styled.div`
  position: absolute;
  top: ${rem(150)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
`;

export const Stack = () => {
  const [currentSkill, setCurrentSkill] = useState<Skill>();

  return (
    <MountingOpacityWrapper duration={3}>
      <Wrapper>
        <ButtonsWrapper>
          <Button
            isCurrent={currentSkill === Skill.Frontend}
            onClick={() => setCurrentSkill(Skill.Frontend)}
          >
            Frontend
          </Button>
          <Button
            isCurrent={currentSkill === Skill.Backend}
            onClick={() => setCurrentSkill(Skill.Backend)}
          >
            Backend
          </Button>
          <Button
            isCurrent={currentSkill === Skill.Other}
            onClick={() => setCurrentSkill(Skill.Other)}
          >
            <FormattedMessage id="shared.other" />
          </Button>
        </ButtonsWrapper>

        <SkillsWrapper>
          <div>
            <Skills currentSkill={currentSkill} />
          </div>
        </SkillsWrapper>
      </Wrapper>
    </MountingOpacityWrapper>
  );
};
