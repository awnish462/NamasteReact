import { useParams } from "react-router";
import useMenuData from "../../utils/useMenuData";
import { useState } from "react";
import ResturantCategories from "./RestaurantCategories";

const Menu = () => {
  const { resId, resName } = useParams();
  const menuList = useMenuData(resId);
  const [showIndex, setShowIndex] = useState(0);
  const[openedIndex,setOpenedIndex]=useState(null);

  return (
    <div className="m-16">
      <h1 className="font-bold">{"Restaurant Name:-  " + resName}</h1>

      {menuList.map((item, index) => {
        if (index > 1) {
          return (
            <div key={item?.card?.card?.title|| index}>
              <ResturantCategories
                item={item}
                showMenu={index === showIndex ? true : false  }
                
                setShowItemList={() => setShowIndex(index)}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
