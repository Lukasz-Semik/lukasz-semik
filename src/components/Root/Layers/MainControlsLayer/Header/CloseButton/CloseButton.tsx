import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';

const Button = styled.button`
  position: absolute;
  top: ${rem(10)};
  right: ${rem(10)};
  font-family: ${styles.fonts.uniq} !important;
  font-size: ${rem(30)};
  color: ${styles.colors.white};
`;

interface Props {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: Props) => (
  <Button type="button" onClick={onClick}>
    X
  </Button>
);
