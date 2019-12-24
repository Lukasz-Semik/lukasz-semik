import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
