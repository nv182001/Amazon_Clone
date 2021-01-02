import React, { createContext, useContext, useReducer } from 'react';
// creates data layer 
export const StateContext = createContext();
// for wrapping..
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);
// for pulling data from data layer
export const useStateValue = () => useContext(StateContext);