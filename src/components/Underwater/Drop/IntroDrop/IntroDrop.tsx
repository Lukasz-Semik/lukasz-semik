import React from 'react';
import { useDispatch } from 'react-redux';

import { setUnderwaterStarter } from 'src/store/underwater/actions';

import { DropBase } from '../DropBase/DropBase';

export const IntroDrop = () => {
  const dispatch = useDispatch();

  return <DropBase onClick={() => dispatch(setUnderwaterStarter())} />;
};
