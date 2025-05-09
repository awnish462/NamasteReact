import Search from "./Search";
const NavItem = () => {
    return (
      <div className="nav">
        <Search />
        <ul className="nav-item">
          <li>Home</li>
          <li>Orders</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </div>
    );
  };

  export default NavItem;