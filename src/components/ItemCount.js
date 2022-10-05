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
        <div>
        <button onClick={clickResta} className='btn m-4 btn-square btn-outline'>-</button>{counter}<button onClick={clickSuma} className='btn m-4 btn-square btn-outline'>+</button>
            <button onClick={()=> props.onAdd(counter)} className="btn">Agregar al Carrito</button>
        </div>
        </>
    )
}
export default ItemCount