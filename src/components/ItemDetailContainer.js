import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "./ItemDetail"
//import {getProduct} from "../data/asyncMock"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProducto = async () => {
            const db = getFirestore()

            const itemRef = doc(db, "productos", id);
            const response = await getDoc(itemRef);
            const newItem = {
                id: response.id,
                ...response.data(),
            };
            setTimeout(() => {
                setItem(newItem);
            }, 2000)
        };
        getProducto();
    }, [id]);

        // OPCION A REEMPLAZAR CON LLAMADO A FIRESTORE
        /*
        useEffect(() => {
        getProduct(id).then(res => {
            setItem(res)
        })
            .catch(err => {
                console.log('err: ' + err);
            })
    }, [id])*/

    return (
        <>
            <div>ItemDetailContainer</div>
            <ItemDetail item={item} />
        </>
    )
}
export default ItemDetailContainer