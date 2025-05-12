import { useParams } from "react-router";
import useMenuData from "../../utils/useMenuData";

const Menu = () => {
  const { resId, resName } = useParams();
  const menuList = useMenuData(resId);

  return (
    <div className="menu-container">
      <h1>{resName}</h1>
      {menuList?.map((menu) => (
        <p key={menu?.card?.info?.id}>
          {menu?.card?.info?.name}-
          {menu?.card?.info.defaultPrice / 100 || menu?.card?.info.price / 100}
        </p>
      ))}
    </div>
  );
};

export default Menu;
