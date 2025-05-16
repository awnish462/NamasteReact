const ResCard = (props) => {
  console.log(props.resData.info);

  const { name, avgRating, cuisines, cloudinaryImageId } = props.resData.info;
  return (
    <div className="bg-gray-100 mx-2 mb-2 rounded-md ">
      <img
        className="rounded-2xl h-60"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="font-bold font-mono ml-2 ">
        <h2 className="whitespace-nowrap overflow-hidden text-ellipsis pb-1">
          {name}
        </h2>
      </div>
      <div className="ml-2">
        <span>{avgRating}</span>
      </div>
      <div className="mx-2 ">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis pb-1">
          {" "}
          {cuisines.join(",")}
        </p>
      </div>
    </div>
  );
};

export const withPromotedLable = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black rounded-md p-1">Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
