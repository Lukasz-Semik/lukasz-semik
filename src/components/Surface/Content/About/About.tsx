import React, { useEffect, useRef } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import gsap from 'gsap';
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
  font-size: ${rem(13)};

  @media ${breakpoints.smUp} {
    font-size: ${rem(16)};
  }
`;

const Letter = styled.span`
  display: inline-block;
  margin-right: ${rem(3)};
`;

export const About = () => {
  const { formatMessage } = useIntl();
  const section1Text = formatMessage({ id: 'surface.sections.about.section1' });
  const section2Text = formatMessage({ id: 'surface.sections.about.section2' });

  const ref = useRef(null);
  const itemsSection1Ref = useRef<HTMLSpanElement[] | null[]>([]);
  const itemsSection2Ref = useRef<HTMLSpanElement[] | null[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    const commonProps = {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01,
    };

    tl.from(
      itemsSection1Ref.current,
      {
        delay: 1,
        y: 80,
        rotationX: 180,
        ...commonProps,
      },
      '+=0'
    ).from(
      itemsSection2Ref.current,
      {
        delay: -1,
        rotationX: -180,
        y: 0,
        ...commonProps,
      },
      '+=0'
    );
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <AnimatedLine lineColor={styles.colors.black} />
        <MountingOpacityWrapper duration={0.5}>
          <Text ref={ref}>
            {section1Text.split(' ').map((letter, index) => (
              <Letter
                key={`${letter}-1`}
                ref={element => (itemsSection1Ref.current[index] = element)}
              >
                {letter}
              </Letter>
            ))}
          </Text>

          <Text>
            {section2Text.split(' ').map((letter, index) => (
              <Letter
                key={`${letter}-2`}
                ref={element => (itemsSection2Ref.current[index] = element)}
              >
                {letter}
              </Letter>
            ))}
          </Text>

          <AnimatedLine lineColor={styles.colors.black} />
        </MountingOpacityWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
