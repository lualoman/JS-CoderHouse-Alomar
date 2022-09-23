import ItemCount from "./ItemCount";

function ItemListContainer() {

    let greeting = 'Hola Coder'

    const styles = {
        backgroundColor: '#6419E6',
        color: 'white'
    }

    function onAdd(cantidad) {
        console.log(cantidad);
    }

    return (
        <>
            <p style={styles}>{greeting}!</p>
            <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer