import { useContext } from 'react';                     //TRABAJANDO EN ACTIVIDAD 5
import { CartContext } from '../context/CartContext'; 
import {Link} from "react-router-dom"
import CartItem from './CartItem'
import CartTotal from "./CartTotal"

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
            <CartTotal/>
            <button className="btn btn-outline btn-error m-2" onClick={() => removeList()}>Eliminar todo</button>

            <div className='m-3'>
            <Link to='/order'><button className='btn btn-outline btn-accent'>FINALIZAR ORDEN DE COMPRA</button></Link>
            </div>

            </div>
        }
        </>
    )
}

export default Cart