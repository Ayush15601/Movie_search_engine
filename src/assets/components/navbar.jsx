import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <>
      <header className="n_header">
        <div>
          <Link to="/"> Home page </Link>
        </div>

        <div>
          <Link to="/"> Home </Link>
          <Link to="/favourite"> Favourites </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
