import React, { createContext, useContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';

export const StateContext = createContext({});

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const UnderwaterStateProvider = ({ children }: Props) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);