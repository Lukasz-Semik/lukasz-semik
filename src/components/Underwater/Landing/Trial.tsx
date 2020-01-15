import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Text1 = styled.div`
  position: absolute;
  left: 0;
  top: ${rem(15)};
  padding: 0 ${rem(10)};
  font-size: ${rem(30)};
`;

const Text2 = styled.div`
  position: absolute;
  right: 0;
  top: ${rem(20)};
  padding: 0 ${rem(10)};
  font-size: ${rem(30)};
`;

export const Trial = () => {
  return (
    <>
      <Text1>{`{ŁS}`}</Text1>
      <Text2>TESTS 2</Text2>
    </>
  );
};
