import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import UserOrder from './UserOrder'
import alertId from './AlertId'

const Order = () => {

    const {cartList} = useContext(CartContext)
    const [user, setUser] = useState({})

    const sendOrder = () => {
        const order = {
            buyer: user,
            items: cartList,
            total: cartList.length
        }
        console.log(order)

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order).then(({ id }) => {
            console.log(id)
            alertId(id)   //aviso al cliente sobre su compra exitosa y muestro ID
        })
    }

    return (
        <>
            <h1><strong>FINALIZAR COMPRA</strong></h1>
            <UserOrder setUser={setUser} />
            {cartList.map((item, i) => <li key={i}>{item}</li>)}
            <button className="btn btn-outline btn-accent m-3" onClick={sendOrder}>Finalizar</button>
        </>
    )

}

export default Order
