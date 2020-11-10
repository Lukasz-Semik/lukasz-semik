import React, { useState } from 'react';
import { darken, rem } from 'polished';
import styled from 'styled-components';

import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';

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

  @media ${breakpoints.smUp} {
    width: ${rem(400)};
  }
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: ${rem(40)};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-family: ${styles.fonts.standard};
  font-size: ${rem(20)};
  background-color: transparent;
  border: none;
  color: ${styles.colors.grey};
  outline: none;
`;

const InputLineBase = styled.div`
  position: absolute;
  bottom: -5px;
  width: 100%;
  height: 1px;
  background-color: ${styles.colors.grey};
`;

const InputLineColored = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: -5px;
  width: 100%;
  height: 1px;
  background-color: ${styles.colors.goldDark};
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.5s ease;
`;

const Label = styled.label<{ isFocused: boolean }>`
  font-size: ${rem(30)};
  color: ${({ isFocused }) =>
    isFocused ? styles.colors.goldLight : styles.colors.grey};
  transition: color 0.5s ease;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: ${rem(350)};
  margin: ${rem(10)} 0 ${rem(30)};
  padding: ${rem(5)};
  font-family: ${styles.fonts.standard};
  font-size: ${rem(20)};
  background-color: transparent;
  color: ${styles.colors.grey};
  border: 1px solid ${styles.colors.grey};
  outline: none;
  transition: border-color 0.5s ease;

  &:focus {
    border-color: ${styles.colors.goldDark};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: ${rem(200)};
  height: ${rem(40)};
  margin: 0 auto ${rem(10)} auto;
  font-size: ${rem(20)};
  border-radius: ${rem(20)};
  background-color: ${styles.colors.hpGreen};
  color: ${styles.colors.black};
  transition: color 0.5s ease, background-color 0.5s ease;

  &:focus,
  &:hover {
    background-color: ${darken(0.3, styles.colors.hpGreen)};
    color: ${styles.colors.white};
  }
`;

const CancelButton = styled.button`
  font-size: ${rem(20)};
  color: ${styles.colors.grey};
  transition: color 0.5s ease;

  &:hover,
  &:focus {
    color: ${styles.colors.white};
  }
`;

interface Props {
  isVisible: boolean;
  closeContact: () => void;
}

export const Contact = ({ isVisible, closeContact }: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  return (
    <ContactOverlay isVisible={isVisible}>
      <Form isVisible={isVisible} noValidate>
        <InputWrapper>
          <Label htmlFor="#email" isFocused={isInputFocused}>
            Your e-mail
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          <InputLineBase />
          <InputLineColored isVisible={isInputFocused} />
        </InputWrapper>

        <Label htmlFor="#content" isFocused={isTextareaFocused}>
          Content
        </Label>
        <Textarea
          id="content"
          onChange={e => setContent(e.target.value)}
          value={content}
          onFocus={() => setIsTextareaFocused(true)}
          onBlur={() => setIsTextareaFocused(false)}
        />

        <ButtonsWrapper>
          <Button>Send</Button>
          <CancelButton onClick={closeContact} type="button">
            Cancel
          </CancelButton>
        </ButtonsWrapper>
      </Form>
    </ContactOverlay>
  );
};
