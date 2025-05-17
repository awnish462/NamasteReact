import { MENU_IMG_URL } from "../../utils/constants";
const ItemList=({menu})=>{
    return(
        <div>
              {menu?.card?.card?.itemCards?.map((item, index) => (
                <div
                  className="flex  shadow p-5 m-auto w-[80%] mb-2 mt-3"
                  key={index}
                >
                  <div className="w-full">
                    <h3 className="text-slate-700 font-bold">
                      {item?.card?.info?.name}
                    </h3>
                    <h4 className="font-semibold ">
                      <span>₹</span>
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </h4>
                    <p className="text-green-700 font-semibold inline ">
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
                    <h4 className="font-normal text-gray-500 mr-5">
                      {item?.card?.info?.description}
                    </h4>
                  </div>
                  <div className="relative shadow-2xl rounded-lg h-36 w-[34vh] mb-5">
                    <img
                      className="h-36 w-full object-cover rounded-lg"
                      src={MENU_IMG_URL + "/" + item?.card?.info?.imageId}
                      alt="menu item"
                    />

                    <button className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 shadow-lg rounded-md text-green-500 font-bold bg-white h-11 w-20">
                      Add
                    </button>
                  </div>
                </div>
              ))}
        </div>
    )
}

export default ItemList;