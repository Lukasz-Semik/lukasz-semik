import React from 'react';

import { Coconut } from './Coconut';

export const Coconuts = () => (
  <>
    <Coconut top={60} left={67} leftDownPosition={30} downPosition={100} />
    <Coconut top={40} left={30} leftDownPosition={-30} downPosition={100} />
    <Coconut top={56} left={45} leftDownPosition={-10} downPosition={110} />
  </>
);
