import { rem } from 'polished';
import React, { useEffect, useState } from 'react';
import styles from 'src/styles';
import styled from 'styled-components';
import { TimelineItem } from '../TimelineItem/TimelineItem';

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 95%;
  width: ${rem(500)};
  list-style: none;
  color: #aaa;
`;

const Item = styled.li`
  position: relative;
  padding: ${rem(20)} 0 ${rem(20)} ${rem(50)};
  width: 100%;
  font-size: ${rem(14)};
  border-left: 1px solid #aaa;
  transform: scaleY(${({ is }) => (is ? 1 : 0)});
  transition: all 1s ease;
  transform-origin: top left;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${styles.colors.goldDark};
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.h4`
  margin-bottom: ${rem(5)};
  text-align: center;
  font-size: ${rem(30)};
`;

const Date = styled.p`
  font-size: ${rem(16)};
  text-align: center;
`;

const items = [
  {
    title: 'Junior Frontend Developer',
    date: '(01/2017 - 03.2017)',
  },
  {
    title: 'Junior Frontend Developer',
    date: '(01/2017 - 03.2017)',
  },
  {
    title: 'Junior Frontend Developer',
    date: '(01/2017 - 03.2017)',
  },
  {
    title: 'Junior Frontend Developer',
    date: '(01/2017 - 03.2017)',
  },
  {
    title: 'Junior Frontend Developer',
    date: '(01/2017 - 03.2017)',
  },
];

export const Dev = () => {
  const [is, setIs] = useState(false);
  useEffect(() => {
    setTimeout(() => setIs(true), 1);
  }, []);

  return (
    <Wrapper>
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} />
      ))}
    </Wrapper>
  );
};
