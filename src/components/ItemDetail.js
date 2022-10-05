import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {

    function onAdd(cantidad) {
        console.log(cantidad);
    }

        //console.log(item);

    return (
        <>
        <div className="container-fluid justify-content-center flex">
                <div className="card card-compact w-96 bg-base-100 shadow-xl flex-row">
                    <figure><img src={item.pictureUrl} alt='imagen de producto' /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">{item.name}</h2>
                        <p>Valor: ${item.price}</p>
                        <Link to={`/producto/category/${item.category}`}><button className="btn btn-ghost">VER POR CATEGORIA</button></Link>
                        <div className="card-actions justify-end">
                        <Link to={`/producto/item/${item.id}`}><button className="btn btn-outline btn-accent">Comprar</button></Link>
                        </div>
                    </div>
                </div>
        </div>

        <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
        
        </>
    )
}
export default ItemDetail