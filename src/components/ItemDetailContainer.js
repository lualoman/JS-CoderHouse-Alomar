import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {getProduct} from "../data/asyncMock"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {

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
        </>
    )
}
export default ItemDetailContainer