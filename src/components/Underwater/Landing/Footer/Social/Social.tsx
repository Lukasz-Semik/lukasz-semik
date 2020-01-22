import React from 'react';
import styled from 'styled-components';

import LinkedinIcon from 'src/assets/social/linkedin.svg';
import FacebookIcon from 'src/assets/social/facebook.svg';
import GithubIcon from 'src/assets/social/github.svg';

import { LinkIcon } from './LinkIcon';

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Social = () => (
  <Wrapper>
    <LinkIcon index={0} href="https://www.linkedin.com/in/lukasz-semik">
      <LinkedinIcon />
    </LinkIcon>

    <LinkIcon index={1} href="https://www.facebook.com/luki.djpluki">
      <FacebookIcon />
    </LinkIcon>

    <LinkIcon index={2} href="https://github.com/Lukasz-Semik">
      <GithubIcon />
    </LinkIcon>
  </Wrapper>
);
