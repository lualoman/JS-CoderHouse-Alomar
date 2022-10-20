import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import Loader from "./Loader"
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"

function ItemListContainer({greeting}) {

    const styles = {
        backgroundColor: '#D926A9',
        color: 'white'
    }

    const [items, setItems] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const { id } = useParams()

    useEffect(() => {
        getItems()
    }, [])


    {const collectionRef = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId)) 
        : 
        collection(db,'items')}

    const collectionRef = id ? query(collection(db,'items'), where('category', '==', id))

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

    const getItemsCategory = () => {
        const db = getFirestore()
        const q = query(collection(db, 'items'),
        where('category', '===', categoryId),
        limit(1)
        )
        getDocs(q).then( (snapshot) => {
            if(snapshot.size === 0){
                console.log('No results');
            }
            setCategory( snapshot.docs.map( (e) => ({id: e.id, ...e.data()})) )
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