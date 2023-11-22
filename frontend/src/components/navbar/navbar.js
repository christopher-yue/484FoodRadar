import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <header>
      <ul class="navmenu">
        <li>
          <Link to="/hop">Home</Link>
        </li>
        <li>
          <Link to="/searchrestaurant">Find Restaurants</Link>
        </li>
        <li>
          <Link to="/managereservation">Reservation History</Link>
        </li>
        <li>
          <Link to="/profile">Profile Card</Link>
        </li>
      </ul>
    </header>
  );
};
