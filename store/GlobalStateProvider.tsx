import * as React from 'react';
import useGlobalState from './useGlobalState';

export const Context = React.createContext(null);

export const GlobalStateProvider = ({ children }) => {
  return <Context.Provider value={useGlobalState()}>{children}</Context.Provider>;
};
