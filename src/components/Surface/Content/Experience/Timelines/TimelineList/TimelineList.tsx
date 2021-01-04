import React from 'react';
import chunk from 'lodash/chunk';
import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { CarouselElement } from 'src/components/Elements';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

import type { TimelineItem } from '../../types';

const Wrapper = styled.div`
  width: ${rem(500)};
  max-width: 100%;
  height: ${rem(300)};

  @media ${breakpoints.smUp} {
    width: ${rem(500)};
    height: ${rem(420)};
  }
`;

const List = styled.ul`
  margin-top: ${rem(20)};
  width: 95vw;
  height: ${rem(300)};
  list-style: none;
  color: ${styles.colors.greyAlpha};

  @media ${breakpoints.smUp} {
    height: ${rem(420)};
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${rem(20)};
  width: 100%;
  font-size: ${rem(14)};
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

  @media ${breakpoints.smUp} {
    font-size: ${rem(16)};
  }
`;

interface Props {
  items: TimelineItem[];
  name: string;
}

export const TimelineList = ({ items, name }: Props) => {
  const itemChunks = chunk(items, 4);

  return (
    <MountingOpacityWrapper duration={1}>
      <Wrapper>
        <CarouselElement>
          {itemChunks.map((itemChunk, index) => (
            <List key={`${name}-${index}`}>
              {itemChunk.map(item => (
                <ListItem key={item.title}>
                  <Title>{item.title}</Title>
                  <Date>{item.date}</Date>
                </ListItem>
              ))}
            </List>
          ))}
        </CarouselElement>
      </Wrapper>
    </MountingOpacityWrapper>
  );
};
