import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams(); // it should be used in the URL used for fetching

  // THIS CODE FROM HERE
  const [restInfo, setrestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=371781" // I could not use the proper API
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setrestaurantInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[2]?.info
    );
  };
  // UNTIL HERE can be replaced by a custom hook: useRestaurantMenu.js => const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    restInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <h2>Menu</h2>
      <ul>
        {cuisines.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
