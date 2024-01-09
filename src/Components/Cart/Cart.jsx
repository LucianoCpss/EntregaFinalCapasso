import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem/CartItem'



const Cart = () =>{
    const { cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to='/'>Seguir Comprando</Link>
            </div>
        )
    }

    return(
        <div>
            <div className='d-flex w-75 flex-wrap border border-black rounded p-3 m-auto mt-3 bg-light-subtle'>
                { cart.map(p => <CartItem {...p} key={p.id}/> ) }
            </div>
            <p>Total: ${totalPrice}</p>
            <p>Productos Totales: {totalQuantity}</p>
            <button onClick={()=> clearCart()}>Limpiar carrito</button>
            <Link to='/checkout'> <button>Checkout</button></Link>
        </div>
    )
}

export default Cart
