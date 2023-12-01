import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { getProducts, getProductByCategory } from "../AsyncMock"
import ItemList from "./ItemList/ItemList"

import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response=>{
                setProducts(response)
            })
            .catch(err => {
                console.error(err)
            })
    }, [categoryId])
    
    return(
        <div>
            <h1 className="fs-2 mt-2">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer