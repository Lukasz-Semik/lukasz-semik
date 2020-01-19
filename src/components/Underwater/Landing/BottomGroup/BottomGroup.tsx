import React, { useMemo } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { times } from 'lodash';

import { screenXsMin, screenMdMin, screenXlMin } from 'src/styles/constants';
import styles from 'src/styles';
import { useGetWindowContext } from 'src/store/view/selectors';

import { GrassGroup } from './Grass/GrassGroup';
import { Coral } from './Coral/Coral';
import { ShellGroup } from './Shell/ShellGroup';
import { Star } from './Star/Star';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: ${rem(135)};
`;

const ItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media ${styles.breakpoints.xsUp} {
    width: 50%;
  }

  @media ${styles.breakpoints.mdUp} {
    width: 33%;
  }

  @media ${styles.breakpoints.xlUp} {
    width: 25%;
  }
`;

export const BottomGroup = () => {
  const windowContext = useGetWindowContext();

  const qty = useMemo(() => {
    if (windowContext) {
      const { innerWidth: width } = windowContext;

      if (width <= screenXsMin) {
        return 1;
      }

      if (width <= screenMdMin) {
        return 2;
      }

      if (width <= screenXlMin) {
        return 3;
      }

      return 4;
    }
    return 0;
  }, [windowContext]);

  return qty ? (
    <Wrapper>
      {times(qty, i => (
        <ItemWrapper key={`bottom-group-item-${i}`}>
          <Star />
          <ShellGroup />
          <GrassGroup />
          <Coral />
        </ItemWrapper>
      ))}
    </Wrapper>
  ) : null;
};
