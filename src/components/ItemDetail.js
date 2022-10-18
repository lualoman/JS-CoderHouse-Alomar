import { useState } from 'react';
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {

    const { addToCart, isInCart, deleteItem } = useContext( CartContext )
    const [counter, setCounter] = useState(1)

    function onAdd() {
        console.log('Hiciste onAdd, cantidad:' + counter);
        addToCart(item, counter)
    }

    if (item.stock === 0) return (
        <>
        <p>No hay stock disponible</p>
        <button className="btn btn-outline btn-accent" to="/" >Volver a Inicio</button>
        </>
    )

    return (
        <>
            <div className="container-fluid justify-content-center flex m-4">
                <div className="card card-compact w-96 bg-base-100 shadow-xl flex-row">
                    <figure><img src={item.pictureUrl} alt='imagen de producto' /></figure>
                    <div className="card-body text-white align-items-center">
                        <h2 className="card-title">{item.name}</h2>
                        <p>Valor: ${item.price}</p>
                        <p>{item.description}</p>

                        {isInCart(item.id) ?
                            <div className='m-3'>
                                <p><strog>AGREGADO A TU CARRITO</strog></p>
                                <button className="btn btn-xs btn-outline btn-accent" onClick={() => deleteItem(item.id)}>Eliminar de mi Carrito</button>
                            </div>
                        :
                        <p>AGREGAR</p>
                        }

                        {isInCart(item.id) ? <Link className='btn btn-xs m-2' to={`/cart`}>IR A CART</Link> : <ItemCount stock={item.stock} counter={counter} setCounter={setCounter} initial={0} onAdd={onAdd}/>}

                        <Link to={`/producto/category/${item.category}`}>Ver por CATEGORIA</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail
