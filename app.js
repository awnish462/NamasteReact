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

const resList = [
  {
    resCardImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/1da56fba-dd6e-4122-9c23-1a05c5bc9123_1067752.jpg",
    resCardHeading: "Pizza Palace",
    resCardRating: "⭐ 4.3 • 50-55 mins",
    resCardKey: "Italian, Pizza",
  },
  {
    resCardImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/1da56fba-dd6e-4122-9c23-1a05c5bc9123_1067752.jpg",
    resCardHeading: "Burger Joint",
    resCardRating: "4.2",
    resCardKey: "American, Burgers",
  },
  {
    resCardImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/e86f2afa-1df2-4dd8-b624-458552fd0e34_546139.jpg",
    resCardHeading: "Tacos Place",
    resCardRating: "4.7",
    resCardKey: "Mexican, Tacos",
  },
  {
    resCardImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/49385719f2089935cc2e1a3fc977bbc8",
    resCardHeading: "Indian Curry House",
    resCardRating: "4.3",
    resCardKey: "Indian, Curry",
  },
  {
    resCardImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hcuzaycejkje1t7qhwvj",
    resCardHeading: "Sushi Bar",
    resCardRating: "4.6",
    resCardKey: "Japanese, Sushi",
  },
];
const ResCard = (props) => {
    console.log(props.resData);
  return (
    <div className="res-card">
      <div className="res-card-img-container">
        <img className="res-card-img" src={props.resData[0].resCardImg} />
        <div className="res-card-heading">
          <h2>{props.resData[0].resCardHeading}</h2>
        </div>
        <div className="res-card-rating">
          <span>{props.resData[0].resCardRating}</span>
        </div>
        <div className="res-card-key">
          <p> {props.resData[0].resCardKey}</p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <ResCard resData={resList}/>
       
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
