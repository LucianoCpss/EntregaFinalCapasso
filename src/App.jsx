import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <NavBar/>
      <ItemListContainer greeting="Componente ItemListContainer"/>
    </div>
  )
}

export default App
