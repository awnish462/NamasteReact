// import{IMG_URL} from "../utils/constants"
const ResCard = (props) => {
  console.log(props.resData.info);
  // const{resData}=props;

  const{name,avgRating,cuisines,cloudinaryImageId}=props.resData.info;
  return (
    <div className="res-card">
      <div className="res-card-img-container">
        <img className="res-card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
        <div className="res-card-heading">
          <h2>{name}</h2>
        </div>
        <div className="res-card-rating">
          <span>{avgRating}</span>
        </div>
        <div className="res-card-key">
          <p> {cuisines}</p>
        </div>
      </div>
    </div>
  );
};

export default ResCard;