import { Link } from "react-router-dom";

function Navbar() {

    return(
        <>
        
        <div className="navbar">
            <Link to="/"> Movie App </Link>
        </div>
        
        <div className="navbar-brands">
            <Link to="/" className="nav-link"> Home </Link>
            <Link to="/favourites" className="nav-link"> Favourite </Link>
        </div>

        </>
    )
}

export default Navbar