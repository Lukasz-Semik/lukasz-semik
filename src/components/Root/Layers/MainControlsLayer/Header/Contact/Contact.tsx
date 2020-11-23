import React, { useCallback, useState } from 'react';
import Isemail from 'isemail';
import { isEmpty } from 'lodash';
import { darken, rem } from 'polished';
import styled from 'styled-components';

import { appApi } from 'src/api';
import { appContent } from 'src/constants/content';
import styles from 'src/styles';
import { breakpoints } from 'src/styles/constants';
import { LoaderElement } from 'src/components/Elements';
import { notifyError, notifySuccess } from 'src/components/Elements/Toast';

import { CloseButton } from '../CloseButton/CloseButton';

const ContactOverlay = styled.div<{ isVisible: boolean }>`
  position: absolute;
  right: 0;
  top: -${rem(15)};
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  width: 100vw;
  height: 100vh;
  background-color: ${styles.colors.black};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: transform 1s ease, opacity 1s ease;
  transform-origin: top right;
  transform: scale(${({ isVisible }) => (isVisible ? 1 : 0)});
`;

const Form = styled.form<{ isVisible: boolean }>`
  width: 80%;
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
  font-size: ${rem(14)};
  background-color: transparent;
  border: none;
  color: ${styles.colors.grey};
  outline: none;

  @media ${breakpoints.smUp} {
    font-size: ${rem(20)};
  }
`;

const InputLineBase = styled.div<{ hasError: boolean }>`
  position: absolute;
  bottom: -5px;
  width: 100%;
  height: 1px;
  background-color: ${({ hasError }) =>
    hasError ? styles.colors.hpRed : styles.colors.grey};
`;

const InputLineColored = styled.div<{ isVisible: boolean; hasError: boolean }>`
  position: absolute;
  bottom: -5px;
  width: 100%;
  height: 1px;
  background-color: ${({ hasError }) =>
    hasError ? styles.colors.hpRed : styles.colors.goldDark};
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.5s ease;
`;

const Label = styled.label<{ isFocused: boolean; hasError: boolean }>`
  font-size: ${rem(18)};
  color: ${({ isFocused }) =>
    isFocused ? styles.colors.goldLight : styles.colors.grey};
  transition: color 0.5s ease;

  ${({ hasError }) => hasError && `color: ${styles.colors.hpRed}`};

  @media ${breakpoints.smUp} {
    font-size: ${rem(30)};
  }
`;

const Textarea = styled.textarea<{ hasError: boolean }>`
  width: 100%;
  height: ${rem(250)};
  margin: ${rem(10)} 0 ${rem(30)};
  padding: ${rem(5)};
  font-family: ${styles.fonts.standard};
  font-size: ${rem(14)};
  background-color: transparent;
  color: ${styles.colors.grey};
  border: 1px solid ${styles.colors.grey};
  outline: none;
  transition: border-color 0.5s ease;

  ${({ hasError }) => hasError && `border-color: ${styles.colors.hpRed}`};

  @media ${breakpoints.smUp} {
    height: ${rem(350)};
    font-size: ${rem(20)};
  }

  &:focus {
    border-color: ${styles.colors.goldDark};
  }
`;

const ErrorMsg = styled.p`
  position: absolute;
  font-family: ${styles.fonts.standard};
  color: ${styles.colors.hpRed};
  transform: translateY(80%);
`;

const ContentError = styled(ErrorMsg)`
  transform: translateY(-${rem(25)});
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(150)};
  height: ${rem(30)};
  margin: 0 auto ${rem(10)} auto;
  font-size: ${rem(16)};
  border-radius: ${rem(20)};
  background-color: ${styles.colors.hpGreen};
  color: ${styles.colors.black};
  transition: color 0.5s ease, background-color 0.5s ease;

  @media ${breakpoints.smUp} {
    width: ${rem(200)};
    height: ${rem(40)};
    font-size: ${rem(20)};
  }

  &:focus,
  &:hover {
    background-color: ${darken(0.3, styles.colors.hpGreen)};
    color: ${styles.colors.white};
  }
`;

const CancelButton = styled.button`
  font-size: ${rem(16)};
  color: ${styles.colors.grey};
  transition: color 0.5s ease;

  @media ${breakpoints.smUp} {
    font-size: ${rem(20)};
  }

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
  const [isLoading, setIsLoading] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string>();
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState<string>();

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      let hasError = false;

      try {
        const isEmailEmpty = isEmpty(email);
        if (isEmpty(email)) {
          setEmailError(appContent.shared.required());
          hasError = true;
        }

        if (!isEmailEmpty && !Isemail.validate(email)) {
          setEmailError(appContent.shared.invalidFormat());
          hasError = true;
        }

        if (isEmpty(content)) {
          setContentError(appContent.shared.required());
          hasError = true;
        }

        if (hasError) {
          return;
        }

        await appApi.sendEmail({ email, content });
        notifySuccess(appContent.shared.emailSent);
        closeContact();
      } catch (err) {
        notifyError();
      }
      setIsLoading(false);
    },
    [content, email, closeContact]
  );

  const hasEmailError = Boolean(emailError);
  const hasContentError = Boolean(contentError);

  return (
    <ContactOverlay isVisible={isVisible}>
      <Form onSubmit={submit} isVisible={isVisible} noValidate>
        <CloseButton onClick={closeContact} />
        <InputWrapper>
          <Label
            hasError={hasEmailError}
            htmlFor="email"
            isFocused={isInputFocused}
          >
            {appContent.shared.emailLabel()}
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => {
              setEmailError(undefined);
              setEmail(e.target.value);
            }}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          <InputLineBase hasError={hasEmailError} />
          <InputLineColored
            hasError={hasEmailError}
            isVisible={isInputFocused}
          />
          {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
        </InputWrapper>

        <div style={{ position: 'relative' }}>
          <Label
            hasError={hasContentError}
            htmlFor="content"
            isFocused={isTextareaFocused}
          >
            {appContent.shared.content()}
          </Label>
          <Textarea
            id="content"
            onChange={e => {
              setContentError(undefined);
              setContent(e.target.value);
            }}
            hasError={hasContentError}
            value={content}
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
          />
          {contentError && <ContentError>{contentError}</ContentError>}
        </div>

        <ButtonsWrapper>
          <Button>
            {isLoading ? <LoaderElement isVisible /> : appContent.shared.send()}
          </Button>
          <CancelButton onClick={closeContact} type="button">
            {appContent.shared.cancel()}
          </CancelButton>
        </ButtonsWrapper>
      </Form>
    </ContactOverlay>
  );
};
