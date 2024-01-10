import { useContext, useState } from "react"
import ItemCount from "./ItemCount/ItemCount"
import "./ItemDetail.css"
import {Link} from "react-router-dom"
import { CartContext } from "../../../context/CartContext"

const ItemDetail = ({id, title, price, img, stock, category, description}) =>{
    const [quantityAdded,setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price, img
        }

        addItem(item, quantity)
    }

    return(
        <article className="detailCard">
            <header className="w-100">
                <h3>{title}</h3>
            </header>
            <picture>
                <img src={img} alt={title} className="detailCardImg"/>
            </picture>
            <info className ="detailInfo">
                <section className="w-100">
                    <p><b>Categoria:</b> {category}</p>
                    <p><b>Descripción:</b> {description}</p>
                    <p><b className="fs-3">${price}</b></p>
                    <p>Cantidad disponible: {stock}</p>
                </section>
                <footer className="d-flex justify-content-center align-items-center">
                    {
                        quantityAdded > 0 ?(
                            <div className="d-flex w-75 flex-wrap justify-content-center">
                                <Link to="/cart" className="option">Terminar Compra</Link>
                                <Link to="/" className="option">Seguir Comprando</Link>
                            </div>                            
                        ):(
                            <ItemCount stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </footer>
            </info>
        </article>
    )
}

export default ItemDetail