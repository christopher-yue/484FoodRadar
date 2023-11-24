import { Link } from "react-router-dom";
import "./navbar.css";

export const LoginNavbar = () => {
  return (
    <div className="navbar">
      <header>
        <ul className="navmenu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
