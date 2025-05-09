const ResCard = (props) => {
  console.log(props.resData);
  const{resData}=props;

  const{resCardImg,resCardHeading,resCardRating,resCardKey}=resData;
  return (
    <div className="res-card">
      <div className="res-card-img-container">
        <img className="res-card-img" src={resCardImg} />
        <div className="res-card-heading">
          <h2>{resCardHeading}</h2>
        </div>
        <div className="res-card-rating">
          <span>{resCardRating}</span>
        </div>
        <div className="res-card-key">
          <p> {resCardKey}</p>
        </div>
      </div>
    </div>
  );
};

export default ResCard;