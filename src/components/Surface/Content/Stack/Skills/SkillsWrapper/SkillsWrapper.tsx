import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

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
  <Wrapper>{children}</Wrapper>
);
