import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {getProduct} from "../data/asyncMock"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        getProduct().then(res => {
            setItem(res)
        })
            .catch(err => {
                console.log('err: ' + err);
            })
    }, [])

    return (
        <>
        <div>ItemDetailContainer</div>
        <ItemDetail items={item}/>
        </>
    )
}
export default ItemDetailContainer