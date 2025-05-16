import { useParams } from "react-router";
import useMenuData from "../../utils/useMenuData";
import { MENU_IMG_URL } from "../../utils/constants";

const Menu = () => {
  const { resId, resName } = useParams();
  const menuList = useMenuData(resId);

  return (
    <div className="m-16">
      <h1 className="font-bold">{"Restaurant Name:-  " + resName}</h1>
      {menuList?.map((menu, index) => {
        if (index > 1) {
          return (
            <div key={index}>
              <div
                key={index}
                className="font-extrabold text-base p-4 font-serif shadow-md mt-6 flex justify-between m-auto w-[80%]"
              >
                <h1>{menuList[index]?.card?.card?.title}</h1>
                <span>🔻</span>
              </div>
              {menuList[index]?.card?.card?.itemCards?.map((item, index) => (
                <div
                  className="flex  m-auto w-[80%] mb-2 mt-3"
                  key={index}
                >
                  <div className="w-full">
                    <h3 className="text-slate-700 font-bold">
                      {item?.card?.info?.name}
                    </h3>
                    <h4 className="font-semibold ">
                      <span>₹</span>
                      {item?.card?.info?.price / 100}
                    </h4>
                    <p className="text-green-700 font-semibold inline">
                      ⭐{item?.card?.info?.ratings?.aggregatedRating.rating}
                    </p>
                    <span>
                      (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          .ratingCountV2
                      }
                      )
                    </span>
                    <h4 className="font-normal text-gray-500">
                      {item?.card?.info?.description}
                    </h4>
                  </div>
                  <div className="shadow-lg rounded-lg bg-yellow-100 h-36 w-[34vh] mb-5">
                    <img src={MENU_IMG_URL + "/" + item.card.info.imageId} />
                    <button className="absolute shadow-lg rounded-md text-green-500 font-bold bg-white h-11 w-20 content-center ml-10">Add</button>
                  </div>
                </div>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
