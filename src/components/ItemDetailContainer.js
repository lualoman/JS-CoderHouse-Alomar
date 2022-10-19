import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {getProduct} from "../data/asyncMock"
import {useParams} from "react-router-dom"
//import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        /*const db = getFirestore()

        const itemRef = doc(db, 'items', '3MMo6CCE3amGCdqH2Ara')
        getDoc(itemRef).then( (snapshot) => {
            if(snapshot.exists()){
                setItem({ id: snapshot.id, ...snapshot.data() })
            }
        })
    }, [])*/
        
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