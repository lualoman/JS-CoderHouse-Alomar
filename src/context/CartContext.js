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

        if(isInCart(newObj.product.id)){
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

    const totalProductsQty = () => {
        return cartList.reduce((acc, CartItem) => acc + CartItem.quantity, 0)
    }

    const totalProductsPrice = () => {
        return cartList.reduce((acc, CartItem) => acc + (CartItem.product.price * CartItem.quantity), 0)
    }

    const removeList = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        const updatedCart = cartList.filter(element => element.product.id !== id)
        setCartList(updatedCart)
    }

    const isInCart = (id) => {
        return cartList.some(element => element.id === id)
    }

    const context = {
        cartList,
        addToCart,
        removeList,
        deleteItem,
        isInCart,
        totalProductsQty,
        totalProductsPrice
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
