import {Link} from "react-router-dom"

const Item = ({ id, name, price, pictureUrl }) => {

    return (
        <>
        <div className="container-fluid justify-content-center flex">
                <div className="card card-compact w-96 bg-base-100 shadow-xl flex-row">
                    <figure><img src={pictureUrl} alt='imagen de producto' /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">{name}</h2>
                        <p>Descripcion del producto</p>
                        <p>Valor: ${price}</p>
                        <div className="card-actions justify-end">
                        <Link to={`/producto/item/${id}`}><button className="btn btn-outline btn-accent">Comprar</button></Link>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Item