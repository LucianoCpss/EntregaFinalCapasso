import { useContext } from 'react'
import CartIcon from './Assets/CartIcon.svg'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    const { totalQuantity } = useContext(CartContext)
    return(
        <Link to='/cart' className='d-flex justify-content-center align-items-center pe-4'>
            <img src={CartIcon} alt="Cart Icon" className='CartIcon' /><p className='position-absolute text-dark pt-1'>{totalQuantity}</p>
        </Link>
    )
}

export default CartWidget