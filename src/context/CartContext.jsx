import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([])
    const[totalPrice, setTotalPrice] = useState(0)
    const[totalQuantity, setTotalQuantity] = useState(0)
    
    console.log(cart)

    const addItem = (item,quantity) =>{

        if(!isInCart(item.id)){
            console.log(item)
            setCart(prev => [...prev, {...item, quantity}])
        }
        else{ 
            cart.map(p => (p.id==item.id) ? quantity+=p.quantity:null)
            removeItem(item.id)
            setCart(prev => [...prev, {...item, quantity}])
        }
        setTotalPrice(totalPrice+item.price*quantity)
        setTotalQuantity(totalQuantity+quantity)
        console.log(totalPrice)
    }

    const removeItem = (itemId, itemPrice, itemQuantity) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setTotalPrice(totalPrice-itemPrice*itemQuantity)
        setTotalQuantity(totalQuantity-itemQuantity)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
        setTotalPrice(0)
        setTotalQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }


    return(
        <CartContext.Provider value={{cart, totalPrice, totalQuantity, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}