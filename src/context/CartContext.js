import { createContext, useContext, useState } from "react";        //FALTA DARLE USO A useContext
import ItemCount from "../components/ItemCount";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([]);

    const addToCart = ( item, qty ) => {        //COMO APLICO EL USO DE qty?
        setCartList( cartList => cartList.concat(item) )
    }
    const removeList = (itemId) => {        //COMO APLICO EL USO DE itemId?
        setCartList.clear()
    }
    const deleteItem = (id) => {	//COMO APLICO EL USO DE id?

    }
    
    return (
        <CartContext.Provider value={{ cartList, addToCart, removeList, deleteItem }}>
            {children}
            <ItemCount/>
        </CartContext.Provider>
    );
}

export default CartContextProvider;
