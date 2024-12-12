import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [fname, setFirst] = useState("");
  const [lname, setLast] = useState("");
  const [password, setPassword] = useState('');
  const [cart, setCart] = useState(Map());
  const [genres, setGenres] = useState([]);  // Initial empty genres array

  // Function to add a genre
  const addGenre = (genre) => {
    setGenres((prevGenres) => [...prevGenres, genre]);  // Add the genre to the list
  };

  // Function to remove a genre (optional)
  const removeGenre = (genreId) => {
    setGenres((prevGenres) => prevGenres.filter(genre => genre.id !== genreId));
  };

  const addToCart = (movie) => {
    setCart(prevCart => prevCart.set(movie.id, movie));  // Store the full movie object by its ID
  };

  return (
    <StoreContext.Provider value={{
      email, setEmail, cart, setCart,
      fname, setFirst, lname, setLast, password, setPassword,
      addToCart, genres, setGenres, addGenre, removeGenre // Provide genre functions
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};
