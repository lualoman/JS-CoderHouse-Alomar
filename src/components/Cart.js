import { useContext } from 'react';                     //TRABAJANDO EN ACTIVIDAD 5
import { CartContext } from '../context/CartContext'; 
import CartItem from './CartItem' 

const Cart = () => {

    const {cartList, deleteItem } = useContext(CartContext)

    return (
        <div>
        {cartList.map(item => <CartItem key={item.product.id} item={item} handleDelete={deleteItem} />)}
        </div>
    )
}

export default Cart