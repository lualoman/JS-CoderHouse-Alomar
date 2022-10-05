import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import {getProduct} from "../data/asyncMock"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {

    function onAdd(cantidad) {
        console.log(cantidad);
    }

    const [item, setItem] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getProduct(id).then(res => {
            setItem(res)
        })
            .catch(err => {
                console.log('err: ' + err);
            })
    }, [id])

    return (
        <>
        <div>ItemDetailContainer</div>
        <ItemDetail item={item}/>
        <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        </>
    )
}
export default ItemDetailContainer