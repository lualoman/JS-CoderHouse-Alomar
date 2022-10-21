import { addDoc, collection, getFirestore } from 'firebase/firestore'
//import userOrder from './userOrder'
import { useState, useContext } from 'react'
//import { CartContext } from '../context/CartContext'

const Order = () => {

    //const {items} = useContext(CartContext)
    const [user, setUser] = useState({})
    const items = ['Parlante', 'McBook']// ejemplo, los verdaderos vienen de useContext()

    const sendOrder = () => {
        //const user = { name: 'Lucia', phone: '234212345', email: 'lu@gmail.com' }
        const order = {
            buyer: user,
            items: items,
            total: items.length
        }
        console.log(order)

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order).then(({ id }) => {
            console.log(id)
            alert('Tu orden con id: ' + id + ' ha finalizado satisfactoriamente') //CAMBIAR POR ALERTA DAISYUI
        })
    }

    return (
        <>
            <h1>Compra Final</h1>
            {items.map((item, i) => <li key={i}>{item}</li>)}
            <button className="btn" onClick={sendOrder}>Finalizar</button>
        </>
    )

}

export default Order
