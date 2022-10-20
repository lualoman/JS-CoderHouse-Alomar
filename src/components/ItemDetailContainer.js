import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const db = getFirestore()

            const itemRef = doc(db, "items", id);
            
            const response = await getDoc(itemRef);
            const newItem = {
                id: response.id,
                ...response.data(),
            };
            setTimeout(() => {
                setItem(newItem);
            }, 100)
        };
        getProduct();
    }, [id]);

    return (
        <>
            <div>ItemDetailContainer</div>
            <ItemDetail item={item} />
        </>
    )
}
export default ItemDetailContainer