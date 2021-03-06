import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { appContent } from 'src/constants/content';
import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { AnimatedLine } from 'src/components/Elements/AnimatedLine/AnimatedLine';
import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

const Wrapper = styled.div`
  position: absolute;
  top: ${rem(80)};
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  pointer-events: none;
  transform: translateX(-50%);

  * {
    pointer-events: none;
  }

  @media ${breakpoints.smUp} {
    top: ${rem(150)};
  }
`;

const InnerWrapper = styled.div`
  width: ${rem(600)};
  max-width: 95%;
  line-height: 1.5;
  color: ${styles.colors.black};
`;

const Text = styled.p`
  margin-bottom: ${rem(5)};
  text-indent: 2em;
  font-size: ${rem(13)};

  @media ${breakpoints.smUp} {
    font-size: ${rem(16)};
  }
`;

export const About = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <AnimatedLine lineColor={styles.colors.black} />
        <MountingOpacityWrapper duration={1.5}>
          <Text>{appContent.surface.sections.about.section1()}</Text>
        </MountingOpacityWrapper>

        <MountingOpacityWrapper duration={1.5} delay={0.5}>
          <Text>{appContent.surface.sections.about.section2()}</Text>
          <AnimatedLine lineColor={styles.colors.black} />
        </MountingOpacityWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
