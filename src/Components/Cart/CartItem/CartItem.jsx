import React from "react"
import "./CartItem.css"
import { useContext } from 'react'
import { CartContext } from "../../../context/CartContext"

const CartItem = ({id,title, quantity, price, img}) => {
    const { removeItem} = useContext(CartContext)
    return(
        <div className="CartItem">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>Cantidad: {quantity}</p>
            <p>Precio Unitario: ${price}</p>
            <p>Subtotal:${price*quantity}</p>
            <button onClick={()=> removeItem(id, price, quantity)}>X</button>
        </div>
    )
}

export default CartItem;
