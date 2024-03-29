import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart.jsx'
import Error from './Components/Error/Error.jsx'
import { Checkout } from './Components/Checkout/checkout.jsx'

import { CartProvider } from './context/CartContext'
function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header/>
          
          <Routes>
            <Route path="/" element= {<ItemListContainer greeting={"Nuestros Productos"}/>}/>
            <Route path="/category/:id" element= {<ItemListContainer/>}/>
            <Route path="/item/:id" element= {<ItemDetailContainer/>}/>
            <Route path="/cart" element= {<Cart/>}/>
            <Route path="/checkout" element= {<Checkout/>}/>
            <Route path="*" element= {<Error/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
