import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router";

const Body = () => {
  let [resListData, setResList] = useState([]);
  let [searchText, setSearchText] = useState([]);
  let [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchedData();
  }, []);

  async function fetchedData() {
    const dataFetched = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await dataFetched.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredData(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  if (resListData.length === 0) {
    console.log("Insise shrimmer");
    return <Shrimmer />;
  }

  return (
    <div className="body">
      <div className="search">
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
          <Link to={"/menu/" +resturant.info.name +"/"+ resturant.info.id} key={resturant.info.id} >
            <ResCard key={resturant.info.id} resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
