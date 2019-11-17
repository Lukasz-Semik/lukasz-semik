import React from 'react';
import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  from {
    top: 80%;
  }
  to {
    top: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  background-color: #58f1ff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #abfffe;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${anim} 10s linear infinite;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 30%;
    bottom: 15%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #abfffe;
  }
`;

const Drop = () => <Wrapper />;

export default Drop;
