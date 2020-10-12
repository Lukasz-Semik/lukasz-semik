import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import styled from 'styled-components';

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
  transform: translateX(-50%);

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
  font-size: ${rem(14)};

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
          <Text>
            <FormattedMessage id="surface.sections.about.section1" />
          </Text>
        </MountingOpacityWrapper>

        <MountingOpacityWrapper duration={1.5} delay={0.5}>
          <Text>
            <FormattedMessage id="surface.sections.about.section2" />
          </Text>
          <AnimatedLine lineColor={styles.colors.black} />
        </MountingOpacityWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
