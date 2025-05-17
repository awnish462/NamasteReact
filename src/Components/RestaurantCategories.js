import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategories = ({ item }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      onClick={() => {
        setShowMenu(!showMenu);
      }}
    >
      <div className="font-extrabold text-base p-4 font-serif shadow-md mt-6 flex justify-between m-auto w-[80%] ">
        <h1>{item?.card?.card?.title}</h1>
        <span>🔻</span>
      </div>
      <div>{showMenu && <ItemList menu={item} />}</div>
    </div>
  );
};

export default RestaurantCategories;
