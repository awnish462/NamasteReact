import ResCard from "./ResCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [resListData, setResList] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = resListData.filter((res) => res.resCardRating > 4);
            setResList(filteredList);
          }}
        >
          Filter Data
        </button>
      </div>

      <div className="res-container">
        {resListData.map((resturant) => (
          <ResCard key={resturant.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
