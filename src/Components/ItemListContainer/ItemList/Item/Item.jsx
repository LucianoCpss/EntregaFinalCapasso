import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, title, price, img, stock}) =>{
    return(
        <article className="card">
            <header>
                <h3>{title}</h3>
            </header>
            <picture>
                <img src={img} alt={title} className="CardImg"/>
            </picture>
            <section>
                <p>Precio: ${price}</p>
                <p>Cantidad disponible: {stock}</p>
            </section>
            <footer>
                <Link to= {`/item/${id}`} className="detailButton">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item