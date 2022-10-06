import { useState } from 'react';

const ItemCount = (props) => {

    const [counter, setCounter] = useState(props.initial)

    const clickSuma = () => {
        if (counter < props.stock) {
            setCounter(counter + 1)
        }
    }

    const clickResta = () => {
        if (counter > props.initial) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
        <label className='flex align-items-center'>
        <button onClick={clickResta} className='btn m-2 btn-square btn-outline'>-</button>{counter}<button onClick={clickSuma} className='btn m-2 btn-square btn-outline'>+</button>
        </label>
        
        <button onClick={()=> props.onAdd(counter)} className="btn btn-outline btn-accent ml-3">Agregar al Carrito</button>
        </>
    )
}
export default ItemCount