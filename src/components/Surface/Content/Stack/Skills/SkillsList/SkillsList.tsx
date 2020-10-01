import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

const List = styled.ul`
  width: 50%;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: ${rem(10)};
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: ${rem(10)};
  text-align: center;
`;

interface Props {
  skills: string[];
  title: React.ReactNode;
}

export const SkillsList = ({ skills, title }: Props) => {
  return (
    <List>
      <Title>{title}</Title>
      {skills.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  );
};
