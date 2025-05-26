import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import UserContext from "../../utils/usercontext";

const NavItem = () => {
  const [btnName, setBtnName] = useState("Login");
  let isOnline = useOnlineStatus();
  const { userName } = useContext(UserContext);
  return (
    <div className="flex px-2">
      <ul className="flex items-center ">
        <li className=" px-2">{isOnline ? "✅" : "🔴"}</li>
        <li className=" px-2">
          <Link to="/">Home</Link>
        </li>
        <li className=" px-2">
          <Link to="/about">About</Link>
        </li>
        <li className=" px-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className=" px-2">
          <Link to="/profile">Profile</Link>
        </li>
        <li className=" px-2">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className=" px-2">{userName}</li>
      </ul>
      <div className="flex items-center">
        <button
          className="border-2 rounded-full bg-green-400 border-none px-3 py-1"
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
