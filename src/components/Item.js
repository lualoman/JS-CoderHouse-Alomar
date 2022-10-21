import {Link} from "react-router-dom"

const Item = ({ id, name, price, pictureUrl, category }) => {

    return (
        <>
            <div className="justify-content-center flex d-inline-flex col-sm-3 p-1">
                <div className="container-fluid card card-compact w-96 bg-base-100 shadow-xl flex-row">
                    <figure><img src={pictureUrl} alt='imagen de producto' /></figure>
                    <div className="card-body text-white align-items-center">
                        <h2 className="card-title">{name}</h2>
                        <p>Valor: ${price}</p>
                        <Link to={`/producto/category/${category}`}><button className="btn btn-ghost">VER POR CATEGORIA</button></Link>
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