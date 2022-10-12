import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([])

    const addToCart = ( item ) => {
        console.log("HICISTE UN addToCart");
        setCartList( cartList => cartList.concat(item) )
        }

    const removeList = () => {
        setCartList.clear()
        }

    const deleteItem = (id) => {
        const updateCart = cartList.filter(element => element.id !==id)
        setCartList(updateCart)
        }

    const isInCart = (id) => {
        return setCartList.some(element => element.id === id)
        }
    
    const context = {
        cartList, 
        addToCart, 
        removeList, 
        deleteItem
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
