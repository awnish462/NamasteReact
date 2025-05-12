import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router";
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
    <div className="body">
      <div className="search">
        {console.log("render")}
        {console.log("filtered data:- ",filteredData)}
        <input
          type="text"
          className="search-bar"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="search"
          className="search-btn"
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
          className="search-btn"
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

      <div className="res-container">
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
