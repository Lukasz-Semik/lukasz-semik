import React from 'react';

import { Skill } from '../types';
import { Backend } from './Backend/Backend';
import { Frontend } from './Frontend/Frontend';
import { Other } from './Other/Other';

interface Props {
  currentSkill?: Skill;
}

export const Skills = ({ currentSkill }: Props) => {
  switch (currentSkill) {
    case Skill.Frontend:
      return <Frontend />;
    case Skill.Backend:
      return <Backend />;
    case Skill.Other:
      return <Other />;
    default:
      return null;
  }
};
