const ItemDetail = ({ name, price, pictureUrl }) => {
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl container-fluid">
                <figure><img src={pictureUrl} alt='imagen de producto' /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>Descripcion del producto</p>
                    <p>Valor: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-accent">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail