import React from 'react';

import { Skill } from '../types';
import { Frontend } from './Frontend/Frontend';

interface Props {
  currentSkill?: Skill;
}

export const Skills = ({ currentSkill }: Props) => {
  switch (currentSkill) {
    case Skill.Frontend:
      return <Frontend />;
    default:
      return null;
  }
};
