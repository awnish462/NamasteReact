import { useParams } from "react-router";
import useMenuData from "../../utils/useMenuData";
import { MENU_IMG_URL } from "../../utils/constants";
import { useState } from "react";
import ResturantCategories from "./RestaurantCategories";

const Menu = () => {
  const { resId, resName } = useParams();
  const menuList = useMenuData(resId);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="m-16">
      <h1 className="font-bold">{"Restaurant Name:-  " + resName}</h1>

      {menuList.map((item, index) => {
        if (index > 1) {
          return <ResturantCategories item={item} key={index} />;
        }
      })}
    </div>
  );
};

export default Menu;
// import { useParams } from "react-router";
