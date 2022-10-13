const CartItem = ({ item, handleDelete }) => {

    return (
        <>
        <div className="container flex justify-content-center">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <td>{item.product.name}</td>
                            <td>{item.counter} unidades</td>
                            <td>${item.product.price}</td>
                            <td>TOTAL: </td>
                            <th><button className="btn btn-square btn-sm btn-outline btn-error" onClick={() => handleDelete(item.product.id)}>X</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default CartItem