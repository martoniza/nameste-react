import { useState } from "react";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);

  const fetchData = async () => {
    useEffect(() => {
      fetchData();
    }, []);

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants;
};

export default useRestaurantList;
