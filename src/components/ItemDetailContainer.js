import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {getProduct} from "../data/asyncMock"
import useParams from "react-router-dom"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProduct(categoryId).then(res => {
            setItem(res)
        })
            .catch(err => {
                console.log('err: ' + err);
            })
    }, [categoryId])

    return (
        <>
        <div>ItemDetailContainer</div>
        <ItemDetail items={item}/>
        </>
    )
}
export default ItemDetailContainer