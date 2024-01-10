import { NavLink } from "react-router-dom";

const Error = ()=>{
    return(
        <div>
            <h2 className="m-4">PRODUCTO INEXISTENTE</h2>
            <NavLink to= {"/"} >Regresar al inicio</NavLink>
        </div>
    )
}

export default Error;