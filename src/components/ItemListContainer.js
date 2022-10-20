import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import Loader from "./Loader"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"

function ItemListContainer({greeting}) {

    const styles = {
        backgroundColor: '#D926A9',
        color: 'white'
    }

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const getItems = () => {
            const db = getFirestore()
    
            const collectionRef = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId)) 
            : 
            collection(db,'items')
    
            getDocs(collectionRef).then( snapshot => {
                const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
                console.table(data)
                setItems(data)
                setLoading(false)
            })
        }
        getItems()
    }, [categoryId])

    return (
        <>
            <p style={styles}>{greeting}</p>
            { loading ? <Loader/> : <ItemList items={items}/>}
        </>
    )
}
export default ItemListContainer