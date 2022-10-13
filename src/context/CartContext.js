import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (item, counter) => {
        console.log('Hiciste un addToCart');

        const newObj = { 
            product: item, 
            quantity: counter 
        }

        if(isInCart(newObj.id)){
            cartList.map(product => {
                if(product.id === newObj.id){
                    counter += newObj.counter
            }
            return(product)
            })
        }else {
        setCartList([...cartList, newObj])
        }
    }

    //console.log(cartList);

    const removeList = () => {
        setCartList.clear()
    }

    const deleteItem = () => {
        setCartList([])
    }

    const isInCart = (id) => {
        return cartList.some(element => element.id === id)
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
