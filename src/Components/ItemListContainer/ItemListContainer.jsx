import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, collection, query, where, doc, getDoc, getDocs } from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'products');

        if(id){
            const queryFilter = query(queryCollection, where('category', '==', id));
            getDocs(queryFilter).then((res)=>
            setProducts(res.docs.map((p)=>({id:p.id, ...p.data() })))
            )
        } else{
            getDocs(queryCollection).then((res)=>
            setProducts(res.docs.map((p)=>({id:p.id, ...p.data() }))))
        }
    }, [id])
    
    return(
        <div>
            <h1 className="fs-2 mt-2">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer