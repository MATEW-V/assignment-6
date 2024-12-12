import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [fname, setFirst] = useState("");
  const [lname, setLast] = useState("");
  const [password, setPassword] = useState('');
  const [cart, setCart] = useState(Map());

  // Updated addToCart function that stores the full movie object
  const addToCart = (movie) => {
    setCart(prevCart => prevCart.set(movie.id, movie));  // Store the full movie object by its ID
  };

  return (
    <StoreContext.Provider value={{
      email, setEmail, cart, setCart,
      fname, setFirst, lname, setLast, password, setPassword,
      addToCart
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};
