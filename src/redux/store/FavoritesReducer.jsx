// src/store/favouritesReducer.js
import { createContext, useReducer, useEffect } from 'react';

export const FavouritesContext = createContext();

const initialState = JSON.parse(localStorage.getItem('favourites')) || [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.course];
    case 'remove':
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
}

export const FavouritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state));
  }, [state]);

  return (
    <FavouritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  );
};
