import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, /*query, where*/ } from 'firebase/firestore'

const ListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
        //getItemsPrice(15)
    }, [])

    const getItems = () => {
        const db = getFirestore()
        const itemsRef = collection(db, 'items')
        getDocs(itemsRef).then( snapshot => {
            const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
            console.table(data)
            setItems(data)
        })
    }

    /*const getItemsPrice = (price) => {
        const db = getFirestore()
        const itemsRef = collection(db, 'items')
        const   q = query(itemsRef, where('price', '>', price))
        getDocs(q).then( snapshot => {
            const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
            console.table(data)
            setItems(data)
        })
    }*/

    return (
    <div>{ items.map( i => <li key={i.id}>{i.name}</li> ) }</div>
    )
}

export default ListContainer