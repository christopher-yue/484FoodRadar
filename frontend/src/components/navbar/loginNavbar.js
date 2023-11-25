import { Link } from "react-router-dom";
import "./loginNavbar.css";

export const LoginNavbar = () => {
  return (
    <div className="Navbar">
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
