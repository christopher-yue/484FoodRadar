import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <ul class="navmenu">
          <li>
            <Link to="/hop">Home</Link>
          </li>
          <li>
            <Link to="/restaurantsearch">Find Restaurants</Link>
          </li>
          <li>
            <Link to="/managereservation">Reservation History</Link>
          </li>
          <li>
            <Link to="/profile">Profile Card</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
