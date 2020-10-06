import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { rem } from 'polished';
import styled from 'styled-components';

import { breakpoints } from 'src/styles/constants';
import {
  PaginationButton,
  PaginationButtonsWrapper,
  usePagination,
} from 'src/components/Elements/Pagination';

const List = styled.ul`
  position: relative;
  width: 50%;
  height: ${rem(300)};
  list-style: none;

  @media ${breakpoints.smUp} {
    height: ${rem(300)};
  }
`;

const ListItem = styled.li`
  margin-bottom: ${rem(15)};
  text-align: center;
  font-size: ${rem(14)};
  opacity: 0;

  @media ${breakpoints.smUp} {
    font-size: ${rem(30)};
  }
`;

const Title = styled.h3`
  margin-bottom: ${rem(20)};
  font-size: ${rem(15)};
  text-align: center;

  @media ${breakpoints.smUp} {
    margin-bottom: ${rem(40)};
    font-size: ${rem(30)};
  }
`;

interface Props {
  skills: string[];
  title?: React.ReactNode;
}

export const SkillsList = ({ skills, title }: Props) => {
  const itemsRef = useRef<HTMLLIElement[] | null[]>([]);
  const { currentChunkIndex, chunk, goNext, goPrevious } = usePagination<
    string
  >(skills, 4);

  useEffect(() => {
    gsap.to(itemsRef.current, {
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      ease: 'ease-in',
    });
  }, [currentChunkIndex]);

  return (
    <List>
      {title && <Title>{title}</Title>}

      {chunk.map((item, index) => (
        <ListItem
          ref={element => (itemsRef.current[index] = element)}
          key={item}
        >
          {item}
        </ListItem>
      ))}

      <PaginationButtonsWrapper>
        <PaginationButton onClick={goPrevious}>{'<'}</PaginationButton>

        <PaginationButton onClick={goNext}>{'>'}</PaginationButton>
      </PaginationButtonsWrapper>
    </List>
  );
};
