import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([])

    const addToCart = ( item, counter ) => {
        console.log(`Hiciste un addToCart de: ${item.name}, cantidad: ${counter}`);
        setCartList( cartList => cartList.concat(item) )
        
        //ALTERNATIVA a setCartList( cartList => cartList.concat(item) ) 
        //let compra = {...item, quantity:counter}
        //setCartList([...cartList, compra])

            if( isInCart (item.id) ){
                
            }else{
                setCartList( [...cartList , item] )
            }

        }

        console.log(cartList);

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
