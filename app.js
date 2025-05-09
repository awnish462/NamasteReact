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
    id: 1,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/1da56fba-dd6e-4122-9c23-1a05c5bc9123_1067752.jpg",
    resCardHeading: "Pizza Palace",
    resCardRating: "⭐ 4.3 • 50-55 mins",
    resCardKey: "Italian, Pizza",
  },
  {
    id: 2,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/1da56fba-dd6e-4122-9c23-1a05c5bc9123_1067752.jpg",
    resCardHeading: "Burger Joint",
    resCardRating: "⭐ 4.2 • 50-55 mins",
    resCardKey: "American, Burgers",
  },
  {
    id: 3,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/e86f2afa-1df2-4dd8-b624-458552fd0e34_546139.jpg",
    resCardHeading: "Tacos Place",
    resCardRating: "⭐ 4.7 • 50-55 mins",
    resCardKey: "Mexican, Tacos",
  },
  {
    id: 4,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/49385719f2089935cc2e1a3fc977bbc8",
    resCardHeading: "Indian Curry House",
    resCardRating: "⭐ 4.3 • 50-55 mins",
    resCardKey: "Indian, Curry",
  },
  {
    id: 5,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hcuzaycejkje1t7qhwvj",
    resCardHeading: "Sushi Bar",
    resCardRating: "⭐ 4.6 • 50-55 mins",
    resCardKey: "Japanese, Sushi",
  },
  {
    id: 6,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/1da56fba-dd6e-4122-9c23-1a05c5bc9123_1067752.jpg",
    resCardHeading: "Pizza Palace",
    resCardRating: "⭐ 4.3 • 50-55 mins",
    resCardKey: "Italian, Pizza",
  },
  {
    id: 7,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/1da56fba-dd6e-4122-9c23-1a05c5bc9123_1067752.jpg",
    resCardHeading: "Burger Joint",
    resCardRating: "⭐ 4.2 • 50-55 mins",
    resCardKey: "American, Burgers",
  },
  {
    id: 8,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/e86f2afa-1df2-4dd8-b624-458552fd0e34_546139.jpg",
    resCardHeading: "Tacos Place",
    resCardRating: "⭐ 4.7 • 50-55 mins",
    resCardKey: "Mexican, Tacos",
  },
  {
    id: 9,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/49385719f2089935cc2e1a3fc977bbc8",
    resCardHeading: "Indian Curry House",
    resCardRating: "⭐ 4.3 • 50-55 mins",
    resCardKey: "Indian, Curry",
  },
  {
    id: 10,
    resCardImg:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hcuzaycejkje1t7qhwvj",
    resCardHeading: "Sushi Bar",
    resCardRating: "⭐ 4.6 • 50-55 mins",
    resCardKey: "Japanese, Sushi",
  },
];
const ResCard = (props) => {
  console.log(props.resData);
  const{resData}=props;

  const{resCardImg,resCardHeading,resCardRating,resCardKey}=resData;
  return (
    <div className="res-card">
      <div className="res-card-img-container">
        <img className="res-card-img" src={resCardImg} />
        <div className="res-card-heading">
          <h2>{resCardHeading}</h2>
        </div>
        <div className="res-card-rating">
          <span>{resCardRating}</span>
        </div>
        <div className="res-card-key">
          <p> {resCardKey}</p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {resList.map((resturant) => (
          <ResCard key={resturant.id} resData={resturant} />
        ))}
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
