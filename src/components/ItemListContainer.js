
import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import {getProducts, getProductsByCategory} from "../data/asyncMock"
import {useParams} from "react-router-dom"
import Loader from "./Loader"

function ItemListContainer({greeting}) {

    const styles = {
        backgroundColor: '#D926A9',
        color: 'white'
    }

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        if(id) {
            getProductsByCategory(id).then((res) => {
                setItems(res)
            }).catch(err => {
                console.log('err: ' + err);
            })
        .finally(() => setLoading(false))
        }else{
            getProducts().then(res => {
                setItems(res)
            }).catch(err => {
                    console.log('err: ' + err);
                })
            .finally(() => setLoading(false))
            }
        }, [id])

    return (
        <>
            <p style={styles}>{greeting}</p>
            { loading ? <Loader/> : <ItemList items={items}/>}
        </>
    )
}
export default ItemListContainer