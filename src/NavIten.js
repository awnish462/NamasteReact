import { useState } from "react";

const NavItem = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="nav">
      <ul className="nav-item">
        <li>Home</li>
        <li>Orders</li>
        <li>Cart</li>
        <li>Profile</li>
      </ul>
      <div className="btn-container">
        <button className="btn-login" onClick={() => {
          btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
        }}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default NavItem;
