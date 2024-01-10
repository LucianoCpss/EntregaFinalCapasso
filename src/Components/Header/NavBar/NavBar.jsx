import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () =>{
    return(
        <div className="d-flex justify-content-evenly bg-dark w-100">
            <NavLink to= {"/category/Remeras"} className="categoryButton">Remeras</NavLink>
            <NavLink to= {"/category/Pantalones"} className="categoryButton">Pantalones</NavLink>
            <NavLink to= {"/category/Zapatillas"} className="categoryButton">Zapatillas</NavLink>
        </div>
    )
}

export default NavBar