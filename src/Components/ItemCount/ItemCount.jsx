import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, onAdd}) =>{
    const [quantity, setQuantity] = useState(1)
    const increment = () =>{if(quantity<stock){setQuantity(quantity+1)}}
    const decrement = () =>{if(quantity>1){setQuantity(quantity-1)}}

    return( 
        <div className="Counter">
            <div className="Controls">
                <button onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount