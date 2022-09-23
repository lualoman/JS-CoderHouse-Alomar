import { useState } from 'react';

const ItemCount = (props) => {
    console.log(props);

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
        <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
                <span className="label-text-dark mx-auto">Cantidad</span>
            </label>
            <div className='m-2'><button onClick={clickResta} className='btn m-4 btn-square btn-outline'>-</button>{counter}<button onClick={clickSuma} className='btn m-4 btn-square btn-outline'>+</button></div>

            <button onClick={clickSuma} className="btn m-3">Agregar al Carrito</button>
        </div>
        </>
    )
}
export default ItemCount