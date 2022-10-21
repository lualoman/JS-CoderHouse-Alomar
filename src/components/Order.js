import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import UserOrder from './UserOrder'
import AlertId from './AlertId'

const Order = () => {

    const { cartList, removeList } = useContext(CartContext)
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState()

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
            setOrderId(id)
        })
        removeList()
    }

    return (
        <>
            <h1 className='m-2'><strong>FINALIZANDO COMPRA</strong></h1>
            {
                !orderId ?
                <>
                <div className='m-3'>
                    <h3>Formulario:</h3>
                    <UserOrder setUser={setUser} />
                </div>
                <div className='m-3'>
                    <h3>Productos:</h3>
                    {cartList.map((item, i) => <li key={i}>{item.product.name}</li>)}
                </div>
                <button className="btn btn-outline btn-accent m-3" onClick={sendOrder}>Finalizar</button>
                </>
                :
                <AlertId/>
            }
        </>
    )
}

export default Order
