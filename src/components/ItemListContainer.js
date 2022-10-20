import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import Loader from "./Loader"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

function ItemListContainer({greeting}) {

    const styles = {
        backgroundColor: '#D926A9',
        color: 'white'
    }

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        const db = getFirestore()
        const itemsRef = collection(db, 'items')
        getDocs(itemsRef).then( snapshot => {
            const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
            console.table(data)
            setItems(data)
            setLoading(false)
        })
    }

    return (
        <>
            <p style={styles}>{greeting}</p>
            { loading ? <Loader/> : <ItemList items={items}/>}
        </>
    )
}
export default ItemListContainer