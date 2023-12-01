import ItemCount from "../../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({id, title, price, img, stock, category, description}) =>{
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
                <footer>
                    <ItemCount stock={stock} onAdd={(quantity)=>console.log("Cantidad agregada")} />
                </footer>
            </info>
        </article>
    )
}

export default ItemDetail