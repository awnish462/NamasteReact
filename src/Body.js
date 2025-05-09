import ResCard from "./ResCard";
import { resList } from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="res-container">
          {resList.map((resturant) => (
            <ResCard key={resturant.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;