
import {useState, useEffect} from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {getProducts} from "../data/asyncMock"

function ItemListContainer({greeting}) {

    const styles = {
        backgroundColor: '#6419E6',
        color: 'white'
    }

    function onAdd(cantidad) {
        console.log(cantidad);
    }

    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts().then(res => {
            setItems(res)
        })
            .catch(err => {
                console.log('err: ' + err);
            })
    }, [])

    return (
        <>
            <p style={styles}>{greeting}</p>
            <ItemList items={items}/>
            <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer