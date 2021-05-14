import React, { useEffect, useRef, useState } from 'react';
import { rem, rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

const ListStyled = styled.ul`
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  overflow-y: scroll;
  width: ${rem(500)};
  max-width: 100%;
  margin: ${rem(20)} auto 0;
  max-height: 55vh;
  list-style: none;
  color: ${styles.colors.greyAlpha};

  @media ${breakpoints.mdUp} {
    height: ${rem(380)};
  }

  &::-webkit-scrollbar {
    display: none;
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
  font-size: ${rem(25)};

  @media ${breakpoints.smUp} {
    font-size: ${rem(30)};
  }
`;

const ScrollIndicator = styled.div`
  position: fixed;
  bottom: -${rem(45)};
  left: 50%;
  height: ${rem(35)};
  width: ${rem(20)};
  border: 2px solid ${rgba(styles.colors.greyAlpha, 0.4)};
  border-radius: ${rem(10)};
  transform: translateX(-50%);
`;

const scrollAnimation = keyframes`
  0% {
    top: ${rem(8)};
    opacity: 1;
  }

  50% {
    top: ${rem(12)};
    opacity: 1;
  }

  100% {
    top: ${rem(16)};
    opacity: 0;
  }
`;

const ScrollIndicatorElement = styled.div`
  position: absolute;
  top: ${rem(8)};
  left: 50%;
  width: 3px;
  height: 5px;
  background-color: ${rgba(styles.colors.greyAlpha, 0.4)};
  animation: ${scrollAnimation} 2s infinite;
  transform: translateX(-50%);
`;

const Description = styled.p`
  font-size: ${rem(16)};
`;

export interface ListItem {
  title: string;
  description?: string;
}

interface Props {
  items: ListItem[];
}

export const List = ({ items }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [isScrollIndicatorVisible, setIsScrollIndicatorVisible] = useState(
    false
  );

  useEffect(() => {
    setTimeout(() => {
      const isVisible =
        (listRef?.current?.scrollHeight || 0) >
        (listRef?.current?.clientHeight || 0);
      setIsScrollIndicatorVisible(isVisible);
    }, 0);
  }, []);

  return (
    <ListStyled ref={listRef}>
      <MountingOpacityWrapper duration={1}>
        {items.map(item => (
          <ListItem key={item.title}>
            <Title>{item.title}</Title>
            {item.description && <Description>{item.description}</Description>}
          </ListItem>
        ))}
        {isScrollIndicatorVisible && (
          <ScrollIndicator>
            <ScrollIndicatorElement />
          </ScrollIndicator>
        )}
      </MountingOpacityWrapper>
    </ListStyled>
  );
};
