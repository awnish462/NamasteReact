import ItemList from "./ItemList";
const RestaurantCategories = ({ item,showMenu,setShowItemList }) => {


  return (
    <div
      onClick={() => {
        setShowItemList();
      }}
    >
      <div className="font-extrabold text-base p-4 font-serif shadow-md mt-6 flex justify-between m-auto w-[80%] ">
        <h1>{item?.card?.card?.title}</h1>
        <span>🔻</span>
      </div>
      <div >{showMenu && <ItemList menu={item} />}</div>
    </div>
  );
};

export default RestaurantCategories;
