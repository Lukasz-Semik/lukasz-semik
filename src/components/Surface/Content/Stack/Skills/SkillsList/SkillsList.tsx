import React from 'react';
import chunk from 'lodash/chunk';
import { rem } from 'polished';
import styled from 'styled-components';

import { breakpoints } from 'src/styles/constants';
import { CarouselElement } from 'src/components/Elements';

const Wrapper = styled.div`
  width: 50%;
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

const List = styled.ul`
  position: relative;
  height: ${rem(180)};
  list-style: none;

  @media ${breakpoints.smUp} {
    height: ${rem(250)};
  }
`;

const ListItem = styled.li`
  margin-bottom: ${rem(15)};
  text-align: center;
  font-size: ${rem(14)};

  @media ${breakpoints.smUp} {
    font-size: ${rem(30)};
  }
`;

interface Props {
  title?: string;
  name: string;
  items: string[];
}

export const SkillsList = ({ name, items, title }: Props) => {
  const itemsChunks = chunk(items, 4);

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <CarouselElement>
        {itemsChunks.map((itemsChunk, index) => (
          <List key={`${name}-${index}`}>
            {itemsChunk.map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        ))}
      </CarouselElement>
    </Wrapper>
  );
};
