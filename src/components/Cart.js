import { useContext } from 'react';                     //TRABAJANDO EN ACTIVIDAD 5
import { CartContext } from '../context/CartContext'; 
import CartItem from './CartItem'
import {Link} from "react-router-dom"

const Cart = () => {

    const {cartList, deleteItem, removeList } = useContext(CartContext)

    return (
        <>
        {cartList.length === 0 ?
            <div>
            <p>Tu carrito esta vacio</p>
            <Link to='/'><button className="btn btn-outline btn-accent">Volver a Inicio</button></Link>
            </div>
            :
            <div>
            {cartList.map(item => <CartItem key={item.product.id} item={item} handleDelete={deleteItem} />)}
            <button className="btn btn-outline btn-error" onClick={() => removeList()}>Eliminar todo</button>
            </div>
        }
        </>
    )
}

export default Cart