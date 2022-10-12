import Item from "./Item"

const ItemList = ({items}) => {

    //console.log(items);

    return (
        <div>
            <h1>Nuestros Productos</h1>
            {items.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}
export default ItemList