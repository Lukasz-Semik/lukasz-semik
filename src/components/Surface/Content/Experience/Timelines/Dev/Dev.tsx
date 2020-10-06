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

interface Item {
  title: string;
  date: string;
}

const items: Item[] = [
  {
    title: 'Junior Frontend Developer',
    date: 'Netguru (01/2018 - 03.2018)',
  },
  {
    title: 'Frontend Developer',
    date: 'Netguru (03/2018 - 07.2018)',
  },
  {
    title: 'Frontend Developer & Frontend Team Leader',
    date: 'Netguru (07/2018 - 08.2019)',
  },
  {
    title: 'Frontend Developer & Frontend Senior Team Leader',
    date: 'Netguru (08/2019 - 12.2019)',
  },
  {
    title: 'Senior Frontend Developer & Frontend Senior Team Leader',
    date: 'Netguru (12/2019 - now)',
  },
];

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
  font-size: ${rem(16)};
  text-align: center;
`;

export const Dev = () => {
  const { currentChunkIndex, chunk, goNext, goPrevious } = usePagination<Item>(
    items,
    3
  );
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

        <PaginationButtonsWrapper>
          <Button onClick={goPrevious}>{'<'}</Button>

          <Button onClick={goNext}>{'>'}</Button>
        </PaginationButtonsWrapper>
      </Wrapper>
    </MountingOpacityWrapper>
  );
};
