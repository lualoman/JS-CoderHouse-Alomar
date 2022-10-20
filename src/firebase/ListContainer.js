import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ListContainer = () => {

    const [items, setItems] = useState([])

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
        })
    }

    return (
    <div>{ items.map( i => <li key={i.id}>{i.name}</li> ) }</div>
    )
}

export default ListContainer