import React from 'react';
import { rem, rgba } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { List, ListItem } from 'src/components/Elements/List/List';

const ListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${rem(20)};
  width: 100%;
`;

const Title = styled.h4`
  margin-bottom: ${rem(10)};
  padding: 0 ${rem(20)};
  text-align: center;
  font-size: ${rem(25)};

  @media ${breakpoints.smUp} {
    font-size: ${rem(30)};
  }
`;

const Description = styled.p`
  font-size: ${rem(16)};
`;

interface Props {
  items: ListItem[];
}

export const TimelineList = ({ items }: Props) => (
  <List
    scrollColor={rgba(styles.colors.greyAlpha, 0.4)}
    items={items}
    renderItem={item => (
      <ListItemStyled key={item.title}>
        <Title>{item.title}</Title>
        {item.description && <Description>{item.description}</Description>}
      </ListItemStyled>
    )}
  />
);
