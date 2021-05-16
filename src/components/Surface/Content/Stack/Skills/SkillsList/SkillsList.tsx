import React from 'react';
import { rem, rgba } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { List, ListItem } from 'src/components/Elements/List/List';

const Wrapper = styled.div`
  width: 95%;
`;

const ListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ListItemTitle = styled.h4`
  position: relative;
  margin-bottom: ${rem(10)};
  text-align: center;
  font-size: ${rem(18)};
  color: ${styles.colors.black};

  @media ${breakpoints.smUp} {
    font-size: ${rem(25)};
  }
`;

const Description = styled.span`
  position: absolute;
  right: -5px;
  top: 50%;
  font-size: ${rem(12)};
  color: ${styles.colors.greyAlpha};
  transform: translateX(100%) translateY(-50%);
`;

interface Props {
  items: ListItem[];
}

export const SkillsList = ({ items }: Props) => {
  return (
    <Wrapper>
      <List
        items={items}
        renderItem={item => (
          <ListItemStyled key={item.title}>
            <ListItemTitle>
              {item.title}
              {item.description && (
                <Description>{item.description}</Description>
              )}
            </ListItemTitle>
          </ListItemStyled>
        )}
        scrollColor={rgba(styles.colors.black, 0.7)}
      />
    </Wrapper>
  );
};
