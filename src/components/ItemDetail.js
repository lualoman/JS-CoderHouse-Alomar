import { useState } from 'react';
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
    const [add, setAdd] = useState([])

    function onAdd(cantidad) {
        console.log('Hiciste onAdd ' + cantidad);
        setAdd(true)
    }

    return (
        <>
            <div className="container-fluid justify-content-center flex">
                <div className="card card-compact w-96 bg-base-100 shadow-xl flex-row">
                    <figure><img src={item.pictureUrl} alt='imagen de producto' /></figure>
                    <div className="card-body text-white align-items-center">
                        <h2 className="card-title">{item.name}</h2>
                        <p>Valor: ${item.price}</p>
                        {add ? <Link to={`/cart`}>Ir a Cart</Link> : <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>}
                        <Link to={`/producto/category/${item.category}`}><button className="btn">VER POR CATEGORIA</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail