import React from 'react';
import { useDispatch } from 'react-redux';

import { substractHealthPoints, addScore } from 'src/store/underwater/actions';

import { DropBase } from '../DropBase/DropBase';

export const GameDrop = () => {
  const dispatch = useDispatch();

  return <DropBase onClick={() => dispatch(addScore(1))} />;
};
