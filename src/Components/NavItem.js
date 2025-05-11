import { useState } from "react";
import { Link } from "react-router";

const NavItem = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="nav">
      <ul className="nav-item">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <div className="btn-container">
        <button
          className="btn-login"
          onClick={() => {
            btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default NavItem;
