import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from './reducer';

export const StateContext = createContext();

export const UnderwaterStateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

UnderwaterStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
