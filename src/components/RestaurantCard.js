import { MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    info;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={MEDIA_ASSETS_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
