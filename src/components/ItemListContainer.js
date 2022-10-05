
import {useState, useEffect} from "react"
//import ItemCount from "./ItemCount"   //EN LINEA 42 ESTABA:   <ItemCount stock={5} initial={0} onAdd={onAdd}/>
import ItemList from "./ItemList"
import {getProducts, getProductsByCategory} from "../data/asyncMock"
import {useParams} from "react-router-dom"

function ItemListContainer({greeting}) {

    const styles = {
        backgroundColor: '#D926A9',
        color: 'white'
    }

    /*function onAdd(cantidad) {
        console.log(cantidad);
    }*/

    const [items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        if(categoryId) {
            getProductsByCategory(categoryId).then((res) => {
                setItems(res)
            })
        }else{
            getProducts().then(res => {
                setItems(res)
            }).catch(err => {
                    console.log('err: ' + err);
                })
            }
        }, [categoryId])

    return (
        <>
            <p style={styles}>{greeting}</p>
            <ItemList items={items}/>
        </>
    )
}
export default ItemListContainer