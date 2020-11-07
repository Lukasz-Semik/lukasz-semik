import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';

const ContactOverlay = styled.div<{ isVisible: boolean }>`
  position: absolute;
  right: 0;
  top: -${rem(15)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${styles.colors.black};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: transform 1s ease, opacity 1s ease;
  transform-origin: top right;
  transform: scale(${({ isVisible }) => (isVisible ? 1 : 0)});
`;

const Form = styled.form<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  color: ${styles.colors.white};
  transition: transform 1s ease, opacity 1s ease;
  transition-delay: 1s;
`;

interface Props {
  isVisible: boolean;
}

export const Contact = ({ isVisible }: Props) => {
  return (
    <ContactOverlay isVisible={isVisible}>
      <Form isVisible={isVisible}>
        <input />
      </Form>
    </ContactOverlay>
  );
};
