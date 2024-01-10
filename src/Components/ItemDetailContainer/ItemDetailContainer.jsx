// import { useEffect, useState } from "react";
// import ItemDetail from "./ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState(null);
//   const [productNotFound, setProductNotFound] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const queryDb = getFirestore();
//         const queryDoc = doc(queryDb, 'products', id);
//         const res = await getDoc(queryDoc);
        
//         if (res.exists()) {
//           setProduct({ id: res.id, ...res.data() });
//         } else {
//           setProductNotFound(true);
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (productNotFound) {
//     return <h1>Producto no encontrado</h1>;
//   }

//   return (
//     <div className="d-flex justify-content-center">
//       {product && <ItemDetail {...product} />}
//     </div>
//   );
// };

// export default ItemDetailContainer;

import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([])
    const { id } = useParams()
    useEffect(()=>{
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'products', id);
        getDoc(queryDoc).then((res)=>
        setProduct({id: res.id, ...res.data()}))
    }, [id])

    return(
        <div className="d-flex justify-content-center">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer