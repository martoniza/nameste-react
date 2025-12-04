const RestaurantCard = (props) => {
  const { resData } = props;
  const { imgUrl, name, cuisines, costForTwo, avRating, deliveryTime } =
    resData;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={imgUrl}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>HUF{costForTwo / 100} for 2 pers</h4>
      <h4>{avRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
