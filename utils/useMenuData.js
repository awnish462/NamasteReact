import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const   useMenuData = (resId) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setMenuData(
      // json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      //   ?.card?.itemCards
         json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    console.log("menuData:- ",menuData);
  };

  return menuData;
};

export default useMenuData;
