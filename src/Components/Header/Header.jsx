import CartWidget from "./CartWidget/CartWidget.jsx"
import NavBar from "./NavBar/NavBar.jsx"
import WolfLogo from "./Assets/WolfLogo.svg"
import { NavLink } from "react-router-dom";

const Header = ()=> {
    return(
        <div className="bg-black d-flex justify-content-between align-items-center w-100 sticky-top flex-wrap">
            <div className="d-flex align-items-center">
                <NavLink to= {"/"} className="nav-link active m-2 d-flex align-items-center"><img className="bg-light border border-3 border-black rounded-circle" src={WolfLogo} alt="Wolf Logo" /> <h2 className="fw-bold text-light ms-3">Wolf Kingdom</h2></NavLink>
            </div>
            <div>
                <CartWidget/> 
            </div>
            <div className="w-100">
                <NavBar/>
            </div>
        </div>
    )
}

export default Header