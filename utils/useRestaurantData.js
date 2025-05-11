import { useEffect, useState } from "react";
import { RES_URL } from "./constants";
const useRestaurantData = () => {
  const [resData, setResData] = useState([]);
  console.log("use restaurant is called");

  useEffect(()=>{
    fetchData();
    console.log("fetch data is called");
  },[])

  const fetchData=async ()=>{
    const data=await fetch(RES_URL);
    const json=await data.json();
    setResData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
  return resData;
};

export default useRestaurantData;
