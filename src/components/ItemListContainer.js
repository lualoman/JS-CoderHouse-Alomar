import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import Loader from "./Loader"
//import {getProducts, getProductsByCategory} from "../data/asyncMock"
//import {useParams} from "react-router-dom"
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


    /*const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        if(id) {
            getProductsByCategory(id).then((res) => {
                setItems(res)
            }).catch(err => {
                console.log('err: ' + err);
            })
        .finally(() => setLoading(false))
        }else{
            getProducts().then(res => {
                setItems(res)
            }).catch(err => {
                    console.log('err: ' + err);
                })
            .finally(() => setLoading(false))
            }
        }, [id])*/

    return (
        <>
            <p style={styles}>{greeting}</p>
            { loading ? <Loader/> : <ItemList items={items}/>}
        </>
    )
}
export default ItemListContainer