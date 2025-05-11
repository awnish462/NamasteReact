import { MENU_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Menu = (props) => {
  const [menuList, setMenuList] = useState([]);
  const { resId ,resName} = useParams();


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setMenuList(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    console.log(
      "Json data:- ",
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };
  //   console.log(menuList[0].card.info);
  //   let [id,name,avgRating,cuisines,costForTwo]=menuList;
  return (
    <div className="menu-container">
        <h1>{resName}</h1>
      {menuList?.map((menu) => (
        <p key={menu?.card?.info?.id}>
          {menu?.card?.info?.name}-
          {menu?.card?.info.defaultPrice/100 || menu?.card?.info.price/100}
        </p>
      ))}
    </div>
  );
};

export default Menu;
