const ItemCount = ({counter, setCounter, onAdd, stock}) => {

    const clickSuma = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const clickResta = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
        <label className='flex align-items-center'>
        <button onClick={clickResta} className='btn m-2 btn-square btn-outline'>-</button>{counter}<button onClick={clickSuma} className='btn m-2 btn-square btn-outline'>+</button>
        </label>
        <button onClick={onAdd} className="btn btn-outline btn-accent ml-3">Agregar al Carrito</button>
        </>
    )
}
export default ItemCount