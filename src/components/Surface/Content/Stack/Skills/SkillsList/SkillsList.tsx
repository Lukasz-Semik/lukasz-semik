import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { rem } from 'polished';
import styled from 'styled-components';

import { breakpoints } from 'src/styles/constants';

const List = styled.ul`
  width: 50%;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: ${rem(10)};
  text-align: center;
  font-size: ${rem(14)};
  opacity: 0;

  @media ${breakpoints.smUp} {
    font-size: ${rem(18)};
  }
`;

const Title = styled.h3`
  margin-bottom: ${rem(10)};
  font-size: ${rem(15)};
  text-align: center;

  @media ${breakpoints.smUp} {
    font-size: ${rem(20)};
  }
`;

interface Props {
  skills: string[];
  title?: React.ReactNode;
}

export const SkillsList = ({ skills, title }: Props) => {
  const itemsRef = useRef<HTMLLIElement[] | null[]>([]);

  useEffect(() => {
    gsap.to(itemsRef.current, {
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      ease: 'ease-in',
    });
  }, []);

  return (
    <List>
      {title && <Title>{title}</Title>}

      {skills.map((item, index) => (
        <ListItem
          ref={element => (itemsRef.current[index] = element)}
          key={item}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
};
