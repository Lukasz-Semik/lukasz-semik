import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { rem } from 'polished';
import styled from 'styled-components';

const Wrapper = styled(ToastContainer)`
  .Toastify__toast {
    min-height: auto;
    padding: ${rem(10)};
  }
`;

export const ToastWrapper = () => {
  return <Wrapper autoClose={5000} closeOnClick hideProgressBar />;
};
