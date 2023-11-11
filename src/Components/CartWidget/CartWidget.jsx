import CartIcon from './Assets/CartIcon.svg'

const CartWidget = () =>{
    return(
        <a href="/" className='d-flex justify-content-center align-items-center pe-4'><img src={CartIcon} alt="Cart Icon" className='CartIcon' /><p className='text-dark position-absolute mt-1'>0</p></a>
    )
}

export default CartWidget