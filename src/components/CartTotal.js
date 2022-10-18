import { useContext } from 'react';                     //TRABAJANDO EN ACTIVIDAD 5
import { CartContext } from '../context/CartContext'; 

const CartTotal = () => {

    const {totalProductsPrice} = useContext(CartContext)

    return (
        <div className='container flex justify-content-center'>
        <tr className='ml-25'>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>TOTAL: {totalProductsPrice()}</th>
        </tr>
    </div>
    )
}

export default CartTotal