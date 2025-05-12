import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../../utils/useRestaurantData";

const Body = () => {
  let resListData =  useRestaurantData();
  console.log("reslistdata:- ", resListData)
  const [searchText, setSearchText] = useState([]);
  let [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(resListData);
    console.log("useeffect")
  },[resListData]);

  

  if (resListData.length === 0) {
    console.log("Insise shrimmer");
    return <Shrimmer />;
  }

  return (
    <div className="mt-14">
      <div className="">
        {console.log("render")}
        {console.log("filtered data:- ",filteredData)}
        <input
          type="text"
          className="bg-slate-300 rounded mx-3" 
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="search"
          className="border-cyan-200 bg-green-400 rounded-md px-2 py-1 "
          onClick={() => {
            filteredData = resListData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filteredData);
          }}
        >
          Search
        </button>
        <button
          className="border-cyan-200 bg-green-400 rounded-md px-2 py-1 mx-2"
          onClick={() => {
            const filteredList = resListData.filter(
              (res) => res.info.avgRating > 4.3
            );

            setFilteredData(filteredList);
          }}
        >
          Filter Data
        </button>
      </div>

      <div className="mt-2 grid grid-cols-6">
        {filteredData.map((resturant) => (
          <Link
            to={"/menu/" + resturant.info.name + "/" + resturant.info.id}
            key={resturant.info.id}
          >
            <ResCard key={resturant.info.id} resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
