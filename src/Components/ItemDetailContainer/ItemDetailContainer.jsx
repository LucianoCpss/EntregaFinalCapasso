import { useEffect, useState } from "react"
import { getProductById } from "../AsyncMock"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
    useEffect(()=>{
        getProductById(itemId).then(response=>{
            setProduct(response)
        }).catch(err=>{
            console.error(err)
        })
    }, [itemId])

    return(
        <div className="d-flex justify-content-center">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer