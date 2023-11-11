import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () =>{
    return(
        <div className="d-flex justify-content-evenly bg-dark w-100">
            <a className="nav-link active" aria-current="page" href="/"><button className="bg-transparent">Remeras</button></a>
            <a className="nav-link active" aria-current="page" href="/"><button className="bg-transparent">Pantalones</button></a>
            <a className="nav-link active" aria-current="page" href="/"><button className="bg-transparent">Zapatillas</button></a>
        </div>
    )
}

export default NavBar