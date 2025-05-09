import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  return (
    <div className="logo">
      <img
        className="logo-img"
        src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"
      />
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input type="search" placeholder="Search"></input>
    </div>
  );
};

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
const Heading = () => {
  return (
    <div className="heading">
      <Logo />
      <NavItem />
    </div>
  );
};

const ResCard = (props) => {
  return (
    <div className="res-card">
      <div className="res-card-img-container">
        <img
          className="res-card-img"
          src={props.resCardImg}
        />
        <div className="res-card-heading">
          <h2>{props.resCardHeading}</h2>
        </div>
        <div className="res-card-rating">
          <span>{props.resCardRating}</span>
        </div>
        <div className="res-card-key">
          <p> {props.resCardKey}</p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <ResCard
          resCardHeading="Milanee's Kitchen"
          resCardImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/1da56fba-dd6e-4122-9c23-1a05c5bc9123_1067752.jpg"
          resCardRating="⭐ 4.3 • 50-55 mins"
          resCardKey="Biryani, North Indian, Pastas, Punjabi, Desserts Bistupur"
        />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};
const AppContainer = () => {
  return (
    <div>
      <Heading />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppContainer />);
