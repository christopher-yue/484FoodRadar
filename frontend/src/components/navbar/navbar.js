import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <ul className="navmenu">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/restaurantsearch">Find Restaurants</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
