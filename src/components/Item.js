const Item = ({ name, price, pictureUrl }) => {
    return (
        <>
        <p>{name}</p> 
        <p>Valor: ${price}</p>
        <img src={pictureUrl} alt='imagen de producto' />
        </>
    )
}
export default Item