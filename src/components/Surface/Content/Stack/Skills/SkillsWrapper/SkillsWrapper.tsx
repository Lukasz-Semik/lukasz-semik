import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { MountingOpacityWrapper } from 'src/components/Elements/MountingOpacityWrapper/MountingOpacityWrapper';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${rem(900)};
  max-width: 95vw;
`;

interface Props {
  children: React.ReactNode;
}

export const SkillsWrapper = ({ children }: Props) => (
  <MountingOpacityWrapper duration={1}>
    <Wrapper>{children}</Wrapper>
  </MountingOpacityWrapper>
);
