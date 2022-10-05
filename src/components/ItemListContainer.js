
import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import {getProducts, getProductsByCategory} from "../data/asyncMock"
import {useParams} from "react-router-dom"

function ItemListContainer({greeting}) {

    const styles = {
        backgroundColor: '#D926A9',
        color: 'white'
    }

    const [items, setItems] = useState([])

    const { id } = useParams()

    useEffect(() => {

        if(id) {
            getProductsByCategory(id).then((res) => {
                setItems(res)
            })
        }else{
            getProducts().then(res => {
                setItems(res)
            }).catch(err => {
                    console.log('err: ' + err);
                })
            }
        }, [id])

    return (
        <>
            <p style={styles}>{greeting}</p>
            <ItemList items={items}/>
        </>
    )
}
export default ItemListContainer