import { useState } from 'react';
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {

    const { addToCart } = useContext( CartContext )
    const [counter, setCounter] = useState(1)
    const [add, setAdd] = useState(false)

    function onAdd() {
        console.log('Hiciste onAdd, cantidad:' + counter);
        addToCart(item, counter)
        setAdd(true)
    }

    return (
        <>
            <div className="container-fluid justify-content-center flex m-4">
                <div className="card card-compact w-96 bg-base-100 shadow-xl flex-row">
                    <figure><img src={item.pictureUrl} alt='imagen de producto' /></figure>
                    <div className="card-body text-white align-items-center">
                        <h2 className="card-title">{item.name}</h2>
                        <p>Valor: ${item.price}</p>
                        <p>{item.description}</p>

                        {add ? <Link className='m-4' to={`/cart`}>¡Agregaste un producto! IR A CART</Link> : <ItemCount stock={item.stock} counter={counter} setCounter={setCounter} initial={0} onAdd={onAdd}/>}

                        <Link to={`/producto/category/${item.category}`}>Ver por CATEGORIA</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail