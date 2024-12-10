import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [fname, setFirst] = useState("");
    const [lname, setLast] = useState("");
    const [password, setPassword] = useState('');
    const [cart, setCart] = useState(Map());

    return (
        <StoreContext.Provider value={{ email, setEmail, cart, setCart, fname, setFirst, lname, setLast, password, setPassword}}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}