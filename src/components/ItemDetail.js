
const ItemDetail = ({name, price, pictureUrl}) => {
    return (
        <>
        <div>{pictureUrl}</div>
        <div>{name}, price: {price}</div>
        </>
    )
}
export default ItemDetail