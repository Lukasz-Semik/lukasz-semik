import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';
import {
  PaginationButton,
  PaginationButtonsWrapper,
  usePagination,
} from 'src/components/Elements/Pagination';

import type { TimelineItem } from '../../types';

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  height: ${rem(400)};
  list-style: none;
  color: ${styles.colors.greyAlpha};
  transform: translateY(${rem(-50)});

  @media ${breakpoints.smUp} {
    width: ${rem(500)};
    transform: translateY(${rem(30)});
  }
`;

const Button = styled(PaginationButton)`
  color: ${styles.colors.greyAlpha};
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${rem(40)};
  width: 100%;
  font-size: ${rem(14)};
  opacity: 0;
`;

const Title = styled.h4`
  margin-bottom: ${rem(10)};
  padding: 0 ${rem(20)};
  text-align: center;
  font-size: ${rem(15)};

  @media ${breakpoints.smUp} {
    font-size: ${rem(30)};
  }
`;

const Date = styled.p`
  font-size: ${rem(12)};
  text-align: center;

  @media ${breakpoints.smUp} {
    font-size: ${rem(16)};
  }
`;

interface Props {
  items: TimelineItem[];
}

export const TimelineList = ({ items }: Props) => {
  const { currentChunkIndex, chunk, goNext, goPrevious } = usePagination<
    TimelineItem
  >(items, 3);
  const itemsRef = useRef<HTMLLIElement[] | null[]>([]);

  useEffect(() => {
    gsap.to(itemsRef.current, {
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      ease: 'ease-in',
    });
  }, [currentChunkIndex]);

  return (
    <MountingOpacityWrapper duration={1}>
      <Wrapper>
        {chunk.map((item, index) => (
          <ListItem
            key={item.title}
            ref={element => (itemsRef.current[index] = element)}
          >
            <Title>{item.title}</Title>
            <Date>{item.date}</Date>
          </ListItem>
        ))}

        {items.length > 3 && (
          <PaginationButtonsWrapper>
            <Button onClick={goPrevious}>{'<'}</Button>

            <Button onClick={goNext}>{'>'}</Button>
          </PaginationButtonsWrapper>
        )}
      </Wrapper>
    </MountingOpacityWrapper>
  );
};
